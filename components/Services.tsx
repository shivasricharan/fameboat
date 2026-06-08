'use client'

import { useEffect, useRef } from 'react'
import { Globe, Megaphone, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: <Globe size={26} />,
    title: 'Professional Website',
    tag: 'Most Popular',
    tagColor: 'bg-primary/15 text-primary border-primary/25',
    desc: 'Custom-designed website with Google Sheets as your backend. Your team manages everything — content, enquiries, registrations, automated emails — without any developer.',
    bullets: [
      'Custom design — not a template',
      'Google Sheets backend (your team runs it)',
      'Mobile-first + SEO optimised',
      'Live in 5–7 days · From ₹15,000',
    ],
    cta: '#pricing',
    ctaLabel: 'See Pricing',
    border: 'border-primary/20',
  },
  {
    icon: <Megaphone size={26} />,
    title: 'Monthly Marketing',
    tag: 'Best for Growth',
    tagColor: 'bg-accent/15 text-accent border-accent/25',
    desc: 'Full digital marketing handled for you. Social content, ads, SEO, and strategy — all powered by AI tools and two decades of marketing experience.',
    bullets: [
      'Social media content + strategy',
      'Meta Ads + Google Ads management',
      'SEO + WhatsApp campaigns',
      'From ₹15,000/month · Cancel anytime',
    ],
    cta: '#contact',
    ctaLabel: 'Get a Quote',
    border: 'border-accent/20',
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="services" className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">What We Do</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Two Services.
            <span className="gradient-text"> One Partner.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A professional website your team can run independently, and marketing that drives results — start with one or both.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map(({ icon, title, tag, tagColor, desc, bullets, cta, ctaLabel, border }, i) => (
            <div
              key={title}
              className={`glass rounded-2xl p-8 border ${border} card-hover reveal flex flex-col`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white">
                  {icon}
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${tagColor}`}>
                  {tag}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{desc}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <a href={cta} className="btn-secondary w-full justify-center mt-auto">
                {ctaLabel} <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
