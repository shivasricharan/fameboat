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
            <span className="text-white font-semibold">professional websites</span> for architects,
            designers, consultants, clinics, and associations — powered by{' '}
            <span className="text-white font-semibold">Google Sheets</span> so your team manages
            everything without developers or CMS training.
          </p>

          <p className="text-sm text-muted mb-10">
            Architects · Interior Designers · Real Estate · Clinics · Financial Advisors · Associations
          </p>

          {/* Stats pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: <TrendingUp size={16} />, stat: '3x More Leads', sub: 'vs social media only' },
              { icon: <Zap size={16} />, stat: 'Live in 5–7 Days', sub: 'quick turnaround' },
              { icon: <IndianRupee size={16} />, stat: 'From ₹15,000', sub: 'transparent pricing' },
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
      </div>
    </section>
  )
}
