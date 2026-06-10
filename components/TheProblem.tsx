'use client'

import { useEffect, useRef } from 'react'

const problems = [
  {
    icon: '🪞',
    title: 'You look like everyone else',
    desc: 'Your website, your services, your messaging — all sound the same as the 10 other businesses in your space. Customers can\'t tell the difference.',
  },
  {
    icon: '💸',
    title: 'So they pick the cheapest option',
    desc: 'When there\'s no clear difference, price becomes the only differentiator. You end up discounting to win deals you should have won on merit.',
  },
  {
    icon: '🏆',
    title: 'While competitors with better positioning win',
    desc: 'It\'s not that they\'re better at the work. They just communicate their difference more clearly. That\'s the only thing standing between you and them.',
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
    <section ref={ref} id="problem" className="py-24 section-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">The Real Problem</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            You're competing on price
            <br />
            <span className="gradient-text">because nobody sees the difference.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Leads aren't the constraint. The right leads — customers who choose you because of what makes you different — that's what's missing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="glass rounded-2xl p-7 border border-white/8 card-hover reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* The insight */}
        <div className="mt-12 glass rounded-2xl p-8 border border-primary/20 bg-primary/5 text-center reveal">
          <p className="font-serif text-xl md:text-2xl text-white leading-relaxed italic">
            "You're not worse than your competitors. They're just positioned better. Let's change that."
          </p>
        </div>
      </div>
    </section>
  )
}
