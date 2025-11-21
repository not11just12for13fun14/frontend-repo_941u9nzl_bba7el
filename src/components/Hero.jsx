import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      {/* Accent glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-20 md:pt-28 pb-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-[#16A34A]" />
              DineFlow by Lucadmin e.K.
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Order. Eat. Pay. Done.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
              A premium, app-free digital ordering and payment experience. Scan or tap, explore a beautiful menu, order together, and pay instantly with Apple Pay, Google Pay, or cards.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-[#16A34A] px-5 py-3 text-white font-medium shadow-lg shadow-emerald-900/30 hover:brightness-110 transition">
                Get a demo
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white/80 ring-1 ring-white/15 hover:ring-white/30 transition">
                See how it works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-white/50 text-sm">
              <div>Adyen payments • Apple Pay • Google Pay</div>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] md:h-[560px]">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur">
            <div className="h-[420px] sm:h-[520px] md:h-[560px]">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            {/* Glass overlay accents */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Curved separator */}
      <svg className="block w-full" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" className="text-slate-950" d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,69.3C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
      </svg>
    </section>
  )
}

export default Hero
