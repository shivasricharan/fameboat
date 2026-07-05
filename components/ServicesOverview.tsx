'use client'

import { useEffect, useRef } from 'react'
import { Target, Globe, Eye, Settings, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: <Target size={24} />,
    title: 'Positioning Sprint',
    desc: 'Clarify what you offer, who you serve, and why customers should choose you.',
    color: 'border-primary/30 bg-primary/5',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/15',
    ctaColor: 'text-primary',
  },
  {
    icon: <Globe size={24} />,
    title: 'Growth Website',
    desc: 'Create a clear digital presence that explains your value and captures enquiries.',
    color: 'border-violet-400/30 bg-violet-500/5',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/15',
    ctaColor: 'text-violet-400',
  },
  {
    icon: <Eye size={24} />,
    title: 'Lead Visibility System',
    desc: 'Know where every enquiry comes from, who is handling it, and what needs attention next.',
    color: 'border-accent/30 bg-accent/5',
    iconColor: 'text-accent',
    iconBg: 'bg-accent/15',
    ctaColor: 'text-accent',
  },
  {
    icon: <Settings size={24} />,
    title: 'Dashboards & Automation',
    desc: 'Turn scattered data and repeated tasks into simple workflows and useful business dashboards.',
    color: 'border-green-500/30 bg-green-500/5',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/15',
    ctaColor: 'text-green-400',
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
    <section ref={ref} id="solutions" className="py-16 section-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 reveal">
          <div className="section-badge mb-4">Solutions</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            What we
            <span className="gradient-text"> build.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map(({ icon, title, desc, color, iconColor, iconBg, ctaColor }, i) => (
            <div
              key={title}
              className={`glass rounded-2xl p-6 border card-hover reveal flex flex-col ${color}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center ${iconColor} mb-4 flex-shrink-0`}>
                {icon}
              </div>
              <h3 className="font-display text-base font-bold text-white mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed flex-1 mb-4">{desc}</p>
              <a
                href="#contact"
                className={`inline-flex items-center gap-1 text-xs font-semibold ${ctaColor} opacity-70 hover:opacity-100 transition-opacity`}
              >
                Get started <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
