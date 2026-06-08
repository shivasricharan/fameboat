'use client'

import { useEffect, useRef } from 'react'

const industries = [
  { emoji: '🍕', name: 'Restaurants & Cafes', desc: 'Menu showcase, table reservations, delivery links' },
  { emoji: '🏥', name: 'Clinics & Doctors', desc: 'Appointment booking, services, patient reviews' },
  { emoji: '👗', name: 'Fashion & Retail', desc: 'Product gallery, WhatsApp ordering, store locator' },
  { emoji: '🏠', name: 'Real Estate', desc: 'Property listings, virtual tours, lead capture' },
  { emoji: '💈', name: 'Salons & Spas', desc: 'Service menu, online booking, stylist profiles' },
  { emoji: '🏋️', name: 'Gyms & Fitness', desc: 'Batch schedules, trial class booking, pricing' },
  { emoji: '📚', name: 'Coaching & Tuition', desc: 'Course info, free demo booking, results' },
  { emoji: '🔧', name: 'Home Services', desc: 'Service areas, instant quote form, trust signals' },
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
    <section ref={ref} id="industries" className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">Industries</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Built for Hyderabad's{' '}
            <span className="gradient-text">Local Businesses</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We understand the Hyderabad market — the customers, the competition, and what makes
            local businesses win. No generic templates.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 reveal">
          {industries.map(({ emoji, name, desc }, i) => (
            <div
              key={name}
              className="glass rounded-2xl p-5 border border-white/8 card-hover text-center group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {emoji}
              </div>
              <div className="font-semibold text-white text-sm mb-1.5">{name}</div>
              <div className="text-muted text-xs leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <p className="text-muted text-sm">
            Don't see your industry?{' '}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Let's talk anyway →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
