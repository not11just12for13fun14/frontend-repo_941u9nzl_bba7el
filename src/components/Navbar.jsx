import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#16A34A]" />
            <span className="text-white font-semibold">DineFlow</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-white/80 text-sm">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#" className="hover:text-white">Benefits</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg bg-[#16A34A] px-4 py-2 text-white text-sm font-medium shadow shadow-emerald-900/30 hover:brightness-110">Get a demo</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
