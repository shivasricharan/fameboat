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
      'Team marks payment status in Google Sheet',
      'Confirmation or rejection email fires automatically',
      'Zero manual follow-up',
    ],
    outcome: 'The committee runs the entire event lifecycle without a developer or any technical knowledge.',
    accent: 'border-primary/30 bg-primary/5',
    tag: 'bg-primary/15 text-primary border-primary/25',
  },
  {
    emoji: '📺',
    client: 'Metro TV Telugu',
    category: 'Media & Broadcasting',
    tagline: 'Google Sheets as a live CMS — team updates the website hourly without any developer.',
    what: [
      'Team copies YouTube URL and title into Google Sheet',
      'Website refreshes automatically with latest content',
      'New videos and categories live in minutes',
      'No CMS training needed',
    ],
    outcome: 'A modern broadcasting website updated by journalists — not developers.',
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
    <section ref={ref} id="case-studies" className="py-24 section-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">Real Work</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Built for Real Businesses.
            <span className="gradient-text"> Real Results.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Here's what we built and exactly how it works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map(({ emoji, client, category, tagline, what, outcome, accent, tag }) => (
            <div key={client} className={`glass rounded-2xl p-8 border card-hover reveal ${accent}`}>
              <div className="flex items-start gap-4 mb-5">
                <div className="text-4xl">{emoji}</div>
                <div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${tag} mb-2 inline-block`}>
                    {category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">{client}</h3>
                </div>
              </div>

              <p className="text-white font-medium text-sm leading-relaxed mb-5 italic">
                "{tagline}"
              </p>

              <ul className="space-y-2 mb-5">
                {what.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="glass rounded-xl p-4 border border-green-500/15">
                <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Outcome</div>
                <p className="text-sm text-muted">{outcome}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a href="#contact" className="btn-primary text-base">
            Discuss Your Project <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
