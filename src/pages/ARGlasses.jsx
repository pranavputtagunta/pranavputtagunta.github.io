import SectionHeading from '../components/SectionHeading'
import TechBadge from '../components/TechBadge'

const iterations = [
  { version: 'V1', title: 'Screen w/ Straight Polycarbonate', image: 'assets/images/iter_1.png', label: 'Problem', labelColor: 'text-red-400', desc: 'Text appeared right in front of the eye without optics, making it impossible for elderly users to read at optical infinity.' },
  { version: 'V2', title: 'Curved Polycarbonate Reflector', image: 'assets/images/iter_2.png', label: 'Problem', labelColor: 'text-red-400', desc: 'Introduced astigmatism and warped the text severely, ruining legibility.' },
  { version: 'V3', title: 'Birdbath Reflector', image: 'assets/images/iter_3.png', label: 'Problem', labelColor: 'text-red-400', desc: 'Solved the text focus issue nicely, but birdbath lenses were extremely difficult and expensive to source.' },
  { version: 'V4', title: 'L-Shape with Glass Plano-Convex Lens', image: 'assets/images/iter_4.png', label: 'Problem', labelColor: 'text-red-400', desc: 'Reducing the aperture size to barely fit the screen introduced severe edge vignetting, reducing the "eyebox" tolerance.' },
  { version: 'V5', title: 'Enlarged Apertures + Reflectors', image: 'assets/images/iter_5.png', label: 'Problem', labelColor: 'text-red-400', desc: 'Got rid of vignetting, but the massive solid glass dome made the headset extremely front-heavy and unwearable for extended periods.' },
  { version: 'V6', title: 'Acrylic Fresnel Lens', image: 'assets/images/iter_6.png', label: 'Solution', labelColor: 'text-secondary', desc: 'Achieved optical infinity using an adjustable focus slider, drastically reducing weight with 10% Gyroid infill and PMMA materials, all while preserving the required massive text rendering un-vignetted.', current: true },
]

export default function ARGlasses({ navigate }) {
  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate('projects')}
        className="text-secondary hover:text-secondary/80 mb-8 flex items-center gap-2 font-medium text-sm transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Back to Projects
      </button>

      <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-3">Memory Assistive AR Glasses</h2>
      <p className="text-lg text-secondary/80 mb-10">Ultra-low-cost, high-contrast, and ergonomic augmented reality for Alzheimer's patients</p>

      {/* Problem Statement */}
      <div className="glass rounded-2xl p-6 mb-10 border-l-4 border-secondary">
        <h3 className="text-xl font-bold text-heading mb-4">Problem Statement & Objective</h3>
        <p className="mb-4 text-slate italic">
          "For individuals living with Alzheimer's disease, the progressive loss of memory regarding loved ones and past conversations causes profound emotional pain and social isolation. While augmented reality (AR) has the potential to provide real-time cognitive assistance—such as facial recognition and contextual memory cues—existing smart glasses are prohibitively expensive, physically heavy, and feature low-contrast displays that are unreadable for elderly eyes."
        </p>
        <p className="mb-4 text-slate">
          <strong className="text-heading">The Solution:</strong> There is a critical need for an ultra-low-cost, highly ergonomic AR solution optimized for massive, high-contrast text. This proof-of-concept headset was engineered specifically to seamlessly deliver passive memory prompts (e.g., <em>"This is your son, John"</em>) to help patients retain their independence and connection to their families.
        </p>
        <p className="text-sm text-text/70">
          The core display design was based on the{' '}
          <a href="https://en.wikipedia.org/wiki/Pepper's_Ghost" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">Pepper's Ghost</a>{' '}
          effect and inspired by the open-source{' '}
          <a href="https://www.instructables.com/CheApR-Open-Source-Augmented-Reality-Smart-Glasses/" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">CheApR glasses</a>.
        </p>
      </div>

      {/* Optical Engineering */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-heading border-b border-white/10 pb-3 mb-6">
          <span className="font-mono text-secondary mr-2">01.</span>Optical Engineering & Architecture
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'The "L-Block" Light Pipe', desc: 'Designed an un-tapered 50mm enclosed optical tunnel to act as a mechanical baffle. This preserves a massive collimated light beam, preventing vignetting and maximizing the "eyebox" so the user does not lose the image if the glasses shift.' },
            { title: 'Lens Selection', desc: 'Transitioned from a heavy 50mm solid glass dome to a 50mm PMMA Fresnel lens (60mm focal length). This flattened the incident angle of the light, minimizing chromatic aberration while drastically reducing the headset\'s physical weight.' },
            { title: 'Reflective Array', desc: 'Utilized a 50x50mm first-surface mirror mounted at a 45-degree angle to redirect the 50mm optical envelope without clipping the beam.' },
            { title: 'Distortion Correction', desc: 'Replaced a curved aerodynamic front visor with a perfectly flat polycarbonate beamsplitter to eliminate astigmatism and maintain infinite focus for the collimated text.' },
          ].map((item) => (
            <div key={item.title} className="glass rounded-xl p-5">
              <h4 className="text-base font-bold text-secondary mb-2">{item.title}</h4>
              <p className="text-sm text-slate">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAD Iterations */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-heading border-b border-white/10 pb-3 mb-6">
          Design Iterations (CAD)
        </h3>
        <p className="mb-6 text-slate">So far, I've designed 6 versions in CAD, refining the optical and mechanical characteristics each time:</p>
        <div className="space-y-4">
          {iterations.map((iter) => (
            <div
              key={iter.version}
              className={`flex flex-col md:flex-row glass rounded-xl overflow-hidden ${iter.current ? 'border border-secondary/40' : ''}`}
            >
              <div className="md:w-1/3 bg-white/5 min-h-[200px] flex items-center justify-center">
                <img src={iter.image} alt={iter.version} className="w-full h-full object-cover" />
              </div>
              <div className={`md:w-2/3 p-6 ${iter.current ? 'bg-secondary/5' : ''}`}>
                <h4 className={`text-lg font-bold mb-2 ${iter.current ? 'text-secondary' : 'text-heading'}`}>
                  {iter.version}: {iter.title}
                </h4>
                <p className="text-sm text-slate">
                  <strong className={iter.labelColor}>{iter.label}:</strong> {iter.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mechanical Design */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-heading border-b border-white/10 pb-3 mb-6">
          <span className="font-mono text-secondary mr-2">02.</span>Mechanical & CAD Design
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: '⚖️', title: 'Weight Optimization', desc: 'Reduced the right-temple optical engine weight from 175g down to roughly 120g using a Fresnel lens and 10% Gyroid infill.' },
            { icon: '🎯', title: 'Adjustable Focus', desc: 'Engineered a telescoping, friction-fit focus slider with a 0.2mm tolerance gap and 1mm chamfered guide paths for precise manual focal calibration per user.' },
            { icon: '⚖️', title: 'Ergonomic Counterbalance', desc: 'Currently in the planning phase. Will not use an onboard battery since it relies on tethered phone power, simplifying the left-temple weight balancing against the right-temple optical engine.' },
          ].map((item) => (
            <div key={item.title} className="glass rounded-xl p-5">
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h4 className="text-base font-bold text-heading mb-2">{item.title}</h4>
              <p className="text-sm text-slate">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hardware Stack */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-heading border-b border-white/10 pb-3 mb-6">
          <span className="font-mono text-secondary mr-2">03.</span>Hardware & Compute Stack
        </h3>
        <div className="space-y-4">
          {[
            { title: 'Microcontroller', desc: 'Seeed Studio XIAO ESP32S3 Sense. Chosen for its tiny form factor, integrated microphone, and ample GPIO pins.' },
            { title: 'Display', desc: '1.8-inch SPI display (TFT/AMOLED) connected via standard header pins.' },
            { title: 'Vision Pipeline', desc: 'OV2640 wide-angle camera utilizing an extended 120mm FPC ribbon cable to reach the front, keeping the processor on the frame.' },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 glass rounded-xl p-5">
              <span className="text-secondary mt-0.5">&#9656;</span>
              <div>
                <h4 className="font-bold text-heading">{item.title}</h4>
                <p className="text-sm text-slate">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Software Stack */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-heading border-b border-white/10 pb-3 mb-6">
          <span className="font-mono text-secondary mr-2">04.</span>Software Stack & AI Pipeline (To be implemented)
        </h3>
        <div className="glass rounded-xl p-6 mb-6">
          <h4 className="text-lg font-bold text-secondary mb-3">Tethered Edge Computing</h4>
          <p className="text-sm text-slate">
            To keep the glasses ultra-lightweight and battery-free, all heavy logic runs on a tethered iPhone via a dedicated React Native application. The iPhone transmits the display output directly through a USB-C connection to the ESP32 on the glasses.
          </p>
        </div>
        <h4 className="text-lg font-bold text-heading mb-4">Core Model Features</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'RAG & LLM Integration', desc: 'Uses context-aware retrieval and Language Models to process conversational history and generate passive memory prompts.' },
            { title: 'Facial Detection Models', desc: "Continuously scans the incoming feed to identify faces and cross-reference them with the user's stored loved ones." },
            { title: 'Voice AI', desc: "Listens and transcribes real-time audio through the ESP32S3's microphone, syncing auditory cues with visuals." },
            { title: 'OpenCV Annotations', desc: 'Applies high-contrast bounding boxes and textual labels onto the video feed, optimized for readability on the 1.8-inch display.' },
          ].map((item) => (
            <div key={item.title} className="glass rounded-xl p-4 border-l-2 border-secondary">
              <h5 className="font-bold text-heading text-sm mb-1">{item.title}</h5>
              <p className="text-xs text-text/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Progress */}
      <section className="glass rounded-2xl p-6 border border-secondary/20">
        <h3 className="text-2xl font-bold text-heading mb-5">
          <span className="font-mono text-secondary mr-2">05.</span>Current Progress & Next Steps
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3 text-slate">
            <span className="text-green-400 text-lg mt-0.5">&#10003;</span>
            <p><strong className="text-heading">Phase 1 (Complete):</strong> Optical math verified, hardware collisions solved, and CAD models locked in for the 60mm focal length housing. Bill of Materials sourced.</p>
          </div>
          <div className="flex items-start gap-3 text-slate">
            <span className="text-secondary text-lg mt-0.5 animate-pulse">&#9679;</span>
            <p><strong className="text-heading">Phase 2 (In Progress):</strong> Shifting focus to firmware. Developing a C++ WebSocket server on the ESP32 to receive and render live text streams over Wi-Fi/Bluetooth from a paired iOS device.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
