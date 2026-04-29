import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import ModelSequence from './ModelSequence'

// Auto-discovered at build time from src/assets/models/*.glb. Drop a new .glb
// into that folder and Vite will pick it up — no code change needed. Vite
// returns the resolved (hashed) URL for each file as a string.
const modelModules = import.meta.glob('../assets/models/*.glb', {
  eager: true,
  query: '?url',
  import: 'default',
})
const MODELS = Object.values(modelModules)

// Tweak each phase's duration (in seconds) here to retime the sketch/unsketch.
// Total cycle time per model = sum of these values.
const PHASE_DURATIONS = {
  sketch:   3.0,  // wireframe edges draw in (random "scribbled" order)
  hold:     3.0,  // fully sketched, slow auto-rotate
  unsketch: 2.0,  // edges erase in reverse
}

export default function HologramBackground() {
  return (
    // Fixed full-viewport layer behind page content. The wrapper itself accepts
    // pointer events so OrbitControls can receive drag input. The Home page
    // content above must use `pointer-events-none` on its container with
    // `pointer-events-auto` on actual interactive elements (links/buttons),
    // so empty space lets drag events fall through to the canvas.
    <div
      className="fixed inset-0 z-0 pointer-events-auto"
      aria-hidden="true"
    >
      <Canvas
        // Fov widened + pulled back so the larger TARGET_SIZE model fills the
        // viewport edge-to-edge for an immersive, screen-encompassing feel.
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <pointLight position={[-5, 0, -5]} intensity={0.6} color="#64ffda" />
        <pointLight position={[5, -3, 2]} intensity={0.4} color="#64ffda" />

        <Suspense fallback={null}>
          <ModelSequence models={MODELS} phaseDurations={PHASE_DURATIONS} />
          <Preload all />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  )
}
