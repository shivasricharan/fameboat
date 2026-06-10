import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Search, Lightbulb, Palette, TrendingUp, ArrowRight } from 'lucide-react'

const phases = [
  {
    icon: <Search size={28} />,
    phase: 'Phase 1',
    title: 'Discover',
    duration: 'Weeks 1–2',
    color: 'border-primary/30 bg-primary/5',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/15',
    items: [
      'Founder interview — understand your expertise and unique angle',
      'Customer interviews — why do your best customers choose you?',
      'Competitive analysis — what are competitors claiming?',
      'Market research — what\'s working in your category?',
    ],
    deliverable: 'Positioning brief — this is your position, here\'s why it works',
  },
  {
    icon: <Lightbulb size={28} />,
    phase: 'Phase 2',
    title: 'Position',
    duration: 'Week 3',
    color: 'border-violet-500/30 bg-violet-500/5',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/15',
    items: [
      'Define your unique market position (who you serve, what problem, why different)',
      'Create messaging framework (elevator pitch, service descriptions, proof points)',
      'Build visual brand guidelines (colors, fonts, tone, visual approach)',
      'Competitive differentiation summary',
    ],
    deliverable: 'Positioning playbook — everything you need to communicate your difference',
  },
  {
    icon: <Palette size={28} />,
    phase: 'Phase 3',
    title: 'Implement',
    duration: 'Weeks 4–8',
    color: 'border-accent/30 bg-accent/5',
    iconColor: 'text-accent',
    iconBg: 'bg-accent/15',
    items: [
      'Website design + build (modern, fast, position-aligned)',
      'Copy every page to communicate your difference',
      'Email capture + nurture sequences',
      'SEO setup — show up for searches that matter',
    ],
    deliverable: 'Live website + email system ready to convert',
  },
  {
    icon: <TrendingUp size={28} />,
    phase: 'Phase 4',
    title: 'Grow',
    duration: 'Ongoing',
    color: 'border-green-500/30 bg-green-500/5',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/15',
    items: [
      'Content strategy (blog, LinkedIn, email showing your expertise)',
      'Paid ads targeting ideal customers only',
      'Monthly performance reports',
      'Optimization — what\'s converting, what needs adjustment',
    ],
    deliverable: 'Consistent lead flow from right customers',
  },
]

export default function HowWeWork() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        {/* Header */}
        <section className="py-16 mesh-bg">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="section-badge mb-5">The Process</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Strategy to execution
              <span className="gradient-text"> to results.</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              We don't start building until we understand your market. Positioning-first means your website and marketing say <em className="text-white">why you</em> before asking people to decide.
            </p>
          </div>
        </section>

        {/* Philosophy callout */}
        <section className="py-8 section-bg border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { label: 'Positioning is permanent', sub: 'Marketing is temporary. Get the foundation right.' },
                { label: 'Strategy prevents waste', sub: 'We don\'t build randomly. Every element serves a purpose.' },
                { label: 'Results = revenue', sub: 'Not traffic. Not followers. Actual business impact.' },
              ].map(({ label, sub }) => (
                <div key={label}>
                  <div className="text-white font-semibold text-sm mb-1">{label}</div>
                  <div className="text-muted text-sm">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phases */}
        <section className="py-20 mesh-bg">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            {phases.map(({ icon, phase, title, duration, color, iconColor, iconBg, items, deliverable }) => (
              <div key={phase} className={`glass rounded-2xl border p-8 ${color}`}>
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center ${iconColor} flex-shrink-0`}>
                    {icon}
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${iconColor}`}>{phase} · {duration}</div>
                    <h2 className="font-display text-2xl font-bold text-white">{title}</h2>
                  </div>
                </div>
                <ul className="grid md:grid-cols-2 gap-3 mb-6">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <span className={`mt-1 flex-shrink-0 ${iconColor}`}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="glass rounded-xl px-4 py-3 border border-white/8 text-sm">
                  <span className="text-muted">Deliverable: </span>
                  <span className="text-white font-medium">{deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 section-bg">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to start?</h2>
            <p className="text-muted mb-8">Book a free 30-minute call. We'll assess your market and tell you exactly what needs to change.</p>
            <a href="/#contact" className="btn-primary text-base">Book Positioning Call <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
