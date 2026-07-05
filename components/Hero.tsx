'use client'

import { ArrowDown, MessageCircle } from 'lucide-react'

const flowSteps = [
  { num: '01', label: 'Discover' },
  { num: '02', label: 'Capture' },
  { num: '03', label: 'Organize' },
  { num: '04', label: 'Automate' },
  { num: '05', label: 'Measure' },
  { num: '06', label: 'Grow' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] mesh-bg flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[140px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-accent/6 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-primary/4 blur-[160px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
        <div
          className="inline-flex items-center gap-2 glass border border-white/10 px-4 py-2 rounded-full mb-8 text-xs font-semibold text-gray-300 uppercase tracking-widest animate-fade-in"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Growth systems for ambitious businesses
        </div>

        <h1
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Simple systems for
          <br />
          <span className="gradient-text">growing businesses.</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          From first enquiry to follow-up, Fameboat helps businesses build simple systems that improve visibility, decisions, and growth.
        </p>

        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-14 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="https://wa.me/919849016794?text=Hi%20Fameboat%2C%20I%20want%20to%20discuss%20a%20growth%20system%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center justify-center gap-2 text-base animate-pulse-glow"
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>
          <a href="#how-it-works" className="btn-secondary text-base">
            See How It Works <ArrowDown size={16} />
          </a>
        </div>

        <div
          className="max-w-3xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          {/* Desktop: 6 columns in one row */}
          <div className="hidden md:grid grid-cols-6 gap-3">
            {flowSteps.map(({ num, label }) => (
              <div
                key={num}
                className="glass rounded-xl p-3 border border-white/10 text-center hover:border-primary/40 hover:bg-primary/5 transition-all group"
              >
                <div className="text-[10px] font-bold text-muted mb-1 group-hover:text-primary transition-colors">{num}</div>
                <div className="text-sm font-semibold text-white">{label}</div>
              </div>
            ))}
          </div>

          {/* Mobile: 2 columns */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {flowSteps.map(({ num, label }) => (
              <div
                key={num}
                className="glass rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3"
              >
                <span className="text-xs font-bold text-muted flex-shrink-0">{num}</span>
                <span className="text-sm font-semibold text-white">{label}</span>
              </div>
            ))}
          </div>

          <p className="text-muted text-xs mt-3 uppercase tracking-wider font-medium">End-to-end growth system</p>
        </div>
      </div>
    </section>
  )
}
