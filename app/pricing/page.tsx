import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle, ArrowRight, HelpCircle } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Positioning Strategy',
    price: '₹30,000',
    priceTo: '₹50,000',
    period: 'one-time',
    href: '/services#positioning',
    color: 'border-primary/30',
    highlight: false,
    items: [
      'Founder + customer interviews',
      'Competitor + market research',
      'Positioning statement',
      'Messaging framework',
      'Brand guidelines',
      'Positioning playbook',
    ],
  },
  {
    name: 'Full Positioning Bundle',
    price: '₹50,000',
    priceTo: null,
    period: 'one-time · best value',
    href: '/#contact',
    color: 'border-accent/40',
    highlight: true,
    badge: 'Best Value',
    items: [
      'Everything in Positioning Strategy',
      'Modern positioned website',
      'Copy for every page',
      'Email capture + sequences',
      'SEO fundamentals',
      '1 year hosting',
      'Launch support',
    ],
  },
  {
    name: 'Positioned Website',
    price: '₹25,000',
    priceTo: '₹40,000',
    period: 'one-time',
    href: '/services#website',
    color: 'border-white/10',
    highlight: false,
    note: 'Best when paired with Positioning Strategy.',
    items: [
      'Modern, fast website',
      'Position-aligned copy',
      'Email capture',
      'SEO setup',
      '1 year hosting',
      '30-day support',
    ],
  },
  {
    name: 'Launch + Growth',
    price: '₹5,000',
    priceTo: '₹10,000',
    period: '/month',
    href: '/services#growth',
    color: 'border-green-500/25',
    highlight: false,
    items: [
      'Content strategy',
      'Paid ads management',
      'Monthly email campaigns',
      'Performance reporting',
      'Monthly strategy call',
      'Ongoing optimization',
    ],
  },
]

const faqs = [
  {
    q: 'Why should I do Positioning Strategy before a website?',
    a: 'A website without positioning is just a digital brochure. Positioning tells us what to say and why — the website then communicates that clearly. Without it, you end up looking like every competitor.',
  },
  {
    q: 'What\'s included in the bundle?',
    a: 'Positioning Strategy + Positioned Website for ₹50,000 total. That\'s a ₹5,000–₹40,000 saving compared to buying separately. It\'s the most common starting point for new clients.',
  },
  {
    q: 'How long does each service take?',
    a: 'Positioning Strategy: 3–4 weeks. Positioned Website: 6–8 weeks from positioning sign-off. Bundle: around 8–10 weeks total. Growth retainer starts after launch.',
  },
  {
    q: 'Do I need the Growth retainer?',
    a: 'Not immediately. Positioning + Website is a complete foundation. Growth makes sense once you\'re ready to push traffic — usually 1–3 months after launch.',
  },
  {
    q: 'What if I already have a website?',
    a: 'Start with Positioning Strategy. After the playbook, we\'ll tell you exactly what to change — whether that\'s a full rebuild or targeted copy updates. Many clients find the playbook alone creates immediate clarity.',
  },
  {
    q: 'Do you work with businesses outside Hyderabad?',
    a: 'Yes. We work with service businesses across India. All discovery, strategy, and collaboration happens over video calls and shared documents.',
  },
]

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        {/* Header */}
        <section className="py-16 mesh-bg">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="section-badge mb-5">Pricing</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Transparent pricing.
              <span className="gradient-text"> No surprises.</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              You know what you're getting and what it costs before we start. No retainer traps, no hidden fees.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-20 mesh-bg">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map(({ name, price, priceTo, period, href, color, highlight, badge, note, items }) => (
                <div
                  key={name}
                  className={`glass rounded-2xl border p-6 flex flex-col ${color} ${highlight ? 'ring-1 ring-accent/40' : ''}`}
                >
                  <div className="mb-5">
                    {badge && (
                      <div className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/15 text-orange-300 border border-accent/30 mb-3">
                        {badge}
                      </div>
                    )}
                    <div className="font-display text-base font-bold text-white mb-3">{name}</div>
                    <div className="flex items-end gap-1 mb-1">
                      <span className="text-2xl font-bold text-white">{price}</span>
                      {priceTo && <span className="text-muted text-sm mb-0.5">– {priceTo}</span>}
                    </div>
                    <div className="text-muted text-xs">{period}</div>
                    {note && <div className="text-muted text-xs mt-2 italic">{note}</div>}
                  </div>

                  <ul className="space-y-2.5 flex-1 mb-6">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle size={13} className={`mt-0.5 flex-shrink-0 ${highlight ? 'text-accent' : 'text-green-400'}`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={href}
                    className={highlight ? 'btn-primary text-sm justify-center' : 'btn-secondary text-sm justify-center'}
                  >
                    {highlight ? 'Start Here' : 'Learn More'} <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 section-bg border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="section-badge mb-5">FAQ</div>
              <h2 className="font-display text-3xl font-bold text-white">Common questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="glass rounded-2xl border border-white/8 p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <HelpCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <div className="font-semibold text-white text-sm">{q}</div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed pl-7">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 mesh-bg">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-muted mb-8">Book a free 30-minute call. We'll tell you exactly what we'd recommend for your market.</p>
            <a href="/#contact" className="btn-primary text-base">Book Free Positioning Call <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
