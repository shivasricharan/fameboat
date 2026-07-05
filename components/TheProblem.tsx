'use client'

import { useEffect, useRef } from 'react'
import { PhoneOff, EyeOff, HelpCircle, XCircle } from 'lucide-react'

const problems = [
  {
    icon: <PhoneOff size={22} />,
    title: 'Lost follow-ups',
    desc: 'Leads slip through because no one tracks who was contacted and when.',
    color: 'text-red-400',
    bg: 'bg-red-500/15',
    border: 'border-red-500/15',
  },
  {
    icon: <EyeOff size={22} />,
    title: 'No visibility',
    desc: 'You don\'t know where leads come from or which channels actually work.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/15',
    border: 'border-amber-500/15',
  },
  {
    icon: <HelpCircle size={22} />,
    title: 'Unclear priorities',
    desc: 'Without data, every lead looks the same. Time gets spent on the wrong ones.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/15',
    border: 'border-blue-500/15',
  },
  {
    icon: <XCircle size={22} />,
    title: 'Missed opportunities',
    desc: 'Enquiries from ads, forms, and referrals go cold before anyone follows up.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/15',
    border: 'border-violet-500/15',
  },
]

export default function TheProblem() {
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
    <section ref={ref} id="problem" className="py-16 section-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10 reveal">
          <div className="section-badge mb-4">The Problem</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Scattered opportunities
            <br />
            <span className="gradient-text">quietly kill growth.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Enquiries come from WhatsApp, referrals, calls, forms, ads, events, and teams. Without a simple system, follow-ups get missed, owners lose visibility, and good opportunities slip away.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map(({ icon, title, desc, color, bg, border }, i) => (
            <div
              key={title}
              className={`glass rounded-2xl p-6 border card-hover reveal flex flex-col ${border}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center ${color} mb-4 flex-shrink-0`}>
                {icon}
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
