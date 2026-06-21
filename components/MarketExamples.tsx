'use client'

import { useEffect, useRef } from 'react'

const caseStudies = [
  {
    name: 'Metro TV Telugu',
    category: 'Media',
    challenge: 'Create a digital presence and advertiser enquiry workflow.',
    solution: 'Website and enquiry system.',
    impact: 'Improved accessibility and advertiser contact experience.',
  },
  {
    name: 'Telangana Architecture Festival / IIA',
    category: 'Architecture & Events',
    challenge: 'Manage registrations, verification, communication, and reporting.',
    solution: 'Registration workflows, dashboards, verification systems, and reporting.',
    impact: 'Simplified event operations and registration management.',
  },
]

export default function MarketExamples() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="work" className="py-24 mesh-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">Work</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Built for
            <span className="gradient-text"> real business needs.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map(({ name, category, challenge, solution, impact }, i) => (
            <div
              key={name}
              className="glass rounded-2xl border border-white/8 overflow-hidden card-hover reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="px-6 py-4 border-b border-white/5">
                <span className="text-xs font-bold text-muted uppercase tracking-wider">{category}</span>
                <h3 className="font-display text-xl font-bold text-white mt-1">{name}</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Challenge</div>
                  <p className="text-muted text-sm">{challenge}</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Solution</div>
                  <p className="text-muted text-sm">{solution}</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Impact</div>
                  <p className="text-white text-sm font-medium">{impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
