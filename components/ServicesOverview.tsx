'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: '🎯',
    title: 'Positioning Strategy',
    price: '₹30,000 – ₹50,000',
    period: 'one-time',
    desc: 'Market research, competitive analysis, positioning definition, and messaging framework. Understand exactly what makes you different — and how to say it.',
    cta: '/services#positioning',
    ctaLabel: 'Learn More',
    highlight: false,
  },
  {
    icon: '🌐',
    title: 'Positioned Website',
    price: '₹25,000 – ₹40,000',
    period: 'one-time',
    desc: 'A modern website built around your position. Every page communicates why you\'re different. Fast, mobile-first, and yours to own forever.',
    cta: '/services#website',
    ctaLabel: 'Learn More',
    highlight: true,
  },
  {
    icon: '📈',
    title: 'Launch + Growth',
    price: '₹5,000 – ₹10,000',
    period: '/month',
    desc: 'Monthly content, ads, and email to maintain momentum. We keep your positioning visible across channels so customers find you before competitors.',
    cta: '/services#growth',
    ctaLabel: 'Learn More',
    highlight: false,
  },
]

export default function ServicesOverview() {
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
    <section ref={ref} id="services" className="py-24 section-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">What We Offer</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Three offerings.
            <span className="gradient-text"> One goal.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Position you to win in your market.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map(({ icon, title, price, period, desc, cta, ctaLabel, highlight }, i) => (
            <div
              key={title}
              className={`glass rounded-2xl p-8 border card-hover reveal flex flex-col ${
                highlight ? 'border-primary/35 bg-primary/5' : 'border-white/8'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-5">{icon}</div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5 flex-1">{desc}</p>
              <div className="border-t border-white/8 pt-4 mb-5">
                <div className="text-white font-bold text-lg">{price}</div>
                <div className="text-muted text-xs">{period}</div>
              </div>
              <Link href={cta} className="btn-secondary w-full justify-center">
                {ctaLabel} <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 reveal">
          <Link href="/pricing" className="text-primary hover:underline text-sm font-medium">
            See full pricing breakdown →
          </Link>
        </div>
      </div>
    </section>
  )
}
