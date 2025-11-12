'use client'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 glass-effect border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl tracking-tight">
              <span className="gradient-text font-mono">{"<NFSU/>"}</span>
              <span className="ml-2 text-sm text-gray-400">Conference 2025</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-white hover:bg-cyan-500/20 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:text-cyan-400">
                Home
              </a>
              <a href="#about" className="text-white hover:bg-cyan-500/20 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:text-cyan-400">
                About
              </a>
              <a href="#panels" className="text-white hover:bg-cyan-500/20 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:text-cyan-400">
                Panels
              </a>
              <a href="#register" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                Confirm
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-cyan-500/20 p-2 rounded-md transition duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-cyan-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/80 backdrop-blur-lg">
            <a href="#home" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-cyan-500/20 transition duration-300">
              Home
            </a>
            <a href="#about" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-cyan-500/20 transition duration-300">
              About
            </a>
            <a href="#panels" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-cyan-500/20 transition duration-300">
              Panels
            </a>
            <a href="#register" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-cyan-500/20 transition duration-300">
              Confirm
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
