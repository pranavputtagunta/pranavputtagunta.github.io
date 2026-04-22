import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'AR Glasses',
    badge: 'In Development',
    subtitle: "Alzheimer's AR Memory Assistant",
    bullets: [
      'Engineered an ultra-low-cost, lightweight AR headset delivering facial recognition and passive memory prompts',
      'Optimized for elderly accessibility with high-contrast text streaming and ergonomic counterbalance',
      'Tested 6 different optical architectures prioritizing infinite focus and maximum eyebox',
    ],
    techs: ['C++', 'CAD', 'Optics', 'ESP32'],
    navigateTo: 'ar-glasses',
  },
  {
    title: 'SideKick',
    badge: 'In Development',
    subtitle: 'AI-Powered Sports Training Platform',
    bullets: [
      'Building personalized training plans using LLM-powered recommendation system',
      'Implementing targeted skill development with step-by-step training instructions',
      'Integrating OpenCV-based video processing for real-time feedback and comparison',
      'Creating side-by-side video analysis with expert demonstrations',
      'Building a scalable AI coaching app on GCP, using a PostgreSQL database, React Native, and Redis + Celery.',
      'Built a REST API powered by an LLM to serve real-time video analysis and personalized feedback with Firebase auth.',
      'Engineered an OpenCV pipeline for gamified form analysis, integrating engaging ML insights with the UI.',
    ],
    techs: ['React', 'Flask', 'OpenCV', 'Python'],
    links: [{ href: 'https://github.com/pranavputtagunta/SideKick', label: 'View Project' }],
  },
  {
    title: 'VisLink',
    badge: '1st Overall @ SacHacks VI',
    subtitle: 'Vision-Powered Computer Assistance',
    bullets: [
      'Developed VisLink, an accessibility tool enabling immobile patients to interact with computers hands-free.',
      'Implemented facial tracking and blink detection using MediaPipe and OpenCV, reaching ~80% accuracy.',
      'Engineered a low-latency vision pipeline achieving 80% accuracy in real-time facial signal processing for cursor control.',
      'Added speech recognition pipeline for voice-based navigation with ~70% accuracy.',
      'Integrated vision controls, blink detection, smoothing algorithms, and speech recognition, boosting tool reliability.',
      'Currently working with doctors to develop an open-source version of this software to benefit patients',
    ],
    techs: ['Python', 'OpenCV', 'MediaPipe'],
    links: [
      { href: 'https://github.com/pranavputtagunta/vislink', label: 'View Project' },
      { href: 'https://devpost.com/software/vislink-visual-link', label: 'Devpost' },
    ],
  },
  {
    title: 'Manny.ai',
    badge: 'SacHacks VII',
    subtitle: 'AI-Powered CAD Refinement and Analysis Engine for Startups',
    bullets: [
      'Developed an AI copilot transforming NLP inputs into geometric modifications using an OpenAI o3-mini intent pipeline.',
      'Architected an Indexed Boundary Representation (B-Rep) structural design converting STEP files into logical nodes optimizing LLM token limits efficiently by 80%.',
      'Leveraged CadQuery scripts alongside Topological Graph Traversal parsing meshes via Boolean functions securely mitigating OpenCASCADE kernel faults.',
      'Generated automated heatmaps and dynamic vertices using Numpy logic, Trimesh physics, and React Three Fiber rendering.',
    ],
    techs: ['R3F', 'React', 'CadQuery', 'Python', 'Trimesh', 'Numpy', 'OpenAI'],
    links: [
      { href: 'https://github.com/pranavputtagunta/mannyai', label: 'View Project' },
      { href: 'https://devpost.com/software/manny-ai', label: 'Devpost' },
    ],
  },
  {
    title: 'Buck-It',
    badge: 'DiamondHacks 2026',
    subtitle: 'Gamified Bucket-List Social Media App',
    bullets: [
      'Built a unified social architecture mapping user discovery, planning, group collaborations, and media workflows seamlessly around bucket objects.',
      'Constructed a production-ready FastAPI logic layer to implement custom group joining, secure API route generation, and dynamic activity timelines.',
      'Integrated Supabase querying infrastructure directly mitigating structural bottlenecks during UX onboarding processes.',
      'Established structured interaction channels leveraging Gemini constraints to generate functional plans predictably without producing erratic UX.',
    ],
    techs: ['FastAPI', 'TypeScript', 'Python', 'React Native', 'Supabase', 'Gemini'],
    links: [
      { href: 'https://github.com/pranavputtagunta/Buck-It', label: 'View Project' },
      { href: 'https://devpost.com/software/buck-it-u4q20c', label: 'Devpost' },
    ],
  },
  {
    title: 'PrepNotch',
    badge: 'In Development',
    subtitle: 'LLM-Powered Personalized Tutoring Platform',
    bullets: [
      'Designing an agentic tutoring system that creates dynamic learning plans from user goals and documents',
      'Built a LangGraph-based multi-agent workflow for lesson generation, quiz creation, and feedback refinement',
      'Implemented RAG and AWS to integrate uploaded textbooks and syllabi into lessons',
      'Engineered tool-using agents with context engineering, persistent memory, and progress tracking',
      'Developed a scalable Flask API using LangChain to automate lessons, quizzes, and generate personalized user feedback.',
      'Created a custom table of contents-based indexing system which optimized LLM query efficiency for learning materials.',
    ],
    techs: ['LangChain', 'LangGraph', 'RAG', 'Cursor', 'AWS'],
    links: [{ href: 'https://github.com/pranavputtagunta/prep_notch', label: 'View Project' }],
  },
  {
    title: 'OpenLabel',
    badge: '1st in Track @ DiamondHacks',
    subtitle: 'Vision & LLM-Powered Allergy and Diet Recommender',
    bullets: [
      'Built a dietary preference agent that evaluates food packaging through image input and ingredient scanning',
      'Built an image-processing pipeline to parse product images and ingredient labels using Gemini + CV',
      'Generated user-specific buying recommendations using LLMs based on allergies and goals',
    ],
    techs: ['Python', 'OpenCV', 'Gemini'],
    links: [
      { href: 'https://github.com/pranavputtagunta/OpenLabel', label: 'View Project' },
      { href: 'https://devpost.com/software/openlabel', label: 'Devpost' },
    ],
  },
  {
    title: 'Alethiea',
    badge: 'Berkeley AI Hackathon',
    subtitle: 'Agentic-Driven Healthcare Management',
    bullets: [
      'Developed a personalized pill tracker that offers medication guidance and autonomous alerts',
      'Used OpenCV and Gemini API to detect and classify pills from images; tracked dosage timelines',
      'Designed agent framework to auto-adjust routines and send alerts or contact physicians as needed',
    ],
    techs: ['Python', 'Streamlit', 'OpenCV', 'Gemini', 'Letta'],
    links: [
      { href: 'https://github.com/pranavputtagunta/aletheia', label: 'View Project' },
      { href: 'https://devpost.com/software/aletheia-clarity-in-care', label: 'Devpost' },
    ],
  },
  {
    title: 'MentalQuest',
    badge: '4th Place',
    subtitle: 'AI-Powered Mental Health Support Platform',
    bullets: [
      'Integrated Google Gemini to provide personalized mental health support and tailored self-care tasks',
      'Developed gamified self-care experience through interactive daily quests',
      'Designed intuitive UI/UX for inclusive and seamless user experience',
      'Architected a full-stack mental health app with responsive React frontend, a Flask backend, and a MongoDB database.',
      'Integrated Gemini API to power AI-driven self-care recommendations and interactive user progress tracking features.',
      'Delivered a gamified user experience with daily quests, journaling, awards, and chatbots, securing 4th place.',
      'Competed against graduate students and upperclassmen as a freshman',
    ],
    techs: ['React', 'Flask', 'MongoDB', 'Python', 'Gemini API'],
    links: [{ href: 'https://github.com/pranavputtagunta/mentalquest', label: 'View Project' }],
  },
  {
    title: 'LightYear',
    badge: null,
    subtitle: 'Space Tourism Website',
    bullets: [
      'Designed and developed an interactive space tourism website for Webmaster 2023',
      'Implemented user login functionality and engaging animations',
      'Created responsive design with interactive features for enhanced user experience',
    ],
    techs: ['HTML', 'CSS', 'JavaScript'],
    links: [{ href: 'https://lightyear-webmaster.glitch.me/', label: 'View Project' }],
  },
]

const skills = {
  languages: [
    { name: 'Python', level: 'Advanced', icon: 'fab fa-python' },
    { name: 'Assembly', level: 'Proficient', icon: 'fas fa-microchip' },
    { name: 'Java', level: 'Advanced', icon: 'fab fa-java' },
    { name: 'C / C++', level: 'Advanced', icon: 'fas fa-code' },
    { name: 'JavaScript / TypeScript', level: 'Proficient', icon: 'fab fa-js' },
    { name: 'SQL / NoSQL', level: 'Proficient', icon: 'fas fa-database' },
    { name: 'ROS', level: 'Proficient', icon: 'fas fa-robot' },
    { name: 'Linux', level: 'Proficient', icon: 'fas fa-linux' },
    { name: 'Git / GitHub', level: 'Proficient', icon: 'fab fa-git-alt' },
    { name: 'Swift', level: 'Familiar', icon: 'fas fa-apple' },
    { name: 'HTML / CSS', level: 'Proficient', icon: 'fas fa-code-branch' },
  ],
  frameworks: [
    'Flask', 'React', 'Node.js', 'TensorFlow', 'PyTorch', 'OpenCV',
    'FastAPI', 'Docker', 'AWS / GCP', 'YOLO', 'CUDA', 'PostgreSQL / MongoDB',
  ],
  concepts: [
    'Full-stack Development', 'APIs & Microservices', 'Machine Learning',
    'Computer Vision', 'Robotics Perception', 'Motion Planning',
    'Data Pipelines & Distributed Systems', 'Algorithm Optimization',
    'Cloud Infrastructure & CI/CD', 'Agile Development',
  ],
}

export default function Projects({ navigate }) {
  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="w-full lg:w-7/12">
        <SectionHeading number="01">Projects</SectionHeading>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              {...p}
              onClick={p.navigateTo ? () => navigate(p.navigateTo) : undefined}
            />
          ))}
        </div>
      </div>

      <div className="lg:w-5/12">
        <SectionHeading number="02">Technical Skills</SectionHeading>

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-heading mb-4 font-mono">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {skills.languages.map((l) => (
              <div key={l.name} className="glass glass-hover rounded-lg p-4 text-center transition-all duration-200">
                <span className="block text-sm font-medium text-heading">{l.name}</span>
                <span className="text-xs font-mono text-secondary mt-1 block">{l.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-heading mb-4 font-mono">Frameworks & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {skills.frameworks.map((f) => (
              <span key={f} className="px-3 py-2 text-sm glass rounded-lg hover:bg-white/10 transition-colors">
                {f}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-heading mb-4 font-mono">Concepts & Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {skills.concepts.map((c) => (
              <span key={c} className="px-3 py-2 text-sm glass rounded-lg hover:bg-white/10 transition-colors">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
