import React from 'react'
import { QrCode, UtensilsCrossed, CreditCard } from 'lucide-react'

const Step = ({ icon: Icon, title, desc }) => (
  <div className="relative rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6">
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
        <Icon size={22} />
      </div>
      <div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-white/60">{desc}</p>
      </div>
    </div>
  </div>
)

const HowItWorks = () => {
  return (
    <section id="how" className="bg-slate-950 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-10 text-center">
          <span className="text-emerald-400/90 text-sm font-medium tracking-wide">How it works</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Scan → Order → Pay</h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-3">Everything happens on the spot. No apps, no accounts. Just great food, faster.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <Step icon={QrCode} title="Scan or Tap" desc="Guests scan a table QR or tap an NFC tag to open the menu instantly." />
          <Step icon={UtensilsCrossed} title="Order Together" desc="Beautiful, filterable menu with groups and real-time table overview." />
          <Step icon={CreditCard} title="Pay Instantly" desc="Apple Pay, Google Pay, and cards via Adyen — with digital tipping presets." />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
