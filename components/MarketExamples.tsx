'use client'

import { useEffect, useRef } from 'react'

const examples = [
  {
    industry: 'Architecture',
    before: { label: 'Generic', text: '"Full-service architecture firm"' },
    after: { label: 'Positioned', text: '"Sustainable residential design for high net-worth families"' },
    impact: 'Same leads. 3x conversion rate.',
  },
  {
    industry: 'Coaching',
    before: { label: 'Generic', text: '"Executive coach for professionals"' },
    after: { label: 'Positioned', text: '"I help tech founders scale from pre-seed to Series A"' },
    impact: 'Different leads — fewer, more qualified, higher-paying.',
  },
  {
    industry: 'Interior Design',
    before: { label: 'Generic', text: '"Complete interior design services"' },
    after: { label: 'Positioned', text: '"Luxury renovation for busy professionals who hate the process"' },
    impact: 'Different customers. Different budgets. Better close rate.',
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
    <section ref={ref} className="py-24 mesh-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">How It Changes Things</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Same business. Completely
            <span className="gradient-text"> different results.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Positioning doesn't change what you do. It changes who finds you — and why they choose you.
          </p>
        </div>

        <div className="space-y-5">
          {examples.map(({ industry, before, after, impact }, i) => (
            <div
              key={industry}
              className="glass rounded-2xl border border-white/8 overflow-hidden reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-muted uppercase tracking-wider">{industry}</span>
                <span className="text-xs font-bold text-accent">{impact}</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
                <div className="p-5">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">{before.label}</div>
                  <p className="text-muted text-sm italic">"{before.text.replace(/"/g, '')}"</p>
                </div>
                <div className="p-5 compare-highlight">
                  <div className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-2">{after.label}</div>
                  <p className="text-white text-sm font-medium italic">"{after.text.replace(/"/g, '')}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted text-sm mt-8 reveal">
          These are illustrative examples. Real outcomes vary by market and execution.
        </p>
      </div>
    </section>
  )
}
