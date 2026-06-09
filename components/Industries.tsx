'use client'

import { useEffect, useRef } from 'react'

const industries = [
  { emoji: '🏠', name: 'Interior Design', desc: 'Portfolio websites, Google Ads, lead nurture' },
  { emoji: '🏗️', name: 'Real Estate', desc: 'Property listings, paid ads, lead qualification' },
  { emoji: '🎓', name: 'Coaching & Training', desc: 'Brand positioning, content, email sequences' },
  { emoji: '🦷', name: 'Dental & Healthcare', desc: 'Professional websites, local SEO, patient trust' },
  { emoji: '⚖️', name: 'Professional Services', desc: 'Thought leadership, LinkedIn presence, referrals' },
  { emoji: '💍', name: 'Wedding & Events', desc: 'Portfolio, retargeting, email reactivation' },
  { emoji: '🏛️', name: 'Associations', desc: 'Event systems, membership, automated comms' },
  { emoji: '📸', name: 'Photography & Media', desc: 'Portfolio + content strategy + brand story' },
]

export default function Industries() {
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
    <section ref={ref} id="industries" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">Industries</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Built for Service Businesses
            <span className="gradient-text"> That Want to Grow.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We specialize in service industries — not generic SaaS or e-commerce.
            We understand your sales cycle, your client relationships, and what converts.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          {industries.map(({ emoji, name, desc }) => (
            <div
              key={name}
              className="glass rounded-2xl p-5 border border-white/8 card-hover text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{emoji}</div>
              <div className="font-semibold text-white text-sm mb-1">{name}</div>
              <div className="text-muted text-xs leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 reveal">
          <p className="text-muted text-sm">
            Don't see your industry?{' '}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Let's talk anyway →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
