'use client'

import { useEffect, useRef } from 'react'
import { Instagram, AlertTriangle, TrendingDown, DollarSign, X, Check } from 'lucide-react'

const problems = [
  {
    icon: <Instagram size={22} />,
    title: 'Algorithm Dependency',
    desc: 'Instagram can shadowban you overnight. One algorithm update and your reach drops 70%. You have zero control.',
  },
  {
    icon: <TrendingDown size={22} />,
    title: 'No Lead Capture',
    desc: "Followers see your post, but where do they go? There's no form, no CTA, no way to capture serious buyers.",
  },
  {
    icon: <AlertTriangle size={22} />,
    title: 'You Don\'t Own Anything',
    desc: 'Your Instagram account isn\'t yours. The platform owns it. A website is your digital real estate — forever.',
  },
  {
    icon: <DollarSign size={22} />,
    title: 'Agencies Are Expensive',
    desc: 'Agencies charge ₹50K–2L/month. Freelancers disappear. DIY tools overwhelm. There\'s no middle ground.',
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
            Running a Business on Instagram Alone
            <br />
            <span className="gradient-text">is a Ticking Time Bomb.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Most local businesses in Hyderabad have no website, no lead system, and zero marketing
            strategy. They're one algorithm change away from invisibility.
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
                'Only Instagram, no owned digital presence',
                'Visitors come and go, nothing captured',
                'Paying for posts with no measurable ROI',
                'Competing on price because brand is weak',
                'Spending hours creating content with no strategy',
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
                'Professional website you own, forever',
                'Every visitor can become a captured lead',
                'Leads auto-saved to your Google Sheet daily',
                'Clear brand that commands trust and premium price',
                'AI-powered content & strategy without the agency price',
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
