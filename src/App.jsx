import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pillars from './components/Pillars'
import HowItWorks from './components/HowItWorks'
import Screenshots from './components/Screenshots'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Pillars />
      <HowItWorks />
      <Screenshots />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
