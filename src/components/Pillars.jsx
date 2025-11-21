import React from 'react'
import { Check } from 'lucide-react'

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400"><Check size={14} /></span><span className="text-slate-300/90">{children}</span></li>
)

const Card = ({ title, subtitle, bullets }) => (
  <div className="group rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6 hover:ring-emerald-500/30 transition relative overflow-hidden">
    <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
    <h3 className="text-white text-xl font-semibold">{title}</h3>
    <p className="text-white/60 mt-1 mb-4">{subtitle}</p>
    <ul className="space-y-2">
      {bullets.map((b, i) => <Bullet key={i}>{b}</Bullet>)}
    </ul>
  </div>
)

const Pillars = () => {
  return (
    <section className="bg-slate-950 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-10 text-center">
          <span className="text-emerald-400/90 text-sm font-medium tracking-wide">Three Pillars</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Built for every role at the restaurant</h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-3">Frictionless for guests, calmer for staff, and revenue-driving for owners.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <Card
            title="For Guests"
            subtitle="Fast, beautiful, and app-free"
            bullets={[
              'Frictionless ordering with QR/NFC',
              'Instant Apple Pay / Google Pay / cards',
              'Dietary filters and favorites',
              'Gorgeous photo-rich menu with tags'
            ]}
          />
          <Card
            title="For Service Staff"
            subtitle="Less interruption, more service"
            bullets={[
              'Automatic order updates and table activity',
              'Fewer trips and less stress',
              'Better tips with digital presets',
              'Clear overview of who ordered what'
            ]}
          />
          <Card
            title="For Owners"
            subtitle="Drive growth and efficiency"
            bullets={[
              'Higher revenue and faster table turnover',
              'Easy digital menu management',
              'Custom branding and tipping configuration',
              'Simple QR code table setup'
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default Pillars
