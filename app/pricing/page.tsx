import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle, ArrowRight, HelpCircle } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '₹9,999',
    prefix: 'Starting from',
    color: 'border-white/10',
    highlight: false,
    items: ['Landing pages', 'Lead trackers', 'Small websites', 'Basic dashboards'],
  },
  {
    name: 'Growth System',
    price: '₹24,999',
    prefix: 'Starting from',
    color: 'border-primary/35',
    highlight: true,
    badge: 'Most Popular',
    items: ['Positioning', 'Website', 'Lead capture', 'Dashboards', 'Follow-up systems'],
  },
  {
    name: 'Custom Solutions',
    price: "Let's discuss",
    prefix: '',
    color: 'border-white/10',
    highlight: false,
    items: ['Automation', 'Business systems', 'Dashboards', 'Complex workflows'],
  },
]

const faqs = [
  {
    q: 'Do you only build websites?',
    a: 'No. Websites are one part of a growth system.',
  },
  {
    q: 'Is this digital marketing?',
    a: 'No. Fameboat focuses on positioning, visibility, systems, and business workflows.',
  },
  {
    q: 'Can you work with Google Sheets?',
    a: 'Yes. Google Sheets, dashboards, workflows, and automations are used where appropriate.',
  },
  {
    q: 'Is pricing fixed?',
    a: 'No. Pricing depends on requirements.',
  },
  {
    q: 'Who is this best for?',
    a: 'Growing businesses that need better visibility, follow-ups, dashboards, workflows, and systems.',
  },
]

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="py-16 mesh-bg">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="section-badge mb-5">Pricing</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Flexible pricing for
              <span className="gradient-text"> growing businesses.</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Start small. Build together. Grow over time.
            </p>
          </div>
        </section>

        <section className="py-20 mesh-bg">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map(({ name, price, prefix, color, highlight, badge, items }) => (
                <div
                  key={name}
                  className={`glass rounded-2xl border p-8 flex flex-col ${color} ${highlight ? 'bg-primary/5 ring-1 ring-primary/30' : ''}`}
                >
                  {badge && (
                    <div className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/15 text-violet-300 border border-primary/30 mb-4 self-start">
                      {badge}
                    </div>
                  )}
                  <h3 className="font-display text-lg font-bold text-white mb-3">{name}</h3>
                  {prefix && <div className="text-muted text-xs mb-1">{prefix}</div>}
                  <div className="text-3xl font-bold text-white mb-6">{price}</div>

                  <div className="text-muted text-xs font-semibold uppercase tracking-wider mb-3">Suitable for</div>
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle size={13} className={`flex-shrink-0 ${highlight ? 'text-primary' : 'text-green-400'}`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#contact"
                    className={highlight ? 'btn-primary justify-center text-sm' : 'btn-secondary justify-center text-sm'}
                  >
                    Let&apos;s Talk <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-muted text-sm mt-8">
              Every business is different. Solutions are tailored to your requirements.
            </p>
          </div>
        </section>

        <section className="py-20 section-bg border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="section-badge mb-5">FAQ</div>
              <h2 className="font-display text-3xl font-bold text-white">Common questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="glass rounded-2xl border border-white/8 p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <HelpCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <div className="font-semibold text-white text-sm">{q}</div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed pl-7">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 mesh-bg">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-muted mb-8">Tell us about your business. We&apos;ll recommend the right solution.</p>
            <a href="/#contact" className="btn-primary text-base">Let&apos;s Talk <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
