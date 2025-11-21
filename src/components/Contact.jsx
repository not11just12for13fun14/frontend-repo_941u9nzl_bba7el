import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    // No backend specified for form; simulate success
    setTimeout(() => setStatus('success'), 700)
  }

  return (
    <section id="contact" className="bg-slate-950 py-16">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get a personalized demo</h2>
          <p className="text-white/60 mt-2">Tell us about your restaurant and well reach out within one business day.</p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Name</label>
              <input required className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-emerald-500/40" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Restaurant</label>
              <input required className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-emerald-500/40" placeholder="DineFlow Burger" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input type="email" required className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-emerald-500/40" placeholder="you@restaurant.com" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Phone</label>
              <input className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-emerald-500/40" placeholder="+49 123 456789" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Message</label>
            <textarea rows={4} className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-emerald-500/40" placeholder="Tell us about your setup, number of tables, and goals." />
          </div>
          <button disabled={status==='loading'} className="inline-flex items-center justify-center rounded-xl bg-[#16A34A] px-5 py-3 text-white font-medium shadow-lg shadow-emerald-900/30 hover:brightness-110 transition">
            {status==='loading' ? 'Sending…' : status==='success' ? 'Thanks! We\'ll reach out shortly.' : 'Request demo'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
