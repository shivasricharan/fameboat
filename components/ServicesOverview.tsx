'use client'

import { useEffect, useRef } from 'react'
import { Target, Globe, Eye, Settings } from 'lucide-react'

const solutions = [
  {
    icon: <Target size={26} />,
    title: 'Positioning Sprint',
    desc: 'Clarify your audience, message, offer, and market position.',
    color: 'border-primary/30 bg-primary/5',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/15',
  },
  {
    icon: <Globe size={26} />,
    title: 'Growth Website',
    desc: 'Websites that explain your business and generate opportunities.',
    color: 'border-violet-400/30 bg-violet-500/5',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/15',
  },
  {
    icon: <Eye size={26} />,
    title: 'Lead Visibility System',
    desc: 'Track leads, stages, owners, follow-ups, and conversion gaps.',
    color: 'border-accent/30 bg-accent/5',
    iconColor: 'text-accent',
    iconBg: 'bg-accent/15',
  },
  {
    icon: <Settings size={26} />,
    title: 'Dashboards & Automation',
    desc: 'Simple business systems using dashboards, Google Sheets, workflows, and automation.',
    color: 'border-green-500/30 bg-green-500/5',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/15',
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
    <section ref={ref} id="solutions" className="py-24 section-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">Solutions</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            What we
            <span className="gradient-text"> build.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map(({ icon, title, desc, color, iconColor, iconBg }, i) => (
            <div
              key={title}
              className={`glass rounded-2xl p-8 border card-hover reveal flex flex-col ${color}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`w-13 h-13 w-[52px] h-[52px] rounded-xl ${iconBg} flex items-center justify-center ${iconColor} mb-5`}>
                {icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-muted text-sm leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
