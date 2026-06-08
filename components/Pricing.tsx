'use client'

import { useEffect, useRef } from 'react'
import { Check, ArrowRight, Zap } from 'lucide-react'

const websitePlans = [
  {
    name: 'Starter',
    price: '₹8,999',
    period: 'one-time',
    desc: 'Perfect for getting your business online fast.',
    features: [
      '5-page custom website',
      'Google Sheets lead capture',
      'Mobile + SEO optimised',
      'Contact & enquiry form',
      'Google Maps embed',
      'Social media links',
      'SSL certificate',
      '1 revision round',
      'Handover in 5–7 days',
    ],
    cta: '#contact',
    popular: false,
  },
  {
    name: 'Growth',
    price: '₹14,999',
    period: 'one-time',
    desc: 'For businesses that want more leads and visibility.',
    features: [
      'Everything in Starter',
      'Up to 8 pages',
      'Blog / news section',
      'Google Analytics setup',
      'WhatsApp chat button',
      'Testimonials section',
      'Gallery / portfolio',
      '3 revision rounds',
      'Google My Business setup',
      '30-day post-launch support',
    ],
    cta: '#contact',
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹24,999',
    period: 'one-time',
    desc: 'For established businesses ready to dominate.',
    features: [
      'Everything in Growth',
      'Unlimited pages',
      'Advanced lead forms',
      'Multi-step booking / enquiry flow',
      'Email notification automation',
      'Google Ads landing page',
      'Speed & performance audit',
      'Unlimited revisions',
      '60-day post-launch support',
      'Monthly check-in call',
    ],
    cta: '#contact',
    popular: false,
  },
]

const marketingPlans = [
  {
    name: 'Ignite',
    price: '₹15,000',
    period: '/month',
    desc: 'Consistent digital presence, hands-free.',
    features: [
      '12 social media posts/month',
      'Content calendar',
      'Monthly strategy call',
      'Performance report',
      'Hashtag & caption writing',
    ],
    cta: '#contact',
    popular: false,
  },
  {
    name: 'Accelerate',
    price: '₹30,000',
    period: '/month',
    desc: 'Full marketing engine for serious growth.',
    features: [
      'Everything in Ignite',
      'Meta Ads / Google Ads (budget extra)',
      '2 SEO blog articles/month',
      'WhatsApp campaign setup',
      'Competitor analysis',
      'Bi-weekly strategy call',
    ],
    cta: '#contact',
    popular: true,
  },
  {
    name: 'Command',
    price: '₹60,000',
    period: '/month',
    desc: 'Fractional CMO — full marketing department.',
    features: [
      'Everything in Accelerate',
      'All digital channels managed',
      'Video content scripting',
      'PR & media outreach',
      'Weekly strategy calls',
      'Priority response',
    ],
    cta: '#contact',
    popular: false,
  },
]

function PlanCard({
  plan,
  type,
}: {
  plan: (typeof websitePlans)[0]
  type: 'website' | 'marketing'
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-7 border transition-all duration-300 ${
        plan.popular
          ? 'popular-ring bg-gradient-to-b from-dark-mid to-dark border-primary/40'
          : 'glass border-white/8 card-hover'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full">
          <Zap size={12} /> Most Popular
        </div>
      )}

      <div className="mb-5">
        <h3 className="font-display text-lg font-bold text-white mb-1">{plan.name}</h3>
        <p className="text-muted text-sm">{plan.desc}</p>
      </div>

      <div className="mb-6">
        <span className="text-3xl font-bold text-white">{plan.price}</span>
        <span className="text-muted text-sm ml-1">{plan.period}</span>
      </div>

      <ul className="space-y-2.5 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
            <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={plan.popular ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}
      >
        Get Started <ArrowRight size={15} />
      </a>
    </div>
  )
}

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
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">Pricing</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Transparent Pricing.
            <span className="gradient-text"> No Hidden Costs.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            You know exactly what you pay and what you get. No agency-style surprises.
            If you need something custom, just ask.
          </p>
        </div>

        {/* Website packages */}
        <div className="mb-6 reveal">
          <h3 className="font-display text-xl font-bold text-white mb-2">Website Packages</h3>
          <p className="text-muted text-sm">One-time investment. You own it forever.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16 reveal">
          {websitePlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} type="website" />
          ))}
        </div>

        {/* Monthly marketing */}
        <div className="mb-6 reveal">
          <h3 className="font-display text-xl font-bold text-white mb-2">Monthly Marketing</h3>
          <p className="text-muted text-sm">Ongoing marketing management. Cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 reveal">
          {marketingPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} type="marketing" />
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 glass rounded-2xl p-6 border border-white/8 flex flex-col md:flex-row items-center gap-4 text-center md:text-left reveal">
          <div className="text-3xl">💬</div>
          <div className="flex-1">
            <div className="font-bold text-white mb-1">Not sure which plan is right for you?</div>
            <div className="text-muted text-sm">
              Book a free 30-minute call. We'll assess your business and recommend exactly what you
              need — no upselling, honest advice.
            </div>
          </div>
          <a href="#contact" className="btn-primary flex-shrink-0">
            Book Free Call
          </a>
        </div>
      </div>
    </section>
  )
}
