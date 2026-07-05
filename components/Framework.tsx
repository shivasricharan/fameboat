'use client'

import { useEffect, useRef } from 'react'
import { Target, Crosshair, BarChart3, LineChart, Lightbulb } from 'lucide-react'

const steps = [
  {
    icon: <Target size={22} />,
    number: '01',
    title: 'Position your business',
    desc: 'Clarify who you serve, what you offer, and why it matters.',
    color: 'border-primary/25 bg-primary/5',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/15',
  },
  {
    icon: <Crosshair size={22} />,
    number: '02',
    title: 'Capture opportunities',
    desc: 'Build systems that capture leads from every channel.',
    color: 'border-violet-400/25 bg-violet-500/5',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/15',
  },
  {
    icon: <BarChart3 size={22} />,
    number: '03',
    title: 'Track leads and follow-ups',
    desc: 'See every lead, stage, owner, and follow-up in one place.',
    color: 'border-accent/25 bg-accent/5',
    iconColor: 'text-accent',
    iconBg: 'bg-accent/15',
  },
  {
    icon: <LineChart size={22} />,
    number: '04',
    title: 'Measure what matters',
    desc: 'Dashboards that show conversion, pipeline, and revenue.',
    color: 'border-blue-500/25 bg-blue-500/5',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/15',
  },
  {
    icon: <Lightbulb size={22} />,
    number: '05',
    title: 'Improve decisions',
    desc: "Use data to focus on what works and fix what doesn't.",
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
    <section ref={ref} id="how-it-works" className="py-16 mesh-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-4">How It Works</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Connect the
            <span className="gradient-text"> missing pieces.</span>
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Five steps that turn scattered business activity into a clear, connected system.
          </p>
        </div>

        {/* Desktop layout with connectors */}
        <div className="hidden lg:flex items-start reveal">
          {steps.map(({ icon, number, title, desc, color, iconColor, iconBg }, i) => (
            <div key={number} className="flex items-start flex-1 min-w-0">
              <div
                className={`glass rounded-2xl p-5 border card-hover flex flex-col w-full ${color}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center ${iconColor} flex-shrink-0`}>
                    {icon}
                  </div>
                  <span className="text-2xl font-bold text-white/8 font-display">{number}</span>
                </div>
                <h3 className="font-display text-sm font-bold text-white mb-1.5">{title}</h3>
                <p className="text-muted text-xs leading-relaxed flex-1">{desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="step-connector self-center flex-shrink-0 mx-2 mt-6" style={{ width: '20px', minWidth: '20px' }} />
              )}
            </div>
          ))}
        </div>

        {/* Mobile / tablet grid */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-4">
          {steps.map(({ icon, number, title, desc, color, iconColor, iconBg }, i) => (
            <div
              key={number}
              className={`glass rounded-2xl p-5 border card-hover reveal flex flex-col ${color}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center ${iconColor}`}>
                  {icon}
                </div>
                <span className="text-2xl font-bold text-white/8 font-display">{number}</span>
              </div>
              <h3 className="font-display text-sm font-bold text-white mb-1.5">{title}</h3>
              <p className="text-muted text-xs leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
