'use client'

import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen mesh-bg flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-secondary/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent/6 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 text-sm font-medium text-gray-300">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Founder-led · Strategy first · Results measured in revenue
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Your In-House Growth Team.
            <br />
            <span className="gradient-text">Without the Overhead.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
            We design, build, and market your digital presence. Then we{' '}
            <span className="text-white font-semibold">optimize it until it makes money.</span>
          </p>

          <p className="text-sm text-muted mb-10">
            Interior Design · Real Estate · Coaching · Clinics · Associations · Professional Services
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: <TrendingUp size={16} />, stat: '20 Years Experience', sub: 'marketing & branding' },
              { icon: <Clock size={16} />, stat: 'Live in 5–7 Days', sub: 'for websites' },
              { icon: <Users size={16} />, stat: 'Founder-Led', sub: 'you work with Shiva' },
            ].map(({ icon, stat, sub }) => (
              <div key={stat} className="glass px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/8">
                <span className="text-primary">{icon}</span>
                <div className="text-left">
                  <div className="text-white font-bold text-sm leading-tight">{stat}</div>
                  <div className="text-muted text-xs">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn-primary text-base animate-pulse-glow">
              Let's Talk About Growth <ArrowRight size={18} />
            </a>
            <a href="#case-studies" className="btn-secondary text-base">
              See Our Work
            </a>
          </div>

          <p className="text-muted text-xs mt-5">
            Free 30-minute strategy call · No obligation · Honest assessment
          </p>
        </div>
      </div>
    </section>
  )
}
