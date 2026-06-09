'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'How It Works', href: '#how-it-works' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    const saved = localStorage.getItem('fb-theme')
    if (saved === 'light') setTheme('light')
    return () => window.removeEventListener('scroll', handler)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('fb-theme', next)
    document.documentElement.classList.toggle('light', next === 'light')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <div className={theme === 'dark' ? 'bg-white rounded-xl px-3 py-1.5' : ''}>
            <img src="/fameboat.png" alt="Fameboat" style={{ height: '44px', width: 'auto' }} />
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className="text-sm text-muted hover:text-white transition-colors font-medium">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 glass rounded-lg flex items-center justify-center text-muted hover:text-white transition-colors border border-white/8"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href="#contact" className="btn-primary text-sm py-3 px-6 animate-pulse-glow">
            Free Strategy Call
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="w-9 h-9 glass rounded-lg flex items-center justify-center text-muted border border-white/8">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-6 space-y-4">
          {links.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="block text-base text-white font-medium py-2">
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center mt-2">
            Free Strategy Call
          </a>
        </div>
      )}
    </header>
  )
}
