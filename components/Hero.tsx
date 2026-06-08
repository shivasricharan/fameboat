'use client'

import { ArrowRight, TrendingUp, Zap, IndianRupee } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen mesh-bg flex items-center pt-24 pb-16 overflow-hidden">
      {/* Blurred orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-secondary/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent/8 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 text-sm font-medium text-gray-300">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Helping businesses go online in 5–7 days
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Your Business Deserves
            <br />
            <span className="gradient-text">More Than a Social Media Profile.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
            Fameboat builds{' '}
            <span className="text-white font-semibold">lead-capturing websites</span> for any
            business ready to grow online — leads flow straight into{' '}
            <span className="text-white font-semibold">your Google Sheet</span>, no tech skills
            needed. Powered by 20 years of marketing + AI.
          </p>

          <p className="text-sm text-muted mb-10">
            Cafes · Clinics · Retail · Real Estate · Salons · Coaching Centres
          </p>

          {/* Stats pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: <TrendingUp size={16} />, stat: '3x More Leads', sub: 'vs social media only' },
              { icon: <Zap size={16} />, stat: 'Live in 5–7 Days', sub: 'quick turnaround' },
              { icon: <IndianRupee size={16} />, stat: 'From ₹8,999', sub: 'transparent pricing' },
            ].map(({ icon, stat, sub }) => (
              <div
                key={stat}
                className="glass px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/8"
              >
                <span className="text-primary">{icon}</span>
                <div className="text-left">
                  <div className="text-white font-bold text-sm leading-tight">{stat}</div>
                  <div className="text-muted text-xs">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn-primary text-base animate-pulse-glow">
              Get Your Free Strategy Call <ArrowRight size={18} />
            </a>
            <a href="#pricing" className="btn-secondary text-base">
              See Packages & Pricing
            </a>
          </div>

          <p className="text-muted text-xs mt-5">
            No commitment · 30-minute call · We handle everything
          </p>
        </div>

        {/* Mock website + leads dashboard */}
        <div className="mt-20 max-w-4xl mx-auto relative animate-fade-in">
          <div className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/8">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4 bg-white/5 rounded-md px-4 py-1.5 text-xs text-muted flex items-center gap-2">
                <span className="text-green-400">🔒</span>
                yourbusiness.fameboat.com
              </div>
            </div>

            {/* Content */}
            <div className="p-6 grid md:grid-cols-3 gap-6">
              {/* Mock website preview */}
              <div className="md:col-span-2 space-y-3">
                <div
                  className="h-9 rounded-lg w-3/4"
                  style={{ background: 'linear-gradient(135deg, rgba(255,92,56,0.3), rgba(123,47,255,0.25))' }}
                />
                <div className="h-3 bg-white/5 rounded w-full" />
                <div className="h-3 bg-white/5 rounded w-5/6" />
                <div className="h-3 bg-white/5 rounded w-4/6" />
                <div className="mt-5 flex gap-3">
                  <div className="h-10 w-32 rounded-lg bg-primary/25 border border-primary/40 flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">Book Now</span>
                  </div>
                  <div className="h-10 w-28 rounded-lg bg-white/5 border border-white/10" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-20 rounded-lg bg-white/4 border border-white/5" />
                  ))}
                </div>
              </div>

              {/* Live leads panel */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-muted uppercase tracking-wider mb-3">
                  Live Leads → Google Sheet
                </div>
                {[
                  { name: 'Raj Sharma', time: '2 min ago', service: 'Website' },
                  { name: 'Priya Reddy', time: '14 min ago', service: 'Marketing' },
                  { name: 'Ahmed Khan', time: '1 hr ago', service: 'Branding' },
                  { name: 'Kavitha S.', time: '3 hr ago', service: 'Website' },
                ].map(({ name, time, service }, i) => (
                  <div
                    key={i}
                    className="glass px-3 py-2.5 rounded-xl border border-green-500/15 flex items-start gap-2"
                  >
                    <span className="w-2 h-2 mt-1 rounded-full bg-green-400 flex-shrink-0" />
                    <div>
                      <div className="text-white text-xs font-semibold">{name}</div>
                      <div className="text-muted text-[11px]">
                        {service} · {time}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-muted border-t border-white/5 pt-3">
                  <span className="text-green-400">↗</span> Auto-saved to Google Sheets
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full text-sm font-bold text-green-400 border border-green-500/30 animate-float shadow-lg">
            ✓ Your leads, your data
          </div>
          <div
            className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full text-sm font-bold text-primary border border-primary/30 animate-float shadow-lg"
            style={{ animationDelay: '1.2s' }}
          >
            ₹8,999 onwards
          </div>
        </div>
      </div>
    </section>
  )
}
