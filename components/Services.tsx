'use client'

import { useEffect, useRef } from 'react'
import { Globe, Megaphone, Palette, MessageSquare, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: <Globe size={26} />,
    title: 'Lead-Gen Websites',
    tag: 'Most Popular',
    tagColor: 'bg-primary/15 text-primary border-primary/25',
    desc: 'Professional websites built in 5–7 days with Google Sheets lead capture. Own your digital presence forever.',
    bullets: ['5-page custom website', 'Google Sheets integration', 'SEO + mobile optimised', 'From ₹8,999'],
    cta: '#pricing',
    ctaLabel: 'See Packages',
    border: 'border-primary/20',
    glow: 'hover:shadow-primary/10',
  },
  {
    icon: <Megaphone size={26} />,
    title: 'AI Marketing Retainer',
    tag: 'Best for Growth',
    tagColor: 'bg-accent/15 text-accent border-accent/25',
    desc: 'Monthly marketing management using AI tools — social content, ads, SEO, WhatsApp campaigns, and strategy.',
    bullets: ['Social media content + strategy', 'Google Ads / Meta Ads', 'Monthly performance report', 'From ₹15,000/month'],
    cta: '#contact',
    ctaLabel: 'Get a Quote',
    border: 'border-accent/20',
    glow: 'hover:shadow-accent/10',
  },
  {
    icon: <Palette size={26} />,
    title: 'Brand Identity Kit',
    tag: 'One-Time',
    tagColor: 'bg-secondary/15 text-secondary border-secondary/25',
    desc: 'Logo, colour palette, typography, and brand guidelines that make your business look premium and consistent.',
    bullets: ['Logo design (3 concepts)', 'Brand colour & font guide', 'Business card + social kit', '₹15,000 one-time'],
    cta: '#contact',
    ctaLabel: 'Get Started',
    border: 'border-secondary/20',
    glow: 'hover:shadow-secondary/10',
  },
  {
    icon: <MessageSquare size={26} />,
    title: 'AI Marketing Workshop',
    tag: 'Learn',
    tagColor: 'bg-green-500/15 text-green-400 border-green-500/25',
    desc: 'A 3-hour hands-on workshop for business owners. Learn to use AI tools to create content, run ads, and grow faster.',
    bullets: ['Group sessions (5–15 people)', 'Tools: ChatGPT, Canva AI, Meta AI', 'Real exercises for your business', '₹5,000/person'],
    cta: '#contact',
    ctaLabel: 'Register Interest',
    border: 'border-green-500/20',
    glow: 'hover:shadow-green-500/10',
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
    <section ref={ref} className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">What We Do</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Everything Your Business Needs
            <br />
            <span className="gradient-text">to Grow Digitally</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From your first website to full marketing management — we have a solution for every stage
            and every budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ icon, title, tag, tagColor, desc, bullets, cta, ctaLabel, border, glow }, i) => (
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
