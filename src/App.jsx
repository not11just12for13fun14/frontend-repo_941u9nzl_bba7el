import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import HowItWorks from './components/HowItWorks'
import Screenshots from './components/Screenshots'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-clip">
      {/* Soft animated background accents for a cohesive vibe */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-emerald-500/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20rem] right-[-10rem] h-[50rem] w-[50rem] rounded-full bg-emerald-500/5 blur-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      {/* Subtle moving grid overlay */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        initial={{ backgroundPositionY: 0 }}
        animate={{ backgroundPositionY: -48 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />

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
