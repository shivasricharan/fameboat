'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, TrendingUp } from 'lucide-react'

const cases = [
  {
    emoji: '🏠',
    client: 'DzineHome',
    category: 'Interior Design',
    tagline: 'From 2 leads/month to 50+ — using a new website and targeted Google Ads.',
    what: [
      'Complete website redesign (portfolio-focused, conversion-optimised)',
      'Google Ads targeting high-intent "interior design near me" searches',
      'Email nurture: capture → education → consultation booking',
      'Monthly content: design trends, case study blogs',
    ],
    stats: [
      { value: '50+', label: 'leads/month' },
      { value: '₹1.2K', label: 'cost per lead' },
      { value: '₹80L+', label: 'new revenue/yr' },
    ],
    outcome: 'Paid ₹4.5L for website + 3 months ads management → ₹80L+ additional annual revenue. 1,778% ROI.',
    accent: 'border-primary/30 bg-primary/5',
    tag: 'bg-primary/15 text-primary border-primary/25',
  },
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
    stats: [
      { value: '100%', label: 'automated' },
      { value: '0', label: 'manual follow-ups' },
      { value: '5–7 days', label: 'to build' },
    ],
    outcome: 'The committee runs the entire event lifecycle without a developer or technical knowledge.',
    accent: 'border-secondary/30 bg-secondary/5',
    tag: 'bg-secondary/15 text-secondary border-secondary/25',
  },
  {
    emoji: '📺',
    client: 'Metro TV Telugu',
    category: 'Media & Broadcasting',
    tagline: 'Google Sheets as a live CMS — editorial team updates the website hourly, zero developers.',
    what: [
      'Team copies YouTube URL, title, and category into Google Sheet',
      'A simple formula fills and formats the entire entry',
      'Website refreshes automatically with latest content',
      'New videos, shorts, and categories live in minutes',
    ],
    stats: [
      { value: 'Hourly', label: 'content updates' },
      { value: '0', label: 'developer calls' },
      { value: '5–7 days', label: 'to build' },
    ],
    outcome: 'A modern broadcasting website updated by journalists — not developers. No CMS training. No backend access.',
    accent: 'border-accent/30 bg-accent/5',
    tag: 'bg-accent/15 text-accent border-accent/25',
  },
]

export default function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.06 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="case-studies" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">Client Results</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Not Mockups. Not Hypotheticals.
            <span className="gradient-text"> Real Work.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Here's what we built, exactly how it works, and what it delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map(({ emoji, client, category, tagline, what, stats, outcome, accent, tag }) => (
            <div key={client} className={`glass rounded-2xl p-8 border card-hover reveal flex flex-col ${accent}`}>
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

              <div className="grid grid-cols-3 gap-2 mb-5">
                {stats.map(({ value, label }) => (
                  <div key={label} className="glass rounded-xl p-3 text-center border border-white/5">
                    <div className="text-white font-bold text-sm leading-tight">{value}</div>
                    <div className="text-muted text-[11px] mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mb-5 flex-1">
                <div className="text-xs font-bold text-muted uppercase tracking-wider mb-3">What we did</div>
                <ul className="space-y-2">
                  {what.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <TrendingUp size={12} className="text-primary mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-xl p-4 border border-green-500/15">
                <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Outcome</div>
                <p className="text-sm text-muted">{outcome}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-muted text-sm mb-5">Every project is scoped to your specific business and goals.</p>
          <a href="#contact" className="btn-primary text-base">
            Want Results Like These? <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
