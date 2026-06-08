'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Database, Smartphone, Zap, Shield, BarChart2, Globe } from 'lucide-react'

const features = [
  { icon: <Globe size={18} />, label: 'Custom domain + hosting' },
  { icon: <Database size={18} />, label: 'Leads → Google Sheets auto-sync' },
  { icon: <Smartphone size={18} />, label: 'Mobile-first, SEO-ready' },
  { icon: <Zap size={18} />, label: 'Fast load — under 2 seconds' },
  { icon: <BarChart2 size={18} />, label: 'Analytics + Google My Business' },
  { icon: <Shield size={18} />, label: 'SSL, security, monthly maintenance' },
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
          <div className="section-badge mb-5">Core Service</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            A Lead Machine.
            <span className="gradient-text"> Not Just a Website.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We design, build, and launch your website in 5–7 days. Every enquiry goes
            straight into your Google Sheet — no CRM subscriptions, no technical hassle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: How it works visually */}
          <div className="reveal">
            <div className="glass rounded-2xl p-6 border border-white/10">
              {/* Flow diagram */}
              <div className="text-center mb-6 text-xs font-bold text-muted uppercase tracking-wider">
                How Your Leads Flow
              </div>
              <div className="space-y-3">
                {[
                  {
                    step: '1',
                    label: 'Visitor lands on your website',
                    color: 'bg-secondary/15 border-secondary/25 text-secondary',
                    icon: '🌐',
                  },
                  {
                    step: '2',
                    label: 'They fill a simple contact/booking form',
                    color: 'bg-accent/15 border-accent/25 text-accent',
                    icon: '📝',
                  },
                  {
                    step: '3',
                    label: 'Lead instantly saved to Google Sheets',
                    color: 'bg-green-500/15 border-green-500/25 text-green-400',
                    icon: '📊',
                  },
                  {
                    step: '4',
                    label: 'You get notified — call them, close the deal',
                    color: 'bg-primary/15 border-primary/25 text-primary',
                    icon: '📞',
                  },
                ].map(({ step, label, color, icon }, i) => (
                  <div key={step}>
                    <div className={`glass px-4 py-3 rounded-xl border flex items-center gap-3 ${color}`}>
                      <span className="text-lg">{icon}</span>
                      <div>
                        <div className="text-xs text-muted">Step {step}</div>
                        <div className="text-sm font-semibold text-white">{label}</div>
                      </div>
                    </div>
                    {i < 3 && (
                      <div className="flex justify-center my-1">
                        <ArrowRight size={14} className="text-muted rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Sample sheet preview */}
              <div className="mt-6 rounded-xl overflow-hidden border border-white/8">
                <div className="bg-green-900/20 border-b border-white/8 px-4 py-2 flex items-center gap-2">
                  <span className="text-green-400 text-sm">📋</span>
                  <span className="text-xs font-bold text-green-400">Your Google Sheet — Live Leads</span>
                </div>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/5">
                      {['Date', 'Name', 'Phone', 'Service', 'Message'].map((h) => (
                        <th key={h} className="px-3 py-2 text-left text-muted font-medium">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Today', 'Raj S.', '98xxxxxxxx', 'Website', 'Need urgent...'],
                      ['Today', 'Priya R.', '87xxxxxxxx', 'Marketing', 'Want to grow...'],
                      ['Yest.', 'Ahmed K.', '97xxxxxxxx', 'Branding', 'Starting new...'],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/4 hover:bg-white/2">
                        {row.map((cell, j) => (
                          <td key={j} className="px-3 py-2 text-muted">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right: Feature list */}
          <div className="space-y-5 reveal">
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Everything included. Zero surprises.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map(({ icon, label }) => (
                <div
                  key={label}
                  className="glass rounded-xl px-4 py-3.5 border border-white/8 flex items-center gap-3 card-hover"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {icon}
                  </div>
                  <span className="text-sm text-white font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 border border-primary/20 mt-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-white text-lg">Starter Website</span>
                <span className="text-2xl font-bold text-primary">₹8,999</span>
              </div>
              <p className="text-muted text-sm mb-4">
                Professional 5-page website · Google Sheets lead capture · Mobile-first · Live in 5–7 days
              </p>
              <a href="#contact" className="btn-primary w-full justify-center">
                Start Your Website <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Social proof strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          {[
            { stat: '5–7 Days', label: 'Avg delivery time' },
            { stat: '₹0', label: 'Monthly CRM cost' },
            { stat: '100%', label: 'Mobile optimised' },
            { stat: '24/7', label: 'Leads captured auto' },
          ].map(({ stat, label }) => (
            <div key={label} className="glass rounded-2xl p-5 border border-white/8 text-center">
              <div className="text-2xl font-bold gradient-text mb-1">{stat}</div>
              <div className="text-muted text-xs">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
