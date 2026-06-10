import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

const beliefs = [
  {
    title: 'Positioning is permanent. Marketing is temporary.',
    body: 'Ads stop when you stop paying. Content gets buried. But a clear market position compounds — every piece of marketing gets easier once people understand what makes you different.',
  },
  {
    title: 'Strategy prevents waste.',
    body: 'Most businesses spend on marketing before they know what to say. We reverse that. Understand your position first, then build. Every rupee works harder.',
  },
  {
    title: 'The goal is revenue, not metrics.',
    body: 'Traffic, impressions, and followers are not outcomes. Customers who pay, stay, and refer — that\'s the measure. We build toward that.',
  },
  {
    title: 'Simple beats clever.',
    body: 'The clearest message wins. Not the most creative, the most expensive, or the most viral. We\'d rather you communicate simply and consistently than impress once and confuse always.',
  },
]

const built = [
  {
    name: 'IIA Hyderabad',
    category: 'Architecture & Design',
    what: 'Positioning and digital presence for the Indian Institute of Architects, Hyderabad chapter.',
  },
  {
    name: 'Metro TV',
    category: 'Media',
    what: 'Brand and online presence for a regional media channel.',
  },
]

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        {/* Header */}
        <section className="py-16 mesh-bg">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="section-badge mb-5">About</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Positioning first.
              <span className="gradient-text"> Growth second.</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              We're a small, focused team helping Indian service businesses stand out from competitors — by building on strategy, not assumptions.
            </p>
          </div>
        </section>

        {/* What we do — brief */}
        <section className="py-16 section-bg border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-4">What we do</h2>
                <p className="text-muted leading-relaxed mb-4">
                  Most service businesses look identical to their competitors online. Same language, same promises, same generic website. When everything looks the same, customers default to price.
                </p>
                <p className="text-muted leading-relaxed">
                  We fix that. Through positioning strategy, a website that communicates your actual difference, and ongoing growth work — we help you attract the right customers at the right price.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  'Hyderabad-based, serving all of India',
                  'Positioning-first approach',
                  'Service businesses only — we go deep, not wide',
                  'Strategy + execution under one roof',
                ].map((item) => (
                  <div key={item} className="glass rounded-xl px-4 py-3 border border-white/8 text-sm text-gray-300 flex items-center gap-2.5">
                    <span className="text-primary">→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beliefs */}
        <section className="py-20 mesh-bg">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="section-badge mb-5">What We Believe</div>
              <h2 className="font-display text-3xl font-bold text-white">
                The principles behind
                <span className="gradient-text"> everything we build</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {beliefs.map(({ title, body }) => (
                <div key={title} className="glass rounded-2xl border border-white/8 p-7">
                  <h3 className="font-display text-lg font-bold text-white mb-3">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we've built */}
        <section className="py-16 section-bg border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <div className="section-badge mb-5">Work</div>
              <h2 className="font-display text-2xl font-bold text-white">What we've worked on</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {built.map(({ name, category, what }) => (
                <div key={name} className="glass rounded-2xl border border-white/8 p-6">
                  <div className="text-xs font-bold text-muted uppercase tracking-wider mb-2">{category}</div>
                  <div className="font-display text-lg font-bold text-white mb-2">{name}</div>
                  <p className="text-muted text-sm">{what}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serif pull quote */}
        <section className="py-16 mesh-bg">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <blockquote className="font-serif text-2xl md:text-3xl text-white/80 italic leading-relaxed mb-6">
              "The goal isn't to be the loudest. It's to be the most relevant — to the right people."
            </blockquote>
            <p className="text-muted text-sm">The thinking behind every engagement</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 section-bg border-t border-white/5">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Work with us</h2>
            <p className="text-muted mb-8">Book a free 30-minute positioning call. We'll assess your market and tell you honestly what will move the needle.</p>
            <a href="/#contact" className="btn-primary text-base">Book Positioning Call <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
