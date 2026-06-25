'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Case Studies', href: '/#work' },
  { label: 'Pricing', href: '/#pricing' },
]

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

  const isHome = pathname === '/'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/5 py-2.5' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className={theme === 'dark' ? 'bg-white rounded-lg px-2.5 py-1' : ''}>
            <img src="/fameboat.png" alt="Fameboat" style={{ height: '34px', width: 'auto' }} />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={isHome ? href.replace('/', '') : href}
              className="text-sm font-medium transition-colors text-muted hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="w-9 h-9 glass rounded-lg flex items-center justify-center text-muted hover:text-white transition-colors border border-white/8">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href={isHome ? '#contact' : '/#contact'} className="btn-primary text-sm py-2.5 px-5 animate-pulse-glow">
            Let&apos;s Talk
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
            <a key={label} href={isHome ? href.replace('/', '') : href} onClick={() => setOpen(false)} className="block text-base text-white font-medium py-2">
              {label}
            </a>
          ))}
          <a href={isHome ? '#contact' : '/#contact'} onClick={() => setOpen(false)} className="btn-primary w-full justify-center mt-2">
            Let&apos;s Talk
          </a>
        </div>
      )}
    </header>
  )
}
