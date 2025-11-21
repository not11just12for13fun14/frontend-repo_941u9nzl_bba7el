import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const phoneMock = (
  <svg viewBox="0 0 330 670" className="w-full h-full">
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#16A34A" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
    <rect x="15" y="10" rx="48" ry="48" width="300" height="650" fill="#0f172a" stroke="white" strokeOpacity="0.08" />
    <rect x="28" y="90" rx="24" ry="24" width="274" height="520" fill="#0b1220" stroke="white" strokeOpacity="0.06" />
    <g opacity="0.9">
      <rect x="52" y="120" rx="18" width="226" height="44" fill="url(#g1)" />
      <rect x="52" y="176" rx="16" width="226" height="160" fill="#0f172a" stroke="white" strokeOpacity="0.05" />
      <rect x="52" y="348" rx="16" width="226" height="44" fill="#0f172a" stroke="white" strokeOpacity="0.05" />
      <rect x="52" y="400" rx="16" width="226" height="44" fill="#0f172a" stroke="white" strokeOpacity="0.05" />
      <rect x="52" y="452" rx="16" width="226" height="44" fill="#0f172a" stroke="white" strokeOpacity="0.05" />
      <rect x="122" y="612" rx="14" width="120" height="14" fill="#0f172a" />
    </g>
  </svg>
)

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      {/* Accent glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.14),transparent_60%)]"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-28 md:pt-36 pb-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div variants={container} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-[#16A34A]" />
              DineFlow by Lucadmin e.K.
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Order. Eat. Pay. Done.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
              App‑free digital ordering and payments. Scan or tap, order together, and pay instantly with Apple Pay, Google Pay, or cards.
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

        {/* Replace Spline card with a motion-driven 3D stack effect of phone mockups */}
        <div className="relative h-[420px] sm:h-[520px] md:h-[560px]">
          <div className="absolute inset-0 [perspective:1200px]">
            {[0,1,2].map((i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 w-[240px] sm:w-[260px] md:w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur"
                initial={{ opacity: 0, rotateY: -6*(i+1), rotateX: 6*(i+1), y: 20*(i+1), scale: 0.94 - i*0.02 }}
                animate={{ opacity: 1, rotateY: -2*(i+1), rotateX: 2*(i+1), y: 6*(i+1), scale: 1 - i*0.02 }}
                transition={{ duration: 0.8 + i*0.1, delay: 0.1*i }}
                style={{ boxShadow: '0 20px 60px rgba(16,185,129,0.1)' }}
              >
                <motion.div
                  className="aspect-[3/6.2]"
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + i*0.06 }}
                >
                  {phoneMock}
                </motion.div>
              </motion.div>
            ))}
          </div>
          {/* ambient sheen */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[28px]"
            style={{ background: 'radial-gradient(60% 40% at 50% 0%, rgba(255,255,255,0.06), transparent 60%)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </div>

      {/* Curved separator with gentle parallax */}
      <motion.svg className="block w-full" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <path fill="currentColor" className="text-slate-950" d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,69.3C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
      </motion.svg>
    </section>
  )
}

export default Hero
