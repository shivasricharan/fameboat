import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Target, Crosshair, BarChart3, LineChart, Lightbulb, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: <Target size={24} />,
    step: 'Step 1',
    title: 'Position your business',
    color: 'border-primary/30 bg-primary/5',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/15',
    items: [
      'Understand who you serve and why they choose you',
      'Clarify your message and offer structure',
      'Define what makes you different from competitors',
      'Build a positioning framework for all future marketing',
    ],
  },
  {
    icon: <Crosshair size={24} />,
    step: 'Step 2',
    title: 'Capture opportunities',
    color: 'border-violet-500/30 bg-violet-500/5',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/15',
    items: [
      'Website designed to generate enquiries',
      'Lead capture forms that connect to your workflow',
      'Landing pages for campaigns and channels',
      'Integration with WhatsApp, email, and ads',
    ],
  },
  {
    icon: <BarChart3 size={24} />,
    step: 'Step 3',
    title: 'Track leads and follow-ups',
    color: 'border-accent/30 bg-accent/5',
    iconColor: 'text-accent',
    iconBg: 'bg-accent/15',
    items: [
      'Every lead visible in one place',
      'Stage tracking — know where each lead stands',
      'Owner assignment and accountability',
      'Follow-up reminders so nothing goes cold',
    ],
  },
  {
    icon: <LineChart size={24} />,
    step: 'Step 4',
    title: 'Measure what matters',
    color: 'border-blue-500/30 bg-blue-500/5',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/15',
    items: [
      'Dashboards showing conversion rates and pipeline',
      'Revenue tracking — not just vanity metrics',
      'Channel performance — know what works',
      'Weekly and monthly reports',
    ],
  },
  {
    icon: <Lightbulb size={24} />,
    step: 'Step 5',
    title: 'Improve decisions',
    color: 'border-green-500/30 bg-green-500/5',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/15',
    items: [
      'Use data to focus on high-performing channels',
      'Fix conversion gaps with targeted improvements',
      'Optimise follow-up timing and messaging',
      'Build on what works, stop what doesn\'t',
    ],
  },
]

export default function HowWeWork() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-12 mesh-bg">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="section-badge mb-4">How It Works</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Connect the
              <span className="gradient-text"> missing pieces.</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Five steps to turn scattered opportunities into a connected growth system.
            </p>
          </div>
        </section>

        <section className="py-16 mesh-bg">
          <div className="max-w-5xl mx-auto px-6 space-y-5">
            {steps.map(({ icon, step, title, color, iconColor, iconBg, items }) => (
              <div key={step} className={`glass rounded-2xl border p-6 ${color}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center ${iconColor} flex-shrink-0`}>
                    {icon}
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${iconColor}`}>{step}</div>
                    <h2 className="font-display text-xl font-bold text-white">{title}</h2>
                  </div>
                </div>
                <ul className="grid md:grid-cols-2 gap-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className={`mt-1 flex-shrink-0 ${iconColor}`}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 section-bg">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-3">Ready to connect the pieces?</h2>
            <p className="text-muted mb-6">Tell us about your business. We&apos;ll show you where opportunities are being lost — and how to fix it.</p>
            <a href="/#contact" className="btn-primary text-base">Let&apos;s Talk <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
