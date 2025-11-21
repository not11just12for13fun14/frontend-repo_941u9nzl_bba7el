import React from 'react'
import { motion } from 'framer-motion'

const Placeholder = ({ label, i }) => (
  <motion.div
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, delay: i * 0.05 }}
    className="aspect-[9/16] rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden"
  >
    <div className="absolute inset-0 opacity-50 pointer-events-none" style={{background:"radial-gradient(1200px 400px at 0% 0%, rgba(22,163,74,0.12), transparent 60%), radial-gradient(1200px 400px at 100% 100%, rgba(22,163,74,0.12), transparent 60%)"}} />
    <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/5 backdrop-blur p-2 text-center text-xs text-white/70">{label}</div>
  </motion.div>
)

const Screenshots = () => {
  return (
    <section className="bg-slate-950 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="text-emerald-400/90 text-sm font-medium tracking-wide">Product Mockups</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Smooth, mobile-first interfaces</h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-3">Photo-rich menus, dietary tags, real-time table overview, and a clean staff dashboard.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Menu with filters + tags',
            'Group ordering flow',
            'Instant payment sheet',
            'Staff dashboard overview',
          ].map((label, i) => (
            <Placeholder key={label} label={label} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Screenshots
