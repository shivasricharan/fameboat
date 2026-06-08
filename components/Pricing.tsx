'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'

const plans = [
  {
    name: 'Professional Website',
    from: '₹15,000',
    period: 'one-time',
    desc: 'Custom-designed website with Google Sheets as the backend. Your team manages everything — content, enquiries, registrations, automated emails — without any developer.',
    includes: [
      'Custom design — not a template',
      'Google Sheets backend (updates, leads, events)',
      'Automated emails via Apps Script',
      'Mobile-first + SEO optimised',
      'Live in 5–7 days',
      'You own it. Forever.',
    ],
    cta: '#contact',
    ctaLabel: 'Book a Free Call',
    popular: true,
  },
  {
    name: 'Monthly Marketing',
    from: '₹15,000',
    period: '/month',
    desc: 'Full digital marketing handled for you. Social content, ads, SEO, and strategy — all powered by AI tools and two decades of marketing experience.',
    includes: [
      'Social media content + strategy',
      'Meta Ads + Google Ads management',
      'Monthly performance report',
      'AI-powered content creation',
      'SEO + WhatsApp campaigns',
      'Cancel anytime',
    ],
    cta: '#contact',
    ctaLabel: 'Get a Quote',
    popular: false,
  },
]

export default function Pricing() {
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
    <section ref={ref} id="pricing" className="py-24 section-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">Pricing</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Simple, Honest Pricing.
            <span className="gradient-text"> No Surprises.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Every project is scoped to your actual needs. These are starting points — book a call and we'll give you an exact quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 reveal">
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
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-1.5 rounded-full">
                  Most Requested
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-muted text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <span className="text-sm text-muted">Starting from</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-bold text-white">{plan.from}</span>
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

        <div className="mt-10 glass rounded-2xl p-6 border border-white/8 text-center reveal">
          <p className="text-muted text-sm">
            Not sure what you need?{' '}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Book a free 30-minute call
            </a>{' '}
            — we'll assess your situation and tell you exactly what makes sense. No obligation.
          </p>
        </div>
      </div>
    </section>
  )
}
