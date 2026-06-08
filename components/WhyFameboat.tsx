'use client'

import { useEffect, useRef } from 'react'
import { Award, MapPin, Cpu, Table2, IndianRupee, HeartHandshake } from 'lucide-react'

const reasons = [
  {
    icon: <Award size={22} />,
    title: '20 Years of Marketing Experience',
    desc: 'Not a freelancer who learned from YouTube. Two decades of ATL, BTL, digital, and brand strategy across industries.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Hyderabad-Based, Hyderabad-Focused',
    desc: 'We know Banjara Hills customers are different from Kukatpally customers. Local market knowledge is our unfair advantage.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: <Cpu size={22} />,
    title: 'AI-Powered, Human-Led',
    desc: 'AI tools help us move faster and smarter — but every strategy, every piece of content, is guided by real marketing expertise.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: <Table2 size={22} />,
    title: 'Google Sheets as Your CRM',
    desc: "No expensive CRM subscriptions. Your leads live in a Google Sheet you already know how to use. Simple, free, forever yours.",
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: <IndianRupee size={22} />,
    title: 'Prices Made for India',
    desc: 'Agency quality at a price local businesses can actually afford. We want long-term partnerships, not one-time transactions.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: <HeartHandshake size={22} />,
    title: 'You Deal with One Person',
    desc: "No account managers, no handoffs. You talk directly to someone who cares about your business and knows it inside out.",
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
  },
]

export default function WhyFameboat() {
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
    <section ref={ref} className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">Why Fameboat</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            We're Not Another Agency.
            <br />
            <span className="gradient-text">We're Your Marketing Partner.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            The difference between us and everyone else isn't tools or templates — it's care,
            context, and commitment to your actual results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon, title, desc, color, bg }, i) => (
            <div
              key={title}
              className="glass rounded-2xl p-7 border border-white/8 card-hover reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center ${color} mb-5`}>
                {icon}
              </div>
              <h3 className="font-semibold text-white mb-2 text-base leading-tight">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
