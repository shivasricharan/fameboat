'use client'

import { useEffect, useRef } from 'react'

const faqs = [
  {
    q: 'Do you only build websites?',
    a: 'No. Websites are one part of a growth system.',
  },
  {
    q: 'Is this digital marketing?',
    a: 'No. Fameboat focuses on positioning, visibility, systems, and business workflows.',
  },
  {
    q: 'Can you work with Google Sheets?',
    a: 'Yes. Google Sheets, dashboards, workflows, and automations are used where appropriate.',
  },
  {
    q: 'Is pricing fixed?',
    a: 'No. Pricing depends on requirements.',
  },
  {
    q: 'Who is this best for?',
    a: 'Growing businesses that need better visibility, follow-ups, dashboards, workflows, and systems.',
  },
]

export default function FAQ() {
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
    <section ref={ref} id="faq" className="py-16 mesh-bg">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8 reveal">
          <div className="section-badge mb-4">FAQ</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              className="glass rounded-2xl border border-white/8 p-5 reveal"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="font-semibold text-white text-sm mb-1.5">{q}</div>
              <p className="text-muted text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
