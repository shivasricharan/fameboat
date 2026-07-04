'use client'

import { ArrowDown, MessageCircle } from 'lucide-react'

const flowSteps = ['Positioning', 'Website', 'Leads', 'Follow-up', 'Dashboard', 'Growth']

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] mesh-bg flex items-center pt-24 pb-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4 text-sm font-medium text-gray-300">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          Simple Systems for Growing Businesses
        </div>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4">
          Simple systems for
          <br />
          <span className="gradient-text">growing businesses.</span>
        </h1>

        <p className="text-lg text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
          From first enquiry to follow-up, Fameboat helps businesses build simple systems that improve visibility, decisions, and growth.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href="https://wa.me/919849016794?text=Hi%20Fameboat%2C%20I%20want%20to%20discuss%20a%20growth%20system%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base animate-pulse-glow inline-flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>
          <a href="#how-it-works" className="btn-secondary text-base">
            See How It Works <ArrowDown size={18} />
          </a>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
            {flowSteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="glass rounded-lg px-3 py-2 border border-white/10 text-xs font-semibold text-white hover:border-primary/40 transition-colors">
                  {step}
                </div>
                {i < flowSteps.length - 1 && (
                  <span className="text-primary mx-1 hidden md:block text-sm">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
