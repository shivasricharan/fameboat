'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'

const plans = [
  {
    name: 'Web Design & Build',
    from: '₹3,00,000',
    period: 'onwards',
    desc: 'Custom website designed for your sales cycle. You own the codebase, your team runs it independently.',
    includes: [
      'Brand strategy + messaging workshop',
      'Custom design (desktop + mobile)',
      'Professional copywriting',
      'Google Sheets / CRM integration',
      'SEO + analytics setup',
      '2 rounds of revisions',
      '30-day post-launch support',
    ],
    cta: '#contact',
    ctaLabel: 'Discuss Your Website',
    popular: true,
  },
  {
    name: 'Growth Marketing',
    from: '₹2,00,000',
    period: '/month',
    desc: 'Full-funnel marketing management. Paid ads, content, email, and monthly reporting on ROI.',
    includes: [
      'Google Ads + Meta Ads setup & management',
      'Social media content + posting',
      'Blog writing (2–4 posts/month)',
      'Email nurture sequences',
      'Monthly performance reports',
      'Monthly optimization calls',
      'Minimum 3-month engagement',
    ],
    cta: '#contact',
    ctaLabel: 'Book Strategy Call',
    popular: false,
  },
  {
    name: 'Brand Positioning',
    from: '₹2,00,000',
    period: 'one-time',
    desc: 'Clarity on why customers choose you. Foundation for every website, ad, and sales conversation.',
    includes: [
      'Founder + customer interviews',
      'Competitor + market analysis',
      'Positioning statement',
      'Messaging pillars + brand voice',
      'Visual brand guidelines (Figma)',
      'Competitor differentiation chart',
      '4–6 week timeline',
    ],
    cta: '#contact',
    ctaLabel: 'Clarify Your Position',
    popular: false,
  },
]

const faqs = [
  { q: 'How do you price projects?', a: 'Transparent model: we scope the project in a free 30-min call, then give you a fixed estimate. No hidden costs, no scope creep surprises.' },
  { q: 'Can we start with just one service?', a: 'Yes. Many clients start with brand positioning, then add a website, then grow into marketing. You choose the pace.' },
  { q: 'What happens after the project ends?', a: '30 days of support included. After that, optional maintenance retainer if you want ongoing help.' },
  { q: 'Do you offer payment plans?', a: '50% upfront, 50% at completion for project work. Monthly billing for retainers.' },
]

export default function Pricing() {
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
    <section ref={ref} id="pricing" className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">Pricing</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Transparent Pricing.
            <span className="gradient-text"> No Surprises.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Every project is scoped to your actual needs. Book a call and we'll give you an exact
            quote within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16 reveal">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'pricing-popular popular-ring bg-gradient-to-b from-dark-mid to-dark border-primary/40'
                  : 'glass border-white/8 card-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  Most Requested
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-display text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-muted text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <span className="text-xs text-muted">Starting from</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-bold text-white">{plan.from}</span>
                  <span className="text-muted text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta}
                className={plan.popular ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}
              >
                {plan.ctaLabel} <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto reveal">
          <h3 className="font-display text-2xl font-bold text-white text-center mb-8">Common Questions</h3>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="glass rounded-2xl p-6 border border-white/8">
                <div className="font-semibold text-white mb-2 text-sm">{q}</div>
                <p className="text-muted text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
