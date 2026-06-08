'use client'

import { useEffect, useRef } from 'react'
import { Instagram, AlertTriangle, TrendingDown, IndianRupee } from 'lucide-react'

const problems = [
  {
    icon: <TrendingDown size={22} />,
    title: 'Outdated Online Presence',
    desc: 'Clients check your website before calling. If it looks old or unprofessional, they move on — silently. First impressions online are final.',
  },
  {
    icon: <AlertTriangle size={22} />,
    title: 'Stuck Waiting for Developers',
    desc: 'Every small change — a new service, updated fee, event info — means calling a developer and waiting days. You should not need tech support to run your own business.',
  },
  {
    icon: <Instagram size={22} />,
    title: 'Manual, Messy Operations',
    desc: 'Registrations on WhatsApp. Follow-ups in Excel. Payments tracked in a notebook. Everything is manual, error-prone, and exhausting at scale.',
  },
  {
    icon: <IndianRupee size={22} />,
    title: 'Agencies Are Expensive',
    desc: 'Full-service agencies charge ₹50K–2L/month. Freelancers disappear after delivery. There is no right-sized partner for serious professionals.',
  },
]

export default function Problem() {
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
    <section ref={ref} className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">The Problem</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Your Practice Is Professional.
            <br />
            <span className="gradient-text">Your Website Should Be Too.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Most professionals and service businesses have an outdated website — or none at all.
            The ones who fix it first win the clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="glass rounded-2xl p-6 border border-white/8 card-hover reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                {icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
