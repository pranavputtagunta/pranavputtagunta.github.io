import { useState, useEffect } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'ar-glasses', label: 'AR Glasses' },
  { id: 'yonder-dynamics', label: 'Yonder Dynamics' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'education', label: 'Education' },
  { id: 'resume', label: 'Resume' },
]

export default function Navbar({ activeTab, navigate }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    navigate(id)
    setMobileOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-primary/80 backdrop-blur-sm'
    } border-b border-white/5`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between md:hidden">
          <button
            onClick={() => handleNav('home')}
            className="text-secondary font-mono text-sm font-bold tracking-wider"
          >
            PP
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-text hover:text-secondary transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`${mobileOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:justify-center md:items-center gap-1 md:gap-1 mt-4 md:mt-0`}>
          {links.map((link, i) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === link.id
                  ? 'text-secondary bg-secondary/10'
                  : 'text-text hover:text-heading hover:bg-white/5'
              }`}
            >
              <span className="font-mono text-secondary text-xs mr-1">0{i + 1}.</span>
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
