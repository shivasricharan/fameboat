'use client'

import { useEffect, useRef } from 'react'
import { Globe, Megaphone, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: <Globe size={26} />,
    title: 'Professional Website',
    desc: 'A clean, fast website your team can manage independently. We connect it to Google Sheets so you handle updates, leads, and registrations — no developer needed ever again.',
    bullets: [
      'Custom design — not a template',
      'Google Sheets as your backend',
      'Mobile-first + SEO ready',
      'Live in 5–7 days',
    ],
    cta: '#pricing',
    ctaLabel: 'See Pricing',
    border: 'border-primary/20',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
  },
  {
    icon: <Megaphone size={26} />,
    title: 'Monthly Marketing',
    desc: 'Social media, ads, and content handled for you. We run your digital marketing so you can focus on running your business.',
    bullets: [
      'Social media content + posting',
      'Google Ads + Meta Ads',
      'SEO + WhatsApp campaigns',
      'Monthly report',
    ],
    cta: '#contact',
    ctaLabel: 'Get a Quote',
    border: 'border-secondary/20',
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary/10',
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
    <section ref={ref} id="services" className="py-24 section-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">What We Do</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Two Services.
            <span className="gradient-text"> One Partner.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Start with a website, add marketing when you're ready — or do both from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ icon, title, desc, bullets, cta, ctaLabel, border, iconColor, iconBg }, i) => (
            <div
              key={title}
              className={`glass rounded-2xl p-8 border ${border} card-hover reveal flex flex-col`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor} mb-5`}>
                {icon}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{desc}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-gray-300">
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
