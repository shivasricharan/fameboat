'use client'

import { useEffect, useRef } from 'react'
import { Globe, Megaphone, Target, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: <Globe size={26} />,
    title: 'Web Design & Build',
    tag: 'Most Popular',
    tagColor: 'bg-primary/15 text-primary border-primary/25',
    desc: 'Modern, conversion-focused website designed for your sales cycle. Built on Next.js — fast, scalable, no slow WordPress. You own the codebase forever.',
    bullets: [
      'Brand strategy + messaging workshop',
      'Custom design — desktop & mobile',
      'Professional copywriting for every page',
      'Google Sheets / CRM integration',
      'SEO + analytics setup',
      'Timeline: 5–7 days to 6 weeks',
    ],
    from: '₹3,00,000',
    period: 'onwards',
    cta: '#contact',
    ctaLabel: 'Discuss Your Website',
    border: 'border-primary/20',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: <Megaphone size={26} />,
    title: 'Growth Marketing',
    tag: 'Best for Scale',
    tagColor: 'bg-secondary/15 text-secondary border-secondary/25',
    desc: 'Full-funnel growth strategy — paid ads, content, and email. Predictable leads, measurable ROI. Monthly reporting on what\'s working and what\'s not.',
    bullets: [
      'Google Ads + Meta Ads management',
      'Content calendar + blog + social posting',
      'Email nurture sequences',
      'Monthly performance reports',
      'Monthly optimization calls',
      'Minimum 3-month engagement',
    ],
    from: '₹2,00,000',
    period: '/month',
    cta: '#contact',
    ctaLabel: 'Book Strategy Call',
    border: 'border-secondary/20',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
  {
    icon: <Target size={26} />,
    title: 'Brand Positioning',
    tag: 'Foundation First',
    tagColor: 'bg-accent/15 text-accent border-accent/25',
    desc: 'Clarity on why customers choose you — and how to say it. Works as a standalone engagement or as the prerequisite to a website redesign or ad campaign.',
    bullets: [
      'Founder + customer interviews',
      'Competitor analysis',
      'Positioning statement + messaging pillars',
      'Brand visual guidelines (Figma)',
      'Competitor differentiation summary',
      'Timeline: 4–6 weeks',
    ],
    from: '₹2,00,000',
    period: 'onwards',
    cta: '#contact',
    ctaLabel: 'Clarify Your Position',
    border: 'border-accent/20',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
  },
]

export default function Services() {
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
    <section ref={ref} id="services" className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">What We Offer</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Three Services.
            <span className="gradient-text"> One Growth Partner.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Start with what you need most. Many clients begin with positioning, then add a website,
            then scale with marketing. You choose the pace.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map(({ icon, title, tag, tagColor, desc, bullets, from, period, cta, ctaLabel, border, iconBg, iconColor }, i) => (
            <div
              key={title}
              className={`glass rounded-2xl p-8 border ${border} card-hover reveal flex flex-col`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor}`}>
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
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/8 pt-5 mb-5">
                <span className="text-xs text-muted">Starting from</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">{from}</span>
                  <span className="text-muted text-sm">{period}</span>
                </div>
              </div>

              <a href={cta} className="btn-secondary w-full justify-center mt-auto">
                {ctaLabel} <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-muted text-sm mt-10 reveal">
          Not sure which to start with?{' '}
          <a href="#contact" className="text-primary font-semibold hover:underline">
            Book a free 30-min call →
          </a>{' '}
          We'll tell you exactly what makes sense for your stage.
        </p>
      </div>
    </section>
  )
}
