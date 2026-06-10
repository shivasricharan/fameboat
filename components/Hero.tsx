'use client'

import { ArrowRight, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen mesh-bg flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 text-sm font-medium text-gray-300">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          Positioning First. Growth Second.
        </div>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4">
          Why your competitors
          <br />
          <span className="gradient-text">are winning.</span>
        </h1>

        <p className="font-display text-xl md:text-2xl text-gray-400 mb-6 font-medium">
          And how we change that.
        </p>

        <p className="text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Most service businesses look identical to their competitors.
          Customers can't tell the difference — so they pick the cheaper one.
          We fix that.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a href="#contact" className="btn-primary text-base animate-pulse-glow">
            Book Positioning Call <ArrowRight size={18} />
          </a>
          <a href="#problem" className="btn-secondary text-base">
            See the Difference <ArrowDown size={18} />
          </a>
        </div>

        {/* Positioning comparison teaser */}
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
          <div className="glass rounded-2xl p-5 border border-red-500/20 bg-red-500/5">
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3">Generic positioning</div>
            <p className="text-white font-semibold text-sm mb-1">"Full-service interior design"</p>
            <p className="text-muted text-xs">Looks like every other designer. Competes on price.</p>
          </div>
          <div className="glass rounded-2xl p-5 border border-primary/30 bg-primary/5">
            <div className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3">Clear positioning</div>
            <p className="text-white font-semibold text-sm mb-1">"Luxury home renovation for busy professionals"</p>
            <p className="text-muted text-xs">Attracts a specific customer. Commands premium prices.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
