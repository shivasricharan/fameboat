'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  ['How it works', '/#how'],
  ['What you get', '/#output'],
  ['FAQ', '/#faq'],
  ['Proof Lab', '/proof-lab'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <img src="/fameboat-logo.png" alt="Fameboat home" width={679} height={149} />
        </Link>
        <button type="button" className="menu" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" aria-label="Main" className={open ? 'open' : ''}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
        <Link href="/#audit" className="btn small" onClick={() => setOpen(false)}>Request an audit</Link>
      </div>
    </header>
  )
}
