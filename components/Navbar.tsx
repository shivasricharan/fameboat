'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Industries', href: '#industries' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <svg width="38" height="34" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="1,33 11,5 21,33" fill="#FFD600"/>
            <polygon points="8.5,13 21,33 15,33" fill="#000" fillOpacity="0.22"/>
            <polygon points="19,33 29,5 39,33" fill="#FFD600"/>
            <polygon points="26,13 19,33 25,33" fill="#000" fillOpacity="0.22"/>
            <rect x="1" y="33.5" width="38" height="2.5" rx="1.25" fill="#FFD600"/>
          </svg>
          <span className="font-display font-bold text-xl text-white tracking-tight">
            fame<span className="text-primary">boat</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-muted hover:text-white transition-colors font-medium"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary text-sm py-3 px-6 animate-pulse-glow">
            Get Free Consultation
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-6 space-y-4">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block text-base text-white font-medium py-2"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary w-full justify-center mt-2"
          >
            Get Free Consultation
          </a>
        </div>
      )}
    </header>
  )
}
