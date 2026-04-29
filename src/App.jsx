import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HologramBackground from './components/HologramBackground'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ARGlasses from './pages/ARGlasses'
import YonderDynamics from './pages/YonderDynamics'
import Experiences from './pages/Experiences'
import Education from './pages/Education'
import Resume from './pages/Resume'

const tabs = ['home', 'projects', 'ar-glasses', 'yonder-dynamics', 'experiences', 'education', 'resume']

function App() {
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    const hash = window.location.hash.slice(1) || 'home'
    if (tabs.includes(hash)) setActiveTab(hash)

    const onPop = () => {
      const h = window.location.hash.slice(1) || 'home'
      if (tabs.includes(h)) setActiveTab(h)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = (tab) => {
    setActiveTab(tab)
    history.pushState({}, '', `#${tab}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (activeTab) {
      case 'home': return <Home navigate={navigate} />
      case 'projects': return <Projects navigate={navigate} />
      case 'ar-glasses': return <ARGlasses navigate={navigate} />
      case 'yonder-dynamics': return <YonderDynamics navigate={navigate} />
      case 'experiences': return <Experiences navigate={navigate} />
      case 'education': return <Education />
      case 'resume': return <Resume />
      default: return <Home navigate={navigate} />
    }
  }

  return (
    <div className="min-h-screen bg-primary text-text">
      {/* Mounted here (not inside Home) so its position:fixed escapes the
          centered <main> column — that wrapper has a CSS transform from
          animate-fade-in which would otherwise act as the containing block
          and clip the canvas. Conditional render keeps it home-only. */}
      {activeTab === 'home' && <HologramBackground />}
      <Navbar activeTab={activeTab} navigate={navigate} />
      {/* On home, main is non-interactive so drag events fall through to the
          fixed canvas behind it; the Home page re-enables pointer events on
          its actual interactive elements (links, button). */}
      <main
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 ${
          activeTab === 'home' ? 'pointer-events-none' : ''
        }`}
      >
        <div key={activeTab} className="animate-fade-in">
          {renderPage()}
        </div>
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-sm text-text/60">
        <p>Designed & Built by Pranav Puttagunta</p>
      </footer>
    </div>
  )
}

export default App
