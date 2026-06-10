'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [
  { label: 'Services', href: '/services' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
]

const CALENDLY_URL = '#contact'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const pathname = usePathname()

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className={theme === 'dark' ? 'bg-white rounded-xl px-3 py-1.5' : ''}>
            <img src="/fameboat.png" alt="Fameboat" style={{ height: '40px', width: 'auto' }} />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href ? 'text-white' : 'text-muted hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="w-9 h-9 glass rounded-lg flex items-center justify-center text-muted hover:text-white transition-colors border border-white/8">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href={CALENDLY_URL} className="btn-primary text-sm py-2.5 px-5 animate-pulse-glow">
            Book Positioning Call
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="w-9 h-9 glass rounded-lg flex items-center justify-center text-muted border border-white/8">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="text-white p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-5 space-y-4">
          {links.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} className="block text-base text-white font-medium py-2">
              {label}
            </Link>
          ))}
          <a href={CALENDLY_URL} onClick={() => setOpen(false)} className="btn-primary w-full justify-center mt-2">
            Book Positioning Call
          </a>
        </div>
      )}
    </header>
  )
}
