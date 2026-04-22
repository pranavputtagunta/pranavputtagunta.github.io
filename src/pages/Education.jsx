import SectionHeading from '../components/SectionHeading'

const coreCourses = [
  { code: 'CSE 11', name: 'Introduction to Programming and Computational Problem-Solving: Accelerated Pace', href: 'https://catalog.ucsd.edu/courses/CSE.html#:~:text=CSE%2011.%20Introduction%20to%20Programming%20and%20Computational%20Problem%2DSolving%3A%20Accelerated%20Pace%20(4)' },
  { code: 'CSE 29', name: 'Systems Programming and Software Tools', href: 'https://catalog.ucsd.edu/courses/CSE.html#:~:text=CSE%2012.%20Basic%20Data%20Structures%20and%20Object%2DOriented%20Design%20(4)' },
  { code: 'CSE 12', name: 'Basic Data Structures and Object-Oriented Design', href: 'https://catalog.ucsd.edu/courses/CSE.html#:~:text=CSE%2011.%20Introduction%20to%20Programming%20and%20Computational%20Problem%2DSolving%3A%20Accelerated%20Pace%20(4)' },
  { code: 'CSE 30', name: 'Computer Organization', href: 'https://catalog.ucsd.edu/courses/CSE.html#:~:text=CSE%2030.%20Computer%20Organization%20(4)' },
  { code: 'CSE 20', name: 'Discrete Mathematics', href: 'https://catalog.ucsd.edu/courses/CSE.html#:~:text=CSE%2020.%20Discrete%20Mathematics%20(4)' },
  { code: 'CSE 21', name: 'Mathematics for Algorithms and Systems', href: 'https://catalog.ucsd.edu/courses/CSE.html#:~:text=CSE%2021.%20Mathematics%20for%20Algorithms%20and%20Systems%20(4)' },
  { code: 'MATH 20C', name: 'Calculus and Analytic Geometry for Science and Engineering', href: 'https://catalog.ucsd.edu/courses/MATH.html#:~:text=MATH%2020C.%20Calculus%20and%20Analytic%20Geometry%20for%20Science%20and%20Engineering%20(4)' },
  { code: 'MATH 18', name: 'Linear Algebra', href: 'https://catalog.ucsd.edu/courses/MATH.html#:~:text=MATH%2018.%20Linear%20Algebra%20(4)' },
  { code: 'CSE 100', name: 'Advanced Data Structures', href: 'https://catalog.ucsd.edu/courses/CSE.html#:~:text=CSE%20100.%20Advanced%20Data%20Structures%20(4)' },
  { code: 'CSE 101', name: 'Design and Analysis of Algorithms', href: 'https://catalog.ucsd.edu/courses/CSE.html#:~:text=CSE%20101.%20Design%20and%20Analysis%20of%20Algorithms%20(4)' },
  { code: 'CSE 110', name: 'Software Engineering', href: 'https://catalog.ucsd.edu/courses/CSE.html#:~:text=CSE%20110.%20Software%20Engineering%20(4)' },
  { code: 'CSE 132A', name: 'Database System Principles', href: 'https://catalog.ucsd.edu/courses/CSE.html#:~:text=CSE%20132A.%20Database%20System%20Principles%20(4)' },
  { code: 'CSE 152A', name: 'Introduction to Computer Vision I', href: 'https://catalog.ucsd.edu/courses/CSE.html#:~:text=CSE%20152A.%20Introduction%20to%20Computer%20Vision%20I%20(4)' },
  { code: 'COGS 108', name: 'Introduction to Data Science', href: 'https://catalog.ucsd.edu/courses/COGS.html#:~:text=COGS%20108.%20Data%20Science%20in%20Practice%20(4)' },
]

const businessCourses = [
  { code: 'MGT 16', name: 'Personal Ethics at Work', href: 'https://catalog.ucsd.edu/courses/MGT.html#:~:text=MGT%2016.%20Personal%20Ethics%20at%20Work%20(4)' },
  { code: 'MGT 45', name: 'Principles of Accounting', href: 'https://catalog.ucsd.edu/courses/MGT.html#:~:text=MGT%2045.%20Principles%20of%20Accounting%20(4)' },
]

function CourseCard({ code, name, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass glass-hover rounded-xl p-5 block transition-all duration-200 group"
    >
      <h4 className="font-bold font-mono text-secondary text-sm mb-1 group-hover:text-secondary/80">{code}</h4>
      <p className="text-sm text-text">{name}</p>
      <span className="text-xs text-secondary/60 mt-2 block group-hover:text-secondary transition-colors">
        Course Details &rarr;
      </span>
    </a>
  )
}

export default function Education() {
  return (
    <div className="max-w-5xl mx-auto">
      <SectionHeading number="04">Education</SectionHeading>

      <div className="glass rounded-2xl p-8 mb-8 gradient-border">
        <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-2">
          University of California San Diego
        </h2>
        <p className="text-lg text-slate mb-8">
          Bachelor of Science in Computer Science, Minor in Business
        </p>

        <h3 className="text-xl font-bold text-heading mb-5 flex items-center gap-2">
          <span className="w-2 h-2 bg-secondary rounded-full"></span>
          Core Coursework
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {coreCourses.map((c) => <CourseCard key={c.code} {...c} />)}
        </div>

        <h3 className="text-xl font-bold text-heading mb-5 flex items-center gap-2">
          <span className="w-2 h-2 bg-secondary rounded-full"></span>
          Business Coursework
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {businessCourses.map((c) => <CourseCard key={c.code} {...c} />)}
        </div>
      </div>
    </div>
  )
}
