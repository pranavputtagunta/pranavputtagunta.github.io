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
          <span className="font-mono text-secondary mr-2">04.</span>Software Stack & AI Pipeline
        </h3>
        <div className="glass rounded-xl p-6 mb-6">
          <h4 className="text-lg font-bold text-secondary mb-3">Distributed Compute Architecture</h4>
          <p className="text-sm text-slate">
            To keep the glasses ultra-lightweight and battery-free, all AI inference runs off-device. A React Native iPhone app captures the camera and microphone and streams them over Wi-Fi to a "Vision Worker" — a FastAPI service running the same Python pipeline validated on a laptop. The phone then pushes the resulting display payload to the ESP32S3 over the glasses' own Wi-Fi access point, with USB-C reserved purely for power.
          </p>
        </div>
        <h4 className="text-lg font-bold text-heading mb-4">Core Model Features</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'RAG & LLM Integration', desc: "Google Gemini generates warm, natural-language memory prompts from retrieved facts, using semantic embedding-based retrieval so only what's contextually relevant reaches the model — with an offline template fallback so the demo never has a hard dependency on network access." },
            { title: 'Self-Improving Face Recognition', desc: 'Confirms new detections with a quick yes/no prompt during onboarding and folds accepted photos directly into the live recognition model, improving accuracy without retraining or a restart.' },
            { title: 'Voice AI', desc: "Local Whisper transcription with a voice-activity gate to avoid hallucinating text on silence, syncing live conversation context with the visual memory prompts." },
            { title: 'Cross-Platform Display Pipeline', desc: 'The same AR display renderer runs identically in the desktop simulation, the iPhone app, and — via a WebSocket bridge — the physical ESP32S3 SPI display, so what you see in testing is exactly what ships.' },
          ].map((item) => (
            <div key={item.title} className="glass rounded-xl p-4 border-l-2 border-secondary">
              <h5 className="font-bold text-heading text-sm mb-1">{item.title}</h5>
              <p className="text-xs text-text/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Software Architecture Deep Dive */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-heading border-b border-white/10 pb-3 mb-6">
          <span className="font-mono text-secondary mr-2">05.</span>Software Architecture Deep Dive
        </h3>
        <p className="mb-6 text-slate">
          The desktop pipeline runs six daemon threads connected by bounded queues, and every AI-dependent stage — text generation, semantic retrieval, and voice activity detection — is built as a swappable provider chain instead of a single hardcoded API call. The goal: a demo that degrades gracefully when a network call is slow, a quota runs out, or there's no internet at all, rather than freezing or crashing.
        </p>

        <div className="mb-8">
          <h4 className="text-lg font-bold text-heading mb-3">Local vs. Remote LLMs: Dual Fallback Chains</h4>
          <p className="text-sm text-slate mb-4">
            Two independent backend chains run in parallel roles — one phrases the memory prompt, one scores retrieval candidates — each trying its providers in order until one answers. A per-backend circuit breaker skips a reliably-failing provider entirely rather than paying its full timeout on every call, and permanent errors (a quota exhausted, a bad argument) open the breaker immediately instead of waiting to fail the same way again.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Remote — Gemini', badge: 'Best quality', desc: "gemini-3.6-flash phrases the prompt; gemini-embedding-001 scores retrieval. Fastest and highest quality when healthy, but quota-limited and network-dependent — a single failure opens its circuit breaker for a cooldown period rather than retrying blindly." },
              { title: 'Local — Ollama', badge: 'Steady fallback', desc: "gemma4:e2b for generation, embeddinggemma:300m for retrieval, both served from a local Ollama instance kept warm in memory. No internet dependency and a steady ~2.5s once loaded — the difference between a fallback tier that works and one that's theoretical." },
              { title: 'Offline — TF-IDF', badge: 'Always available', desc: "A dependency-free lexical ranker as the retrieval floor of last resort — no model, no network, no warm-up cost. Weaker than embeddings (it matches “hackathon” to “hackathon” but not “competition”), but retrieval can never go fully blind." },
            ].map((item) => (
              <div key={item.title} className="glass rounded-xl p-5 border-l-2 border-secondary">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h5 className="font-bold text-heading text-sm">{item.title}</h5>
                  <span className="px-2 py-0.5 text-[10px] font-mono text-secondary bg-secondary/10 rounded-full border border-secondary/20 whitespace-nowrap">{item.badge}</span>
                </div>
                <p className="text-xs text-text/70">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-text/60 mt-4">
            One subtlety that matters here: cosine similarity scores aren't comparable across embedding models — Gemini's cluster around 0.55-0.71 on real memory data, while the local model spreads 0.13-0.47. A single relevance threshold can't be right for both, so each provider carries its own measured similarity floor, and a retrieval never mixes vectors from two different models mid-query.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-bold text-heading mb-3">Memory Retrieval (RAG) Pipeline</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Always-Include vs. Ranked Pool', desc: "A person's name, relationship, last interaction, and any fact flagged important always reach the LLM untouched. Everything else — ordinary facts, past conversations, related people — competes for a handful of ranked slots, so an unrelated family member never surfaces unless the live conversation is actually about them." },
              { title: 'Semantic Retrieval with Provenance', desc: "Candidates are scored by embedding cosine similarity against the live conversation, and results are tagged with which backend answered. A prompt from the primary model caches for 90 seconds; a degraded fallback answer caches for only 3 — so one slow API call can't pin a worse answer to the display for a full cooldown cycle." },
              { title: 'Self-Updating Memory', desc: "A dedicated writer thread listens for transcripts attributed to whoever is currently recognized on camera and appends them straight into that person's memory file — so today's conversation becomes tomorrow's retrieval context, with no manual editing." },
              { title: 'Graceful Degradation, End to End', desc: "Every layer has a next-best option: Gemini falls back to a local model, semantic search falls back to lexical TF-IDF, and a real LLM answer falls back to a filled-in template — so the AR display never goes blank, it just gets simpler." },
            ].map((item) => (
              <div key={item.title} className="glass rounded-xl p-4 border-l-2 border-secondary">
                <h5 className="font-bold text-heading text-sm mb-1">{item.title}</h5>
                <p className="text-xs text-text/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-heading mb-3">Voice Pipeline: Three-Gate Noise Filtering</h4>
          <p className="text-sm text-slate mb-4">
            A single energy threshold can't tell room tone from speech — early testing on a live session produced fluent-sounding nonsense ("regular oven", "I can't see any momentum") transcribed from an empty room. Every chunk is now checked three times, cheapest gate first, since it becomes both the retrieval query and a permanent memory entry:
          </p>
          <div className="space-y-3">
            {[
              { step: '1', title: 'RMS Energy', desc: "A near-free pre-filter tuned just above the microphone's noise floor — its only job is skipping an expensive VAD call on digital silence." },
              { step: '2', title: 'Silero VAD', desc: 'A real neural speech detector (~5ms) that catches room tone and ambient noise a simple energy threshold cannot — the gate that actually separates speech from silence.' },
              { step: '3', title: "Whisper's Own Confidence", desc: "A final backstop using Whisper's own no-speech probability and log-probability scores, catching speech-like noise that made it all the way to the decoder." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 glass rounded-xl p-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-mono text-sm flex items-center justify-center">{item.step}</span>
                <div>
                  <h5 className="font-bold text-heading text-sm">{item.title}</h5>
                  <p className="text-xs text-text/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="glass rounded-2xl p-6 border border-secondary/20">
        <h3 className="text-2xl font-bold text-heading mb-5">
          <span className="font-mono text-secondary mr-2">06.</span>Current Progress & Next Steps
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3 text-slate">
            <span className="text-green-400 text-lg mt-0.5">&#10003;</span>
            <p><strong className="text-heading">Phase 1 — Desktop AI Pipeline (Complete):</strong> Real-time face recognition, Gemini-powered RAG memory prompts, and Whisper voice transcription all run together end-to-end on a laptop, rendering to a simulated AR display. Recognition also self-improves live through a confirm-and-learn calibration loop.</p>
          </div>
          <div className="flex items-start gap-3 text-slate">
            <span className="text-green-400 text-lg mt-0.5">&#10003;</span>
            <p><strong className="text-heading">Phase 2 — iOS App + Vision Worker (Complete):</strong> Ported the pipeline to a React Native/Expo app that captures the phone's camera and mic and streams to a FastAPI "Vision Worker" reusing the Phase 1 code, so the same AI runs with zero on-device inference.</p>
          </div>
          <div className="flex items-start gap-3 text-slate">
            <span className="text-secondary text-lg mt-0.5 animate-pulse">&#9679;</span>
            <p><strong className="text-heading">Phase 3 — Glasses Firmware (Implemented; hardware bring-up in progress):</strong> ESP32S3 firmware hosts a WebSocket server that renders the phone's live display payload onto the physical SPI TFT, with a laptop emulator for testing the bridge without hardware in hand. The optical/mechanical housing is CAD-complete through V6; wiring and flashing onto real hardware is the remaining step to close the loop end-to-end.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
