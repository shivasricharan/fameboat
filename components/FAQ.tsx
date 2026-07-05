'use client'

import { useEffect, useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Do you only build websites?',
    a: 'No. Websites are one part of a growth system. We also build lead tracking systems, dashboards, automations, and business workflows.',
  },
  {
    q: 'Is this digital marketing?',
    a: 'No. Fameboat focuses on positioning, visibility, systems, and business workflows — not ad campaigns or social media management.',
  },
  {
    q: 'Can you work with Google Sheets?',
    a: 'Yes. Google Sheets, dashboards, workflows, and automations are used where they best fit your business.',
  },
  {
    q: 'Is pricing fixed?',
    a: 'No. Pricing depends on your requirements, complexity, and scope. Contact us to get a tailored recommendation.',
  },
  {
    q: 'Who is this best for?',
    a: 'Growing businesses that need better visibility, follow-ups, dashboards, workflows, and systems — especially those where enquiries come in from multiple channels.',
  },
]

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="faq" className="py-16 mesh-bg">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10 reveal">
          <div className="section-badge mb-4">FAQ</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Common questions
          </h2>
        </div>

        <div className="space-y-2 reveal">
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              className="glass rounded-2xl border border-white/8 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-white text-sm">{q}</span>
                <span className="flex-shrink-0 text-muted transition-transform duration-200">
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <div className="border-t border-white/5 pt-3">
                    <p className="text-muted text-sm leading-relaxed">{a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
