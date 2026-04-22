import SectionHeading from '../components/SectionHeading'
import ExperienceCard from '../components/ExperienceCard'

export default function Experiences({ navigate }) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <SectionHeading number="03">Experiences</SectionHeading>

      <ExperienceCard
        title="Yonder Dynamics"
        dates="Oct 2024 - Present"
        role="Software Lead"
        bullets={[
          'Integrated RTK GPS with Pixhawk, boosting accuracy from 10m to 10cm and eliminating 30% of navigation failures.',
          'Designed physics-based simulations using custom URDF models for asynchronous testing of autonomous logic.',
          'Engineered robust traversal routines and a loss-of-signal fail-safes, reducing failures by 30% during URC competitions.',
          'Managed agile sprint planning in Notion, improving cross-functional team coordination for the autonomous subsystem.',
        ]}
        techs={['Python', 'ROS', 'RTK GPS', 'Vision', 'SolidWorks']}
        onClick={() => navigate('yonder-dynamics')}
      >
        <div className="mb-4">
          <h4 className="text-base font-bold text-heading mb-2">Physics-based Simulation</h4>
          <p className="mb-3 text-sm text-text/70">
            This is the physics-based simulation I developed. In the video, I am showcasing driving the rover manually in a simulated desert environment. I'm also showcasing the visualized depthmap from a virtual depth camera on the rover for obstacle avoidance.
          </p>
          <video
            src="assets/videos/simulation_demo.mp4"
            controls
            title="Physics-based Simulation Demo"
            className="rounded-lg w-full max-w-[640px]"
          />
        </div>

        <div className="mb-4">
          <h4 className="text-base font-bold text-heading mb-2">System Acceptance Review</h4>
          <p className="mb-3 text-sm text-text/70">
            Watch a demonstration of the rover's capabilities, including waypoint navigation, obstacle avoidance, and return-to-base functionality.
          </p>
          <iframe
            width="640"
            height="360"
            src="https://www.youtube-nocookie.com/embed/8XUT9da2txI?rel=0"
            title="Yonder Dynamics SAR 2025"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="rounded-lg w-full max-w-[640px] aspect-video"
          />
          <p className="mt-2 text-sm text-text/50">
            If the video fails to load due to embed restrictions,{' '}
            <a href="https://www.youtube.com/watch?v=8XUT9da2txI" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
              open it on YouTube
            </a>.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="https://yonderdynamics.org/#/" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:text-secondary/80 transition-colors font-medium">Team website &rarr;</a>
        </div>
        <div className="mt-4 border-t border-white/10 pt-4">
          <button className="text-secondary hover:underline text-sm font-bold" onClick={(e) => { e.stopPropagation(); navigate('yonder-dynamics'); }}>
            View My Yonder Dynamics Projects &rarr;
          </button>
        </div>
      </ExperienceCard>

      <ExperienceCard
        title="Pragma Edge (IBM Partner Company)"
        dates="Oct 2025 - Present"
        role="AI Engineering Intern"
        bullets={[
          'Architected REST APIs for asset management, facilitating communication between IBM Maximo and external services.',
          'Integrated IBM Watsonx chatbot into Maximo workflows, enabling natural language querying of asset data.',
          'Developing computer vision modules to automate defect analysis, optimizing manufacturing inspection pipelines.',
          'Integrating MLOps pipelines in Python (OpenCV, TensorFlow) for scalable enterprise data flows for anomaly detection.',
        ]}
        techs={['Python', 'OpenCV', 'TensorFlow', 'IBM Maximo', 'MLOps']}
        links={[{ href: 'https://pragmaedge.com/', label: 'View company website' }]}
      />

      <ExperienceCard
        title="UCSD Advanced Robotics Control Lab"
        dates="Mar 2025 - Sep 2025"
        role="Research Assistant"
        bullets={[
          'Built motion planning algorithms achieving 200% faster runtime, 10% gauze savings, and 100% wound coverage.',
          'Reconstructed 3D meshes from RGB-D scans with Open3D + SDFs, reaching 80% accuracy for field medical robotics.',
          'Implemented MCTS + heuristics, cutting compute by 30% and enabling near real-time robotic gauze tape application.',
          'Integrated algorithms into humanoid prototypes, collaborating with researchers on clinical feasibility testing.',
        ]}
        techs={['Python', 'Point Clouds', 'Path Planning']}
        links={[{ href: 'https://ucsdarclab.com/', label: 'View our work' }]}
      />

      <ExperienceCard
        title="FIRST/VEX Robotics Instructor"
        dates="Jun 2025 - Sep 2025"
        role="Instructor & Coach"
        bullets={[
          'Coached 28 students across 4 teams, teaching CAD, Java, Python, Git workflows, and Computer Vision principles.',
          'Guided FRC team to prototype a swerve robot in 1 week and deploy vision-based autonomous navigation in 2 weeks.',
          'Improved technical collaboration and design reviews by organizing PDRs, debugging sessions, and Git workflows.',
        ]}
        techs={['Python', 'Onshape', 'Vision', 'Java']}
        links={[{ href: 'https://www.wheelhouserobotics.com/', label: 'Company website' }]}
      />

      <ExperienceCard
        title="Triton Racing"
        dates="Oct 2024 - Jun 2025"
        role="Electrical Subteam Member"
        bullets={[
          "Collaborated on the electrical system design for Triton Racing's Formula SAE electric vehicle, focusing on performance, safety, and reliability.",
          'Designed and fabricated a Tractive System Status Indicator (TSSI) light mount using SolidWorks for CAD modeling and 3D printing for rapid prototyping, ensuring compliance with FSAE safety regulations.',
          'Learned and applied basic PCB design in Altium, contributing to subsystem circuit layouts and gaining hands-on exposure to embedded electrical hardware.',
          'Conducted Finite Element Analysis (FEA) in SolidWorks to validate structural integrity of mounts and components under simulated race conditions.',
          'Utilized Gantt charts to manage project timelines, track milestones, and ensure alignment across the electrical subteam\'s deliverables.',
          'Gained practical experience in motorsport engineering, working in a fast-paced, interdisciplinary team to design and iterate components under real-world performance constraints.',
        ]}
        techs={['Python', 'Onshape', 'Vision', 'Java']}
        links={[{ href: 'https://sae.eng.ucsd.edu/', label: "See what we're up to" }]}
      />

      <ExperienceCard
        title="Brains4Drones"
        dates="Mar 2022 - Dec 2024"
        role="Software Engineering Intern"
        bullets={[
          "Led development of 'PreCheck' LiDAR tool, cutting drone mission failures by 60% with terrain modeling and analysis.",
          'Built TensorFlow crack detection pipelines, automating utility inspections and reducing manual review time by 50%.',
          'Designed GPU CUDA pipelines with KNN, increasing point-cloud obstacle detection speed for safer autonomous flight.',
          "Attracted 2 enterprise clients by showing PreCheck's simulation capabilities and REST API-driven planning features.",
        ]}
        techs={['Python', 'APIs', 'Open3D', 'OpenCV', 'YOLO', 'Point Clouds']}
      >
        <div className="mb-4">
          <h4 className="text-base font-bold text-heading mb-2">PreCheck Demo Video</h4>
          <p className="mb-3 text-sm text-text/70">
            Watch a demonstration of the PreCheck LiDAR-driven drone mission planning tool in action, showcasing automated flight path generation and obstacle avoidance for power line inspections.
          </p>
          <video
            src="https://brains4drones.com/videos/SeeMore-PreCheck-Draft8-crf30.mp4"
            controls
            title="PreCheck Demo Video"
            className="rounded-lg w-full max-w-[640px]"
          />
        </div>
        <a href="https://brains4drones.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:text-secondary/80 transition-colors font-medium">
          View company website &rarr;
        </a>
      </ExperienceCard>

      <ExperienceCard
        title="FIRST Robotics Challenge (Team 9088)"
        dates="Jun 2022 - May 2024"
        role="Software Lead/Team Co-Founder"
        bullets={[
          'Led the team to state-level competition, developing innovative robotics control systems',
          'Implemented swerve drive mechanism with PathPlanner and Limelight for precision control',
          'Developed command-based architecture for modular robot subsystem control',
          'Collaborated across teams for seamless system integration',
          'Engaged in STEM outreach and mentoring initiatives',
        ]}
        techs={['Java', 'SolidWorks', 'Vision']}
        links={[{ href: 'https://frc9088.weebly.com/', label: 'Team website' }]}
      />

      <ExperienceCard
        title="NASA Highschool Aerospace Scholars"
        dates="November 2022 - June 2023"
        role="Pressure and Temperature Mitigation Subtopic Manager"
        bullets={[
          'Applied systems engineering principles to design and develop a sustainable lunar habitat',
          'Led research and implementation of RHUs for thermal regulation, PCAs for atmospheric control',
          'Collaborated with multidisciplinary team for habitat subsystem integration',
          'Presented engineering solutions to NASA professionals',
        ]}
        techs={[]}
      />

      <ExperienceCard
        title="FIRST Tech Challenge"
        dates="October 2018 - May 2022"
        role="Team Founder, Software Lead (RoboFalcons 14626)"
        bullets={[
          'Founded and led team to regional championships, overseeing strategy and development',
          'Developed advanced control systems using Java for holonomic drive and computer vision',
          'Designed and 3D-printed custom parts using Fusion 360',
          'Led STEM demonstrations and secured sponsorships from industry leaders',
        ]}
        techs={['Java', 'Python', 'Fusion360']}
      />

      <ExperienceCard
        title="UTD Quality of Life Machine Learning Workshop"
        dates="June 2023 - July 2023"
        role="Participant"
        bullets={[
          'Developed deep learning model for lung cancer X-ray classification',
          'Applied data preprocessing and feature extraction techniques',
          'Collaborated on medical imaging dataset analysis',
        ]}
        techs={['TensorFlow', 'OpenCV', 'Python']}
      />

      <ExperienceCard
        title="Taekwondo"
        dates="2012 - Present"
        role="3rd Degree Black Belt"
        bullets={[
          'Earned gold medals in multiple Taekwondo America national tournaments',
          'Represented UCSD at World Taekwondo UC Irvine PacWest tournament',
          'Trained and mentored newer students in sparring techniques',
          'Practiced across multiple studios nationwide',
        ]}
        techs={[]}
      />

      <ExperienceCard
        title="Technology Student Association"
        dates="Aug 2022 - May 2024"
        role="Team Lead, Competitor"
        bullets={[
          'Led team to develop LightYear web application, advancing to state-level',
          'Designed portable radiation detection system using Fusion 360',
          'Solved engineering challenges under time constraints',
        ]}
        techs={['Web Development', 'Fusion360', 'Engineering Design']}
      />
    </div>
  )
}
