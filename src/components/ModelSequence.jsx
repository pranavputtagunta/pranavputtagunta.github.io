import { useEffect, useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const PHASE_ORDER = ['sketch', 'hold', 'unsketch']
const HOLO_COLOR = '#64ffda' // matches the site's --color-secondary
const TARGET_SIZE = 5.0      // longest-axis size after normalization (world units)
const EDGE_ANGLE  = 1        // degrees; lower = more edges kept (denser wireframe)
const DRAW_WINDOW = 0.08     // fraction of total progress each edge takes to draw

/**
 * Owns the loop state: which model in the array is currently being shown.
 * Mounts a fresh PhasedModel keyed by URL so its state machine resets cleanly
 * each time we switch models (and React unmounts the old one for cleanup).
 */
export default function ModelSequence({ models, phaseDurations }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Warm up the GLTF cache for everything in the playlist so swaps don't pop.
  useEffect(() => {
    models.forEach((url) => useGLTF.preload(url))
    return () => {
      // Drop GPU resources for these models when the background unmounts.
      models.forEach((url) => useGLTF.clear(url))
    }
  }, [models])

  const handleCycleComplete = () => {
    setCurrentIndex((prev) => (prev + 1) % models.length)
  }

  return (
    <PhasedModel
      key={models[currentIndex]}
      url={models[currentIndex]}
      phaseDurations={phaseDurations}
      onComplete={handleCycleComplete}
    />
  )
}

/**
 * Builds an EdgesGeometry from a mesh's geometry, then attaches an aT
 * attribute per vertex such that each edge "draws" from start to end as a
 * uProgress uniform sweeps 0 -> 1.
 *
 * Edge i is assigned a randomly shuffled slot in [0, 1 - DRAW_WINDOW]; both
 * vertices of the edge are tagged so the GPU's linear interpolation of aT
 * along the line gives a smooth pen-stroke reveal.
 */
function buildSketchEdges(geometry) {
  const edges = new THREE.EdgesGeometry(geometry, EDGE_ANGLE)
  const positions = edges.getAttribute('position')
  const edgeCount = positions.count / 2

  // Fisher-Yates shuffle of edge order — gives the chaotic "scribbling in" feel.
  const order = new Array(edgeCount)
  for (let i = 0; i < edgeCount; i++) order[i] = i
  for (let i = edgeCount - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }

  const ts = new Float32Array(positions.count)
  const span = Math.max(0.0001, 1 - DRAW_WINDOW)
  for (let i = 0; i < edgeCount; i++) {
    const startT = (order[i] / Math.max(1, edgeCount)) * span
    ts[2 * i]     = startT                  // edge start vertex
    ts[2 * i + 1] = startT + DRAW_WINDOW    // edge end vertex
  }
  edges.setAttribute('aT', new THREE.BufferAttribute(ts, 1))
  return edges
}

/**
 * Single shared shader material across all line segments. Discards fragments
 * whose aT exceeds uProgress (so unrevealed parts of edges aren't drawn) and
 * smooths a short fade just behind the leading edge for a soft pen-tip look.
 */
function makeSketchMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uProgress: { value: 0 },
      uColor:    { value: new THREE.Color(HOLO_COLOR) },
      uFade:     { value: 0.04 }, // softness of the trailing edge of the "pen"
    },
    vertexShader: /* glsl */ `
      attribute float aT;
      varying float vT;
      void main() {
        vT = aT;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uProgress;
      uniform vec3  uColor;
      uniform float uFade;
      varying float vT;
      void main() {
        if (vT > uProgress) discard;
        // Trailing fade just behind the "pen", multiplied by a constant alpha
        // so the wireframe sits behind the text without competing for attention.
        float alpha = 1.0 - smoothstep(uProgress - uFade, uProgress, vT);
        gl_FragColor = vec4(uColor, alpha * 0.5);
      }
    `,
    transparent: true,
    depthWrite: false,
    toneMapped: false, // keep it neon under bloom
  })
}

/**
 * Loads a single GLB and runs the per-cycle state machine:
 *   sketch -> hold -> unsketch -> (notify parent)
 *
 * Strategy: replace every Mesh in the cloned scene graph with a LineSegments
 * built from EdgesGeometry + a shared sketch shader. A single uProgress
 * uniform drives the whole reveal; sweeping it 0->1 sketches in, 1->0 unsketches.
 */
function PhasedModel({ url, phaseDurations, onComplete }) {
  const { scene } = useGLTF(url)
  const groupRef = useRef()

  // Mutable phase tracker; lives in a ref so useFrame doesn't trigger re-renders.
  const phaseRef = useRef({ index: 0, elapsed: 0 })

  const { workScene, sketchMaterial, disposables } = useMemo(() => {
    const cloned = scene.clone(true)
    cloned.updateMatrixWorld(true) // make sure world matrices are fresh before measuring

    // Compute world-space AABB of the original (untouched) clone.
    const box = new THREE.Box3().setFromObject(cloned)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z) || 1
    const fitScale = TARGET_SIZE / maxDim

    // Wrapper Group separates the two transforms: the inner clone gets a
    // -center offset to put its centroid at the wrapper's origin, the
    // wrapper handles uniform scale. Doing both on the same node is wrong
    // because local-position is added BEFORE local-scale in the world
    // transform — so combined, the centroid would land at fitScale*center
    // instead of zero (the off-center bug).
    const wrapper = new THREE.Group()
    cloned.position.sub(center)
    wrapper.add(cloned)
    wrapper.scale.setScalar(fitScale)

    const material = makeSketchMaterial()
    const createdGeoms = []

    // Collect meshes first to avoid mutating the tree during traversal.
    const meshes = []
    cloned.traverse((child) => {
      if (child.isMesh) meshes.push(child)
    })

    // Replace each Mesh in-place with LineSegments built from its edge geometry.
    meshes.forEach((mesh) => {
      const edges = buildSketchEdges(mesh.geometry)
      const lines = new THREE.LineSegments(edges, material)
      // Decompose the mesh's local matrix into position/quaternion/scale.
      // GLTF nodes can carry their full transform on `mesh.matrix` with
      // matrixAutoUpdate=false, so copying p/r/s individually loses anything
      // baked into the matrix and produces distortion across re-mounts.
      // Using the quaternion (not Euler) also avoids rotation-order surprises.
      mesh.updateMatrix()
      mesh.matrix.decompose(lines.position, lines.quaternion, lines.scale)
      lines.name = mesh.name + '_sketch'
      const parent = mesh.parent
      if (parent) {
        parent.add(lines)
        parent.remove(mesh)
      }
      createdGeoms.push(edges)
    })

    return { workScene: wrapper, sketchMaterial: material, disposables: createdGeoms }
  }, [scene])

  // Free GPU resources when this model is swapped out.
  useEffect(() => {
    return () => {
      sketchMaterial.dispose()
      disposables.forEach((g) => g.dispose())
    }
  }, [sketchMaterial, disposables])

  useFrame((_, delta) => {
    const state = phaseRef.current
    const phaseName = PHASE_ORDER[state.index]
    const duration = phaseDurations[phaseName] ?? 1
    state.elapsed += delta
    const t = Math.min(state.elapsed / duration, 1) // normalized [0..1] within this phase

    switch (phaseName) {
      case 'sketch':
        sketchMaterial.uniforms.uProgress.value = t
        break
      case 'hold':
        sketchMaterial.uniforms.uProgress.value = 1
        if (groupRef.current) groupRef.current.rotation.y += delta * 0.25
        break
      case 'unsketch':
        sketchMaterial.uniforms.uProgress.value = 1 - t
        break
    }

    // Advance to the next phase when this one's time is up.
    if (state.elapsed >= duration) {
      state.elapsed = 0
      state.index += 1
      if (state.index >= PHASE_ORDER.length) {
        state.index = 0
        if (groupRef.current) groupRef.current.rotation.set(0, 0, 0)
        onComplete?.()
      }
    }
  })

  return <primitive ref={groupRef} object={workScene} />
}
