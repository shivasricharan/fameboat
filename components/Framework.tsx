'use client'

import { useEffect, useRef } from 'react'
import { Search, Target, Palette, Rocket } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    icon: <Search size={24} />,
    number: '01',
    title: 'Discover',
    desc: 'We research your market, your competitors, and why your best customers actually choose you. Most businesses are surprised by what they find.',
    color: 'border-primary/25 bg-primary/5',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/15',
  },
  {
    icon: <Target size={24} />,
    number: '02',
    title: 'Position',
    desc: 'We define your unique market position — who you serve, what problem you solve, and why you\'re genuinely different from competitors.',
    color: 'border-violet-400/25 bg-violet-500/5',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/15',
  },
  {
    icon: <Palette size={24} />,
    number: '03',
    title: 'Brand',
    desc: 'Design, copy, and messaging built around your position. Your website and all communications say "why you" before asking for the sale.',
    color: 'border-accent/25 bg-accent/5',
    iconColor: 'text-accent',
    iconBg: 'bg-accent/15',
  },
  {
    icon: <Rocket size={24} />,
    number: '04',
    title: 'Deliver',
    desc: 'Go live and grow. Content, email, and ads that amplify your position — attracting right customers, filtering wrong ones.',
    color: 'border-green-500/25 bg-green-500/5',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/15',
  },
]

export default function Framework() {
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
    <section ref={ref} className="py-24 mesh-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">How We Do It</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            The positioning
            <span className="gradient-text"> framework.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Four steps from "looks like everyone else" to "clearly the right choice."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(({ icon, number, title, desc, color, iconColor, iconBg }, i) => (
            <div
              key={number}
              className={`glass rounded-2xl p-7 border card-hover reveal flex flex-col ${color}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center ${iconColor}`}>
                  {icon}
                </div>
                <span className="text-4xl font-bold text-white/5">{number}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <Link href="/how-we-work" className="btn-violet text-sm">
            See the full process →
          </Link>
        </div>
      </div>
    </section>
  )
}
