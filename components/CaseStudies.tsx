'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    emoji: '🏛️',
    client: 'IIA Telangana Chapter',
    category: 'Professional Association',
    tagline: 'Event registration, payment verification & automated emails — all from a Google Sheet.',
    what: [
      'Participants register and pay online',
      'Team verifies payment by marking status in Google Sheet',
      'Instant confirmation or rejection email fires automatically',
      'Zero manual follow-up. Zero missed registrations.',
    ],
    outcome: 'The committee runs the entire event lifecycle without a developer or any technical knowledge.',
    accent: 'border-primary/30 bg-primary/5',
    tag: 'bg-primary/15 text-primary border-primary/25',
  },
  {
    emoji: '📺',
    client: 'Metro TV Telugu',
    category: 'Media & Broadcasting',
    tagline: 'Google Sheets as a live CMS — editorial team updates the website hourly without any developer.',
    what: [
      'Team copies YouTube URL, title, and category into Google Sheet',
      'A simple formula fills and formats the entire entry',
      'Website refreshes automatically with latest content',
      'New videos, shorts, and categories live in minutes',
    ],
    outcome: 'A modern broadcasting website updated by journalists — not developers. No CMS training. No backend access.',
    accent: 'border-secondary/30 bg-secondary/5',
    tag: 'bg-secondary/15 text-secondary border-secondary/25',
  },
]

export default function CaseStudies() {
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">Real Work</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Built for Real Businesses.
            <span className="gradient-text"> Real Results.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Not mockups. Not hypotheticals. Here's what we built and exactly how it works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map(({ emoji, client, category, tagline, what, outcome, accent, tag }) => (
            <div
              key={client}
              className={`glass rounded-2xl p-8 border card-hover reveal ${accent}`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{emoji}</div>
                <div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${tag} mb-2 inline-block`}>
                    {category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">{client}</h3>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-white font-medium text-sm leading-relaxed mb-5 italic">
                "{tagline}"
              </p>

              {/* What was built */}
              <div className="mb-5">
                <div className="text-xs font-bold text-muted uppercase tracking-wider mb-3">How it works</div>
                <ul className="space-y-2">
                  {what.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="glass rounded-xl p-4 border border-green-500/15">
                <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Outcome</div>
                <p className="text-sm text-muted">{outcome}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-muted text-sm mb-5">
            Every project is different. Book a call and we'll show you what's possible for your business.
          </p>
          <a href="#contact" className="btn-primary text-base">
            Discuss Your Project <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
