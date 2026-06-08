'use client'

import { useEffect, useRef } from 'react'
import { Phone, Palette, Rocket } from 'lucide-react'

const steps = [
  {
    icon: <Phone size={28} />,
    number: '01',
    title: '30-Min Strategy Call',
    desc: "Tell us about your business, your team, and your goals. We ask the right questions and scope exactly what you need — no jargon, no sales pitch.",
    color: 'from-primary/20 to-primary/5',
    border: 'border-primary/25',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
  },
  {
    icon: <Palette size={28} />,
    number: '02',
    title: 'We Design & Build',
    desc: "We design, write, and build your website. You review and give feedback. We handle the Google Sheets integration, automations, SEO, and mobile optimisation.",
    color: 'from-accent/20 to-accent/5',
    border: 'border-accent/25',
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
  },
  {
    icon: <Rocket size={28} />,
    number: '03',
    title: 'Launch & Hand Over',
    desc: "Your website goes live in 5–7 days. Your team manages everything from Google Sheets — updates, registrations, enquiries, automations. No developer needed, ever.",
    color: 'from-secondary/20 to-secondary/5',
    border: 'border-secondary/25',
    iconBg: 'bg-secondary/15',
    iconColor: 'text-secondary',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="how-it-works" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">How It Works</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Simple Process.
            <span className="gradient-text"> Your Team Runs It After.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            We handle the build. You get a website your team can operate independently — no developer calls, no technical knowledge required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-px bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30" />

          {steps.map(({ icon, number, title, desc, color, border, iconBg, iconColor }, i) => (
            <div
              key={number}
              className={`glass rounded-2xl p-8 border ${border} card-hover reveal bg-gradient-to-b ${color}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center ${iconColor}`}>
                  {icon}
                </div>
                <span className="text-5xl font-bold text-white/5">{number}</span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <a href="#contact" className="btn-primary text-base animate-pulse-glow">
            Book Your Free 30-Min Call →
          </a>
          <p className="text-muted text-sm mt-3">No obligation. We'll tell you exactly what makes sense for your business.</p>
        </div>
      </div>
    </section>
  )
}
