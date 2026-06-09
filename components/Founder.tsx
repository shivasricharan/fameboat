'use client'

import { useEffect, useRef } from 'react'
import { CheckCircle } from 'lucide-react'

const proof = [
  '20 years in marketing, branding, and media across industries',
  'Worked on projects driving ₹100Cr+ in revenue impact',
  'Founder of Vouch — a sales forensics platform',
  'Understands what converts in service business sales cycles',
]

export default function Founder() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: photo placeholder */}
          <div className="reveal">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="glass rounded-3xl border border-white/10 overflow-hidden aspect-[4/5] flex items-end">
                {/* Gradient placeholder — replace with real photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark-mid to-secondary/15" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/40 to-secondary/30 border-2 border-primary/30 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-display font-bold text-white">S</span>
                    </div>
                    <p className="text-white/40 text-sm">[Founder photo]</p>
                  </div>
                </div>
                <div className="relative z-10 p-6 w-full bg-gradient-to-t from-dark/90 to-transparent">
                  <div className="font-display font-bold text-white text-lg">Shiva Sri Charan</div>
                  <div className="text-muted text-sm">Founder, Fameboat</div>
                </div>
              </div>
              {/* Floating stat */}
              <div className="absolute -top-4 -right-4 glass px-4 py-3 rounded-2xl border border-primary/30 animate-float">
                <div className="text-2xl font-display font-bold text-primary">20</div>
                <div className="text-muted text-xs">years in<br />marketing</div>
              </div>
            </div>
          </div>

          {/* Right: bio */}
          <div className="reveal">
            <div className="section-badge mb-6">The Founder</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Hi, I'm Shiva. I built Fameboat because great businesses deserve{' '}
              <span className="gradient-text">great marketing.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              I've spent 20 years in marketing, branding, and media. I started Fameboat because I
              got tired of watching great service businesses with terrible digital presence lose
              clients to competitors who simply looked better online.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              At Fameboat, you work directly with me — not a junior account manager or an outsourced
              team. Every strategy, every website, every campaign gets real attention built around
              your specific business.
            </p>

            <ul className="space-y-3 mb-8">
              {proof.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary">
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
