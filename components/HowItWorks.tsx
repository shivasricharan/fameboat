'use client'

import { useEffect, useRef } from 'react'
import { Phone, Palette, Rocket } from 'lucide-react'

const steps = [
  {
    icon: <Phone size={26} />,
    number: '01',
    title: 'Free 30-Min Call',
    desc: "Tell us about your business and what you need. We'll ask the right questions and tell you exactly what makes sense — no jargon, no sales pitch.",
    border: 'border-primary/25',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
  },
  {
    icon: <Palette size={26} />,
    number: '02',
    title: 'We Build It',
    desc: 'We design and build your website. You review and give feedback. Done in 5–7 days for standard sites.',
    border: 'border-secondary/25',
    iconBg: 'bg-secondary/15',
    iconColor: 'text-secondary',
  },
  {
    icon: <Rocket size={26} />,
    number: '03',
    title: 'You Run It',
    desc: 'Your website goes live and your team manages it from Google Sheets. No developer calls ever again.',
    border: 'border-accent/25',
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
  },
]

export default function HowItWorks() {
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
    <section ref={ref} id="how-it-works" className="py-24 mesh-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">How It Works</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Simple Process.
            <span className="gradient-text"> Fast Delivery.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ icon, number, title, desc, border, iconBg, iconColor }, i) => (
            <div
              key={number}
              className={`glass rounded-2xl p-7 border ${border} card-hover reveal`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor}`}>
                  {icon}
                </div>
                <span className="text-4xl font-bold text-white/5">{number}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a href="#contact" className="btn-primary text-base animate-pulse-glow">
            Book Your Free Call →
          </a>
        </div>
      </div>
    </section>
  )
}
