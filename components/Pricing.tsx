'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'

const plans = [
  {
    name: 'Professional Website',
    from: '₹15,000',
    period: 'one-time',
    desc: 'A clean, fast website your team manages via Google Sheets. You own it forever.',
    includes: [
      'Custom design — not a template',
      'Google Sheets backend',
      'Mobile-first + SEO ready',
      'Automated emails via Apps Script',
      'Live in 5–7 days',
    ],
    cta: '#contact',
    ctaLabel: 'Book a Free Call',
    popular: true,
  },
  {
    name: 'Monthly Marketing',
    from: '₹15,000',
    period: '/month',
    desc: 'Social content, ads, and SEO handled for you. Cancel anytime.',
    includes: [
      'Social media content + strategy',
      'Meta Ads + Google Ads',
      'SEO + WhatsApp campaigns',
      'Monthly performance report',
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
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">Pricing</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Simple Pricing.
            <span className="gradient-text"> No Surprises.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Book a call and we'll scope your exact needs. These are starting points.
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
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  Most Requested
                </div>
              )}
              <div className="mb-5">
                <h3 className="font-display text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-muted text-sm">{plan.desc}</p>
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
              <a href={plan.cta} className={plan.popular ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}>
                {plan.ctaLabel} <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 glass rounded-2xl p-5 border border-white/8 text-center reveal">
          <p className="text-muted text-sm">
            Not sure what you need?{' '}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Book a free 30-minute call →
            </a>{' '}
            We'll tell you exactly what makes sense. No obligation.
          </p>
        </div>
      </div>
    </section>
  )
}
