'use client'

import { useEffect, useRef } from 'react'
import { Instagram, AlertTriangle, TrendingDown, IndianRupee, X, Check } from 'lucide-react'

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-6 reveal">
          <div className="glass rounded-2xl p-8 border border-red-500/20">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                <X size={12} className="text-red-400" />
              </div>
              <span className="font-bold text-red-400 uppercase text-xs tracking-wider">
                Without Fameboat
              </span>
            </div>
            <ul className="space-y-3">
              {[
                'Outdated or nonexistent online presence',
                'Every website change needs a developer',
                'Registrations and follow-ups done manually',
                'Paying agencies who don\'t understand your business',
                'Losing clients to competitors who look better online',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <X size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="gradient-border-card p-8">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check size={12} className="text-green-400" />
              </div>
              <span className="font-bold text-green-400 uppercase text-xs tracking-wider">
                With Fameboat
              </span>
            </div>
            <ul className="space-y-3">
              {[
                'Professional website that reflects your expertise',
                'Your team updates everything via Google Sheets',
                'Registrations, payments, emails — fully automated',
                'A long-term partner who knows your business',
                'Clients find you, trust you, and choose you',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white">
                  <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
