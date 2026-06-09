'use client'

import { useEffect, useRef } from 'react'
import { Check, X, Minus } from 'lucide-react'

const rows = [
  { label: 'Founder-led work (not account managers)', fameboat: true, agency: false, freelancer: 'maybe' },
  { label: 'Strategy before execution', fameboat: true, agency: 'sometimes', freelancer: false },
  { label: 'Results measured in revenue', fameboat: true, agency: false, freelancer: false },
  { label: 'Transparent, fixed pricing', fameboat: true, agency: false, freelancer: 'sometimes' },
  { label: 'Fast turnaround (weeks, not months)', fameboat: true, agency: false, freelancer: 'sometimes' },
  { label: 'You own all assets (no lock-in)', fameboat: true, agency: false, freelancer: true },
  { label: 'Consistent quality + accountability', fameboat: true, agency: true, freelancer: false },
  { label: 'Affordable for service businesses', fameboat: true, agency: false, freelancer: true },
]

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={18} className="text-green-400 mx-auto" />
  if (value === false) return <X size={18} className="text-red-400/70 mx-auto" />
  return <Minus size={18} className="text-muted mx-auto" />
}

export default function WhyFameboat() {
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
    <section ref={ref} className="py-24 mesh-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">Why Fameboat</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Not Another Agency.
            <span className="gradient-text"> Not a Freelancer.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Typical agencies have overhead baked in and hand you to junior staff.
            Freelancers are cheap but inconsistent. Fameboat is the middle ground that doesn't compromise.
          </p>
        </div>

        <div className="glass rounded-2xl border border-white/10 overflow-hidden reveal">
          {/* Header */}
          <div className="grid grid-cols-4 border-b border-white/8">
            <div className="p-5 col-span-1" />
            <div className="p-5 text-center border-l border-white/8">
              <div className="text-xs text-muted uppercase tracking-wider mb-1">Typical Agency</div>
              <div className="text-muted text-sm">High overhead, junior staff</div>
            </div>
            <div className="p-5 text-center border-l border-white/8">
              <div className="text-xs text-muted uppercase tracking-wider mb-1">Freelancer</div>
              <div className="text-muted text-sm">Cheap, no strategy</div>
            </div>
            <div className="p-5 text-center border-l border-primary/20 bg-primary/5">
              <div className="text-xs text-primary uppercase tracking-wider font-bold mb-1">Fameboat</div>
              <div className="text-white text-sm font-semibold">Founder-led, results first</div>
            </div>
          </div>

          {/* Rows */}
          {rows.map(({ label, fameboat, agency, freelancer }, i) => (
            <div
              key={label}
              className={`grid grid-cols-4 border-b border-white/5 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}
            >
              <div className="p-4 col-span-1 text-sm text-gray-300 flex items-center">{label}</div>
              <div className="p-4 border-l border-white/5 flex items-center justify-center">
                <Cell value={agency} />
              </div>
              <div className="p-4 border-l border-white/5 flex items-center justify-center">
                <Cell value={freelancer} />
              </div>
              <div className="p-4 border-l border-primary/15 bg-primary/[0.03] flex items-center justify-center">
                <Cell value={fameboat} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a href="#contact" className="btn-primary text-base animate-pulse-glow">
            Work With Fameboat →
          </a>
        </div>
      </div>
    </section>
  )
}
