'use client'

import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen mesh-bg flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 text-sm font-medium text-gray-300">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Website live in 5–7 days
        </div>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
          Your Business Deserves
          <br />
          <span className="gradient-text">a Proper Website.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          We build websites for service businesses and help you market them.
          Simple, affordable, and delivered fast.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="btn-primary text-base animate-pulse-glow">
            Get a Free Consultation <ArrowRight size={18} />
          </a>
          <a href="#case-studies" className="btn-secondary text-base">
            See Our Work
          </a>
        </div>

        <p className="text-muted text-xs mt-5">
          No commitment · 30-minute call · We handle everything
        </p>
      </div>
    </section>
  )
}
