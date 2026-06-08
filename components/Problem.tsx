'use client'

import { useEffect, useRef } from 'react'
import { Instagram, AlertTriangle, TrendingDown, IndianRupee } from 'lucide-react'

const problems = [
  {
    icon: <TrendingDown size={22} />,
    title: 'Outdated or No Website',
    desc: 'Clients check you online before calling. An old or missing website loses you business silently.',
  },
  {
    icon: <AlertTriangle size={22} />,
    title: 'Dependent on Developers',
    desc: 'Every small update — new service, changed fee, event info — needs a developer and days of waiting.',
  },
  {
    icon: <Instagram size={22} />,
    title: 'Everything Is Manual',
    desc: 'Registrations on WhatsApp. Payments in notebooks. Follow-ups in Excel. It breaks at scale.',
  },
  {
    icon: <IndianRupee size={22} />,
    title: 'No Right-Sized Partner',
    desc: 'Agencies charge ₹50K–2L/month. Freelancers vanish after delivery. There\'s no partner built for serious professionals.',
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
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">The Problem</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Your Practice Is Professional.
            <br />
            <span className="gradient-text">Your Website Should Be Too.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Most professionals and service businesses are stuck with the same four problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="glass rounded-2xl p-6 border border-white/8 card-hover reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                {icon}
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
