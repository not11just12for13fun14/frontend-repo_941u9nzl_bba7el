import React from 'react'
import { QrCode, UtensilsCrossed, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'

const Step = ({ icon: Icon, title, desc, i }) => (
  <motion.div
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, delay: i * 0.05 }}
    className="relative rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6"
  >
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
        <Icon size={22} />
      </div>
      <div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-white/60">{desc}</p>
      </div>
    </div>
  </motion.div>
)

const HowItWorks = () => {
  return (
    <section id="how" className="bg-slate-950 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="text-emerald-400/90 text-sm font-medium tracking-wide">How it works</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Scan → Order → Pay</h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-3">Everything happens on the spot. No apps, no accounts. Just great food, faster.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          <Step i={0} icon={QrCode} title="Scan or Tap" desc="Guests scan a table QR or tap an NFC tag to open the menu instantly." />
          <Step i={1} icon={UtensilsCrossed} title="Order Together" desc="Beautiful, filterable menu with groups and real-time table overview." />
          <Step i={2} icon={CreditCard} title="Pay Instantly" desc="Apple Pay, Google Pay, and cards via Adyen — with digital tipping presets." />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
