import SectionHeading from '../components/SectionHeading'
import TechBadge from '../components/TechBadge'

const projects = [
  {
    icon: '👁️',
    title: '1. Advanced Obstacle Avoidance Pipeline',
    objective: 'Enable the rover to autonomously detect, map, and plan paths around obstacles in real time using only onboard stereo vision.',
    bullets: [
      'Developed a new obstacle avoidance algorithm that takes the depth image from the OAK-D stereo camera and transforms it into a point cloud.',
      'Generated a rover position-relative occupancy grid from the point cloud, then used it to build a rolling 30m × 30m confidence grid with view-based degradation.',
      'Applied the Theta* (Theta-star) any-angle planning algorithm together with a pure pursuit movement controller to plan smooth paths around obstacles while simultaneously mapping them.',
      'Built two parallel implementations: one leveraging Nav2 costmaps and another using a custom Python-based global map implementation.',
    ],
    techs: ['ROS 2', 'Python', 'Theta*', 'Pure Pursuit', 'Nav2', 'Point Clouds'],
  },
  {
    icon: '🔁',
    title: '2. Autonomous State Machine (ROS 2 + C++)',
    objective: 'Modernize and harden the autonomous mission logic that orchestrates navigation, object detection, and obstacle avoidance.',
    bullets: [
      'Rewrote the existing ROS 1 autonomous state machine in ROS 2, making it modular and easy to read.',
      'Improved shared data logic and state transitions for object detection, obstacle avoidance, navigation, and other autonomous behaviors.',
      'Began a further rewrite of the state machine in C++ to achieve better efficiency and concurrency.',
    ],
    techs: ['ROS 2', 'C++', 'Python', 'State Machines'],
  },
  {
    icon: '⌨️',
    title: '3. Autonomous Keyboard Typing via Inverse Kinematics',
    objective: 'Create an autonomous subsystem capable of executing a precise sequence of keystrokes natively without external telemetry networks.',
    bullets: [
      'Wrote a script to determine the position of a keyboard using surrounding AR tags, and to determine the camera position using intrinsic matrices found through camera calibration.',
      'Worked with my team to draw bounding boxes around each key to determine the movement vector from the camera position to the position of any target key.',
      'Fed the resulting movement vectors into inverse kinematics for the arm, enabling fully autonomous keyboard typing for a requested sequence.',
    ],
    techs: ['OpenCV', 'AR Tags', 'Camera Calibration', 'Inverse Kinematics', 'Robotics'],
  },
  {
    icon: '🧭',
    title: '4. Wheel-Based Local Odometry',
    objective: 'Provide reliable local positioning for the rover by fusing wheel encoder data with GPS through a clean TF2 transform tree.',
    bullets: [
      'Developed TF2 transform frames for base_link, odom, and map.',
      'Used wheel encoders to determine the odom → base_link transform.',
      'Used incoming GPS data to transform the goal position via the map → odom transform.',
      'Planning a more robust future implementation using global odometry.',
    ],
    techs: ['ROS 2', 'TF2', 'Wheel Encoders', 'GPS', 'Odometry'],
  },
  {
    icon: '📡',
    title: '5. RTK GPS Integration & Navigation Overhaul',
    objective: "Phase out the outdated Pixhawk-based navigation system in favor of a modern dual-antenna RTK setup for our autonomous rover to handle complex trajectory tracking.",
    bullets: [
      'Implemented dual-antenna RTK GPS hardware pipelines by writing custom Python firmware that constantly pushes RTCM corrections from the base station.',
      "Migrated away from Pixhawk's internal EKF (Extended Kalman Filter) by developing YAML configurations to launch and manage a custom ROS EKF node.",
      'Switched the EKF fusion to use wheel odometry instead of the OAK-D IMU, after noticing the IMU was extremely inaccurate and heavily influenced by the motors’ magnetic fields.',
      'Planning to adopt a much more accurate dedicated IMU in the future for an even better EKF.',
    ],
    techs: ['ROS', 'Python', 'EKF', 'RTCM', 'RTK GPS'],
  },
  {
    icon: '🌐',
    title: '6. Webots Scalable Simulation Environment',
    objective: 'Eliminate hardware-testing bottlenecks by generating a high-fidelity digital twin of the rover so algorithms can be developed and validated in parallel.',
    bullets: [
      'Developed custom localization and depth image implementations to successfully test algorithms in Webots simulation.',
      'Saved hundreds of hours of field testing and enabled simultaneous algorithm development across the team.',
      'Maintained the Webots ROSbridge as the codebase changed to ensure it stayed compatible with the live autonomous stack.',
    ],
    techs: ['Webots', 'URDF', 'ROSbridge', 'Docker'],
  },
  {
    icon: '🧠',
    title: '7. Edge AI Migration (YOLO)',
    objective: 'Decrease power consumption and decouple vision processing by migrating detection software across architectures.',
    bullets: [
      'Successfully oversaw the migration of the core object detection YOLO stack from a central Nvidia Jetson dependency block.',
      'Deployed natively onto the dedicated onboard NPU capabilities of an OrangePi.',
      'Integrated RKNN YOLO parsing directly against the camera pipeline, heavily freeing up compute resources for the navigation subsystems.',
    ],
    techs: ['YOLO', 'RKNN', 'OrangePi', 'Edge AI'],
  },
]

export default function YonderDynamics({ navigate }) {
  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate('experiences')}
        className="text-secondary hover:text-secondary/80 mb-8 flex items-center gap-2 font-medium text-sm transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Back to Experiences
      </button>

      <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-3">Yonder Dynamics - Software Projects</h2>
      <p className="text-lg text-secondary/80 mb-10">Autonomous Systems Engineering & Optimization</p>

      <div className="glass rounded-2xl p-6 mb-10 border-l-4 border-secondary">
        <h3 className="text-xl font-bold text-heading mb-3">Overview</h3>
        <p className="text-slate">
          As the Software Lead at Yonder Dynamics, I manage the migration and development of our autonomous systems stack. My core contributions span a new stereo-vision obstacle avoidance pipeline, a modular ROS 2 (and now C++) autonomous state machine, wheel-based local odometry and RTK GPS integration, autonomous inverse-kinematics keyboard typing, and a Webots simulation environment that lets the team develop and validate algorithms in parallel.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((p) => (
          <section key={p.title} className="glass rounded-xl p-6 glass-hover transition-all duration-300 card-glow">
            <div className="flex items-center mb-4 gap-3">
              <span className="text-2xl">{p.icon}</span>
              <h3 className="text-xl font-bold text-heading">{p.title}</h3>
            </div>
            {p.objective && (
              <p className="text-sm text-slate mb-4">
                <strong className="text-heading">Objective:</strong> {p.objective}
              </p>
            )}
            <ul className="space-y-2 text-sm text-slate mb-4">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-secondary mt-1.5 text-xs">&#9656;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {p.techs.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {p.techs.map((t) => <TechBadge key={t}>{t}</TechBadge>)}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
