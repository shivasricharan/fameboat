'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '₹9,999',
    prefix: 'Starting from',
    items: ['Landing pages', 'Lead trackers', 'Small websites', 'Basic dashboards'],
    color: 'border-white/10',
    highlight: false,
  },
  {
    name: 'Growth System',
    price: '₹24,999',
    prefix: 'Starting from',
    items: ['Positioning', 'Website', 'Lead capture', 'Dashboards', 'Follow-up systems'],
    color: 'border-primary/35',
    highlight: true,
  },
  {
    name: 'Custom Solutions',
    price: 'Let\'s discuss',
    prefix: '',
    items: ['Automation', 'Business systems', 'Dashboards', 'Complex workflows'],
    color: 'border-white/10',
    highlight: false,
  },
]

export default function HomePricing() {
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
    <section ref={ref} id="pricing" className="py-24 section-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">Pricing</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Flexible pricing for
            <span className="gradient-text"> growing businesses.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Start small. Build together. Grow over time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(({ name, price, prefix, items, color, highlight }, i) => (
            <div
              key={name}
              className={`glass rounded-2xl p-8 border card-hover reveal flex flex-col ${color} ${
                highlight ? 'bg-primary/5 ring-1 ring-primary/30' : ''
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className="font-display text-lg font-bold text-white mb-3">{name}</h3>
                {prefix && <div className="text-muted text-xs mb-1">{prefix}</div>}
                <div className="text-3xl font-bold text-white">{price}</div>
              </div>

              <div className="text-muted text-xs font-semibold uppercase tracking-wider mb-3">Suitable for</div>
              <ul className="space-y-2.5 flex-1 mb-8">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <span className={highlight ? 'text-primary' : 'text-muted'}>→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={highlight ? 'btn-primary justify-center text-sm' : 'btn-secondary justify-center text-sm'}
              >
                Let&apos;s Talk <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-muted text-sm mt-8 reveal">
          Every business is different. Solutions are tailored to your requirements.
        </p>
      </div>
    </section>
  )
}
