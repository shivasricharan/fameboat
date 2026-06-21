'use client'

import { useEffect, useRef } from 'react'
import { Target, Crosshair, BarChart3, LineChart, Lightbulb } from 'lucide-react'

const steps = [
  {
    icon: <Target size={24} />,
    number: '01',
    title: 'Position your business',
    desc: 'Clarify who you serve, what you offer, and why it matters.',
    color: 'border-primary/25 bg-primary/5',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/15',
  },
  {
    icon: <Crosshair size={24} />,
    number: '02',
    title: 'Capture opportunities',
    desc: 'Build systems that capture leads from every channel.',
    color: 'border-violet-400/25 bg-violet-500/5',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/15',
  },
  {
    icon: <BarChart3 size={24} />,
    number: '03',
    title: 'Track leads and follow-ups',
    desc: 'See every lead, stage, owner, and follow-up in one place.',
    color: 'border-accent/25 bg-accent/5',
    iconColor: 'text-accent',
    iconBg: 'bg-accent/15',
  },
  {
    icon: <LineChart size={24} />,
    number: '04',
    title: 'Measure what matters',
    desc: 'Dashboards that show conversion, pipeline, and revenue.',
    color: 'border-blue-500/25 bg-blue-500/5',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/15',
  },
  {
    icon: <Lightbulb size={24} />,
    number: '05',
    title: 'Improve decisions',
    desc: 'Use data to focus on what works and fix what doesn\'t.',
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
    <section ref={ref} id="how-it-works" className="py-24 mesh-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">How It Works</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Connect the
            <span className="gradient-text"> missing pieces.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map(({ icon, number, title, desc, color, iconColor, iconBg }, i) => (
            <div
              key={number}
              className={`glass rounded-2xl p-6 border card-hover reveal flex flex-col ${color}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center ${iconColor}`}>
                  {icon}
                </div>
                <span className="text-3xl font-bold text-white/5">{number}</span>
              </div>
              <h3 className="font-display text-base font-bold text-white mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
