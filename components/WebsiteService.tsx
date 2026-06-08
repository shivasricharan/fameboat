'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const useCases = [
  {
    emoji: '📥',
    title: 'Enquiries & Lead Capture',
    desc: 'Visitor fills your contact form → saved instantly to your Google Sheet → you get notified. No CRM. No missed leads.',
    color: 'border-primary/25 bg-primary/8',
  },
  {
    emoji: '🎫',
    title: 'Event Registration & Payments',
    desc: 'Registrant submits form + payment screenshot → your team marks as Verified in Sheet → automated confirmation email fires instantly.',
    color: 'border-secondary/25 bg-secondary/8',
  },
  {
    emoji: '📺',
    title: 'Content & CMS Updates',
    desc: 'Add a video URL, new listing, or blog post to your Google Sheet → website refreshes automatically. Your team is the CMS.',
    color: 'border-accent/25 bg-accent/8',
  },
]

export default function WebsiteService() {
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
    <section ref={ref} id="services" className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">How It Works</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Your Website in Front.
            <span className="gradient-text"> Google Sheets Behind.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We design and build the website. Google Sheets becomes the operating system behind it.
            Your team manages everything — updates, registrations, automations — without touching a single line of code.
          </p>
        </div>

        {/* Use case cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 reveal">
          {useCases.map(({ emoji, title, desc, color }) => (
            <div key={title} className={`glass rounded-2xl p-7 border card-hover ${color}`}>
              <div className="text-4xl mb-4">{emoji}</div>
              <h3 className="font-display text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Visual flow */}
        <div className="glass rounded-2xl border border-white/10 overflow-hidden reveal">
          <div className="px-6 py-4 border-b border-white/8 flex items-center gap-3">
            <span className="text-green-400 text-sm font-bold">📋 Google Sheet — Live Backend</span>
            <span className="text-xs text-muted ml-auto">Auto-updates in real time</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/5">
                  {['Timestamp', 'Name', 'Type', 'Status', 'Action Taken'].map((h) => (
                    <th key={h} className="px-5 py-3 text-left text-muted font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Today 9:12am', 'Swetha R.', 'Enquiry', '🟡 New', 'Notified via email'],
                  ['Today 8:45am', 'Arun M.', 'Event Registration', '✅ Verified', 'Confirmation email sent'],
                  ['Yest. 6:30pm', 'Priya K.', 'Content Update', '✅ Live', 'Website refreshed'],
                  ['Yest. 3:00pm', 'Rahul S.', 'Event Registration', '❌ Rejected', 'Rejection email sent'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/4">
                    {row.map((cell, j) => (
                      <td key={j} className="px-5 py-3 text-muted">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-10 reveal">
          <p className="text-muted text-sm mb-5">
            No CRM subscriptions. No developer calls. No technical training. Just a Google Sheet your team already knows.
          </p>
          <a href="#contact" className="btn-primary text-base animate-pulse-glow">
            See How This Works for Your Business <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
