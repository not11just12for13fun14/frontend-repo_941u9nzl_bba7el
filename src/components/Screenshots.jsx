import React from 'react'

const Placeholder = ({ label }) => (
  <div className="aspect-[9/16] rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
    <div className="absolute inset-0 opacity-50 pointer-events-none" style={{background:"radial-gradient(1200px 400px at 0% 0%, rgba(22,163,74,0.12), transparent 60%), radial-gradient(1200px 400px at 100% 100%, rgba(22,163,74,0.12), transparent 60%)"}} />
    <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/5 backdrop-blur p-2 text-center text-xs text-white/70">{label}</div>
  </div>
)

const Screenshots = () => {
  return (
    <section className="bg-slate-950 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-10 text-center">
          <span className="text-emerald-400/90 text-sm font-medium tracking-wide">Product Mockups</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Smooth, mobile-first interfaces</h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-3">Photo-rich menus, dietary tags, real-time table overview, and a clean staff dashboard.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Placeholder label="Menu with filters + tags" />
          <Placeholder label="Group ordering flow" />
          <Placeholder label="Instant payment sheet" />
          <Placeholder label="Staff dashboard overview" />
        </div>
      </div>
    </section>
  )
}

export default Screenshots
