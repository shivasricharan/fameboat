'use client'

import { useEffect, useRef } from 'react'
import { Search, Lightbulb, Wrench, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: <Search size={28} />,
    number: '01',
    title: 'Discovery',
    duration: 'Week 1–2',
    desc: 'We start by understanding your business, your customers, and what success looks like. Competitor analysis, customer interviews, market research — before a single pixel is designed.',
    color: 'from-primary/20 to-primary/5',
    border: 'border-primary/25',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
  },
  {
    icon: <Lightbulb size={28} />,
    number: '02',
    title: 'Strategy',
    duration: 'Week 2–3',
    desc: 'We present findings and strategic recommendations. Define positioning, messaging, channels, and tactics. You review and align — then we create the execution plan with clear milestones.',
    color: 'from-accent/20 to-accent/5',
    border: 'border-accent/25',
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
  },
  {
    icon: <Wrench size={28} />,
    number: '03',
    title: 'Execution',
    duration: 'Week 3–8',
    desc: 'Design, build, write, and launch. Weekly check-ins. Feedback rounds built in. No surprises at the end — you see the work evolve in real time.',
    color: 'from-secondary/20 to-secondary/5',
    border: 'border-secondary/25',
    iconBg: 'bg-secondary/15',
    iconColor: 'text-secondary',
  },
  {
    icon: <TrendingUp size={28} />,
    number: '04',
    title: 'Optimise',
    duration: 'Week 8+',
    desc: '30 days of active monitoring post-launch. Data collection, analysis, and recommendations for the next phase — scaling, new channels, or a retainer if you want to keep growing.',
    color: 'from-green-500/20 to-green-500/5',
    border: 'border-green-500/25',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-400',
  },
]

export default function HowItWorks() {
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
    <section ref={ref} id="how-it-works" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">The Process</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Strategy to Execution
            <span className="gradient-text"> to Results.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            We don't start building until we understand your market. Strategy prevents wasted effort.
            Speed comes from playbooks we've refined over two decades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon, number, title, duration, desc, color, border, iconBg, iconColor }, i) => (
            <div
              key={number}
              className={`glass rounded-2xl p-7 border ${border} card-hover reveal bg-gradient-to-b ${color} flex flex-col`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor}`}>
                  {icon}
                </div>
                <span className="text-4xl font-bold text-white/5">{number}</span>
              </div>

              <div className={`text-xs font-bold mb-2 ${iconColor} uppercase tracking-wider`}>{duration}</div>
              <h3 className="font-display text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-muted text-sm leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a href="#contact" className="btn-primary text-base animate-pulse-glow">
            Start With a Free Strategy Call →
          </a>
          <p className="text-muted text-sm mt-3">No obligation. We'll tell you exactly what your business needs.</p>
        </div>
      </div>
    </section>
  )
}
