import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Target, Globe, Eye, Settings, CheckCircle, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'positioning',
    icon: <Target size={24} />,
    title: 'Positioning Sprint',
    tagline: 'Clarify your audience, message, offer, and market position.',
    color: 'border-primary/30',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
    includes: [
      'Audience clarity — who you serve and why',
      'Message framework — what to say and how',
      'Offer structure — packages that make sense',
      'Market position — where you stand vs competitors',
      'Competitive differentiation summary',
    ],
    outcome: 'A clear position you can build all marketing on.',
  },
  {
    id: 'website',
    icon: <Globe size={24} />,
    title: 'Growth Website',
    tagline: 'Websites that explain your business and generate opportunities.',
    color: 'border-violet-400/30',
    iconBg: 'bg-violet-500/15',
    iconColor: 'text-violet-400',
    includes: [
      'Modern, fast website aligned to your positioning',
      'Copy that communicates your difference',
      'Enquiry forms and lead capture',
      'SEO fundamentals',
      'Mobile-first, performance-optimized',
      'Integration with your existing tools',
    ],
    outcome: 'A live website that generates qualified enquiries.',
  },
  {
    id: 'leads',
    icon: <Eye size={24} />,
    title: 'Lead Visibility System',
    tagline: 'Track leads, stages, owners, follow-ups, and conversion gaps.',
    color: 'border-accent/30',
    iconBg: 'bg-accent/15',
    iconColor: 'text-accent',
    includes: [
      'Lead tracker — every enquiry in one place',
      'Stage management — know where each lead stands',
      'Owner assignment — clear accountability',
      'Follow-up tracking — nothing falls through',
      'Conversion gap analysis — where you lose deals',
    ],
    outcome: 'Complete visibility on your opportunity pipeline.',
  },
  {
    id: 'dashboards',
    icon: <Settings size={24} />,
    title: 'Dashboards & Automation',
    tagline: 'Simple business systems using dashboards, Google Sheets, workflows, and automation.',
    color: 'border-green-500/30',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-400',
    includes: [
      'Business dashboards — see performance at a glance',
      'Google Sheets systems — structured and automated',
      'Workflow automation — reduce manual work',
      'Reporting — weekly/monthly data summaries',
      'Custom integrations where needed',
    ],
    outcome: 'Systems that save time and improve decisions.',
  },
]

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-12 mesh-bg">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="section-badge mb-4">Solutions</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              What we
              <span className="gradient-text"> build.</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Each solution connects to the next. Positioning, website, lead capture, and systems — working together.
            </p>
          </div>
        </section>

        <section className="py-16 mesh-bg">
          <div className="max-w-5xl mx-auto px-6 space-y-6">
            {services.map(({ id, icon, title, tagline, color, iconBg, iconColor, includes, outcome }) => (
              <div key={id} id={id} className={`glass rounded-2xl border p-6 md:p-8 ${color}`}>
                <div className="flex flex-wrap items-start gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor} flex-shrink-0`}>
                    {icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display text-xl font-bold text-white mb-1">{title}</h2>
                    <p className="text-muted text-sm">{tagline}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-2.5 mb-6">
                  {includes.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${iconColor}`} />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="glass rounded-lg px-4 py-2.5 border border-white/8 text-sm">
                  <span className="text-muted">Outcome: </span>
                  <span className="text-white font-medium">{outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 section-bg">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-3">Ready to build your growth system?</h2>
            <p className="text-muted mb-6">Tell us about your business. We&apos;ll recommend exactly what you need.</p>
            <a href="/#contact" className="btn-primary text-base">Let&apos;s Talk <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
