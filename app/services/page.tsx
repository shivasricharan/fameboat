import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Search, Globe, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'positioning',
    icon: <Search size={28} />,
    badge: 'Start Here',
    title: 'Positioning Strategy',
    tagline: 'Understand your market. Define your difference. Build from truth.',
    price: '₹30,000 – ₹50,000',
    period: 'one-time',
    duration: '3–4 weeks',
    color: 'border-primary/30',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
    badgeColor: 'bg-primary/15 text-violet-300 border-primary/30',
    includes: [
      'Founder interview — understand your expertise and unique angle',
      'Customer interviews — why do your best clients choose you?',
      'Competitor analysis — what are rivals claiming?',
      'Market research — what works in your category?',
      'Unique positioning statement — who you serve, what problem, why different',
      'Messaging framework — elevator pitch, service descriptions, proof points',
      'Visual brand guidelines — colors, fonts, tone, visual approach',
      'Positioning playbook — reference document for all future marketing',
    ],
    outcome: 'A clear, defensible market position you can build all marketing on.',
  },
  {
    id: 'website',
    icon: <Globe size={28} />,
    badge: 'Most Popular',
    title: 'Positioned Website',
    tagline: 'A website that communicates your difference — not just what you do.',
    price: '₹25,000 – ₹40,000',
    period: 'one-time',
    duration: '6–8 weeks',
    color: 'border-accent/30',
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
    badgeColor: 'bg-accent/15 text-orange-300 border-accent/30',
    includes: [
      'Modern, fast website designed for your market position',
      'Copy for every page written to communicate your difference',
      'Email capture + nurture sequences',
      'SEO fundamentals — show up for searches that matter',
      '1 year hosting included',
      'Mobile-first, performance-optimized build',
      'Integration with your booking or CRM system',
      'Launch review + 30-day support',
    ],
    outcome: 'A live website that converts visitors into qualified leads.',
  },
  {
    id: 'growth',
    icon: <TrendingUp size={28} />,
    badge: 'Ongoing',
    title: 'Launch + Growth',
    tagline: 'Consistent content, ads, and email to keep the right customers coming.',
    price: '₹5,000 – ₹10,000',
    period: '/month',
    duration: 'Ongoing retainer',
    color: 'border-green-500/30',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-400',
    badgeColor: 'bg-green-500/15 text-green-300 border-green-500/30',
    includes: [
      'Content strategy — blog, LinkedIn, email showing your expertise',
      'Paid ads targeting your ideal customer profile only',
      'Monthly email campaigns to nurture your list',
      'Performance reporting — what\'s converting, what needs adjustment',
      'Optimization — continuous improvement based on data',
      'Strategy calls — monthly review and planning session',
    ],
    outcome: 'Consistent, qualified lead flow from the right customers.',
  },
]

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        {/* Header */}
        <section className="py-16 mesh-bg">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="section-badge mb-5">What We Do</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Three services.
              <span className="gradient-text"> One system.</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Each service builds on the last. Positioning first, then a website that reflects it, then growth that compounds it.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 mesh-bg">
          <div className="max-w-5xl mx-auto px-6 space-y-12">
            {services.map(({ id, icon, badge, title, tagline, price, period, duration, color, iconBg, iconColor, badgeColor, includes, outcome }) => (
              <div key={id} id={id} className={`glass rounded-2xl border p-8 md:p-10 ${color}`}>
                <div className="flex flex-wrap items-start gap-5 mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center ${iconColor} flex-shrink-0`}>
                    {icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h2 className="font-display text-2xl font-bold text-white">{title}</h2>
                      <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeColor}`}>{badge}</span>
                    </div>
                    <p className="text-muted text-base">{tagline}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-white font-bold text-xl">{price}</div>
                    <div className="text-muted text-sm">{period} · {duration}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3 mb-8">
                  {includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle size={15} className={`mt-0.5 flex-shrink-0 ${iconColor}`} />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="glass rounded-xl px-4 py-3 border border-white/8 text-sm flex-1 min-w-0">
                    <span className="text-muted">Outcome: </span>
                    <span className="text-white font-medium">{outcome}</span>
                  </div>
                  <a href="/#contact" className="btn-primary text-sm flex-shrink-0">
                    Get Started <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bundle note */}
        <section className="py-12 section-bg border-y border-white/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="glass rounded-2xl p-8 border border-primary/20 bg-primary/5">
              <div className="font-display text-xl font-bold text-white mb-3">Better together</div>
              <p className="text-muted mb-4">
                If you start with Positioning Strategy, the website cost is bundled — <span className="text-white font-semibold">₹50,000 total</span> instead of paying for both separately.
              </p>
              <Link href="/pricing" className="btn-secondary text-sm">See full pricing breakdown <ArrowRight size={14} /></Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 mesh-bg">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Not sure where to start?</h2>
            <p className="text-muted mb-8">Book a free 30-minute call. We'll look at your market and tell you exactly what will move the needle.</p>
            <a href="/#contact" className="btn-primary text-base">Book Free Positioning Call <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
