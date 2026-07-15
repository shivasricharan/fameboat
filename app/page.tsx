'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Check,
  ChevronRight,
  CircleDot,
  Database,
  Gauge,
  Layers3,
  Menu,
  Network,
  Sparkles,
  Target,
  Workflow,
  X,
} from 'lucide-react'

const systemLayers = [
  {
    icon: Target,
    title: 'Positioning system',
    copy: 'Clarify what you sell, who it is for, and why customers should choose you.',
    output: 'Message, offer and market fit',
  },
  {
    icon: Workflow,
    title: 'Lead system',
    copy: 'Capture, qualify and route every enquiry without losing momentum.',
    output: 'Forms, CRM logic and follow-up',
  },
  {
    icon: Database,
    title: 'Data system',
    copy: 'Connect scattered information into a usable source of truth.',
    output: 'Dashboards and decision signals',
  },
  {
    icon: Blocks,
    title: 'Delivery system',
    copy: 'Turn repeatable work into clear workflows, ownership and hand-offs.',
    output: 'Process maps and automations',
  },
]

const outcomes = [
  'A clearer business offer',
  'Fewer missed enquiries',
  'Better visibility across teams',
  'Faster and more consistent follow-up',
  'Simple dashboards for daily decisions',
  'Systems that scale beyond individuals',
]

const sectors = ['Professional services', 'Retail & D2C', 'Education', 'Healthcare', 'Real estate', 'SaaS & technology', 'Hospitality', 'Local businesses']

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [stage, setStage] = useState('Growing with some systems')

  const stageMessage = useMemo(() => {
    if (stage === 'Starting from scratch') return 'We will focus first on positioning, lead capture and a simple operating rhythm.'
    if (stage === 'Growing with some systems') return 'We will identify where disconnected tools and manual follow-up are slowing growth.'
    return 'We will focus on integration, visibility, automation and leadership dashboards.'
  }, [stage])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Fameboat home">
          <span className="brand-mark">F</span>
          <span>Fameboat</span>
        </a>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#system" onClick={() => setMenuOpen(false)}>The system</a>
          <a href="#outcomes" onClick={() => setMenuOpen(false)}>Outcomes</a>
          <a href="#engagement" onClick={() => setMenuOpen(false)}>How we work</a>
          <a href="#assessment" className="nav-cta" onClick={() => setMenuOpen(false)}>Get a system assessment</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>Build the business system behind your growth.</h1>
          <p>Fameboat helps businesses connect positioning, lead capture, workflows, data and dashboards into one practical operating system.</p>
          <div className="hero-actions">
            <a className="button primary" href="#assessment">Assess my business system <ArrowRight size={18} /></a>
            <a className="button secondary" href="#system">See how it works</a>
          </div>
          <div className="hero-proof">
            <span><Check size={16} /> Built for businesses of every size</span>
            <span><Check size={16} /> Strategy connected to execution</span>
          </div>
        </div>

        <div className="system-visual" aria-label="Fameboat business system overview">
          <div className="system-topbar">
            <span>Business command centre</span>
            <span className="live"><CircleDot size={14} /> Live system</span>
          </div>
          <div className="system-score">
            <div>
              <span className="small-label">SYSTEM READINESS</span>
              <strong>72</strong><span>/100</span>
            </div>
            <Gauge size={42} />
          </div>
          <div className="system-grid">
            <div className="metric"><span>Leads captured</span><strong>148</strong><em>+18%</em></div>
            <div className="metric"><span>Follow-up gaps</span><strong>12</strong><em className="warn">Needs action</em></div>
            <div className="metric wide">
              <span>Business flow</span>
              <div className="flow-row">
                <i>Discover</i><ChevronRight size={14}/><i>Capture</i><ChevronRight size={14}/><i>Qualify</i><ChevronRight size={14}/><i>Convert</i>
              </div>
            </div>
          </div>
          <div className="signal-row">
            <div><span className="dot violet"></span> Positioning</div>
            <div><span className="dot orange"></span> Leads</div>
            <div><span className="dot green"></span> Delivery</div>
            <div><span className="dot blue"></span> Data</div>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="section-intro left">
          <span className="eyebrow">Most growth problems are system problems</span>
          <h2>Your business may be growing. Your operating system may not be.</h2>
        </div>
        <div className="problem-list">
          {[
            ['Enquiries arrive everywhere', 'WhatsApp, calls, forms, referrals and spreadsheets never become one clear pipeline.'],
            ['Follow-up depends on memory', 'The next action is unclear, delayed or owned by nobody.'],
            ['Data exists but decisions are slow', 'Reports are scattered, delayed and difficult for leaders to use.'],
            ['Teams work hard but inconsistently', 'Processes live inside people instead of a visible repeatable system.'],
          ].map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="system-section" id="system">
        <div className="section-intro">
          <span className="eyebrow">One connected business system</span>
          <h2>From market visibility to management visibility.</h2>
          <p>We connect the customer-facing and operational sides of your business so growth becomes measurable, repeatable and easier to manage.</p>
        </div>
        <div className="layers">
          {systemLayers.map((item, index) => {
            const Icon = item.icon
            return (
              <article key={item.title}>
                <div className="layer-number">0{index + 1}</div>
                <Icon size={27} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span>{item.output}</span>
              </article>
            )
          })}
        </div>
      </section>

      <section className="outcomes-section" id="outcomes">
        <div className="outcomes-copy">
          <span className="eyebrow">What changes after the system is built</span>
          <h2>A business that is easier to understand, run and grow.</h2>
          <p>Fameboat does not add technology for the sake of it. Every system is designed around the decisions, customer moments and operational gaps that matter most.</p>
          <div className="outcome-list">
            {outcomes.map(item => <div key={item}><Check size={17}/><span>{item}</span></div>)}
          </div>
        </div>
        <div className="decision-panel">
          <div className="panel-heading"><BarChart3 size={22}/><span>Leadership view</span></div>
          <div className="chart-bars">
            {[52, 68, 61, 82, 74, 91].map((height, i) => <div key={i}><span style={{height: `${height}%`}}></span></div>)}
          </div>
          <div className="panel-summary">
            <div><span>Opportunity flow</span><strong>Healthy</strong></div>
            <div><span>Lead response</span><strong>2.4 hrs</strong></div>
            <div><span>Priority action</span><strong>12 leads</strong></div>
          </div>
        </div>
      </section>

      <section className="sectors-section">
        <div className="section-intro">
          <span className="eyebrow">Designed around your business, not a template</span>
          <h2>Useful across industries. Adapted to how you actually work.</h2>
        </div>
        <div className="sector-rail">{sectors.map(sector => <span key={sector}>{sector}</span>)}</div>
      </section>

      <section className="engagement-section" id="engagement">
        <div className="section-intro left">
          <span className="eyebrow">How Fameboat works</span>
          <h2>Diagnose. Design. Build. Improve.</h2>
        </div>
        <div className="engagement-steps">
          {[
            ['01', 'Business system assessment', 'We map your current customer journey, tools, data, workflows and decision gaps.'],
            ['02', 'System blueprint', 'You receive a focused operating model with priorities, ownership and recommended tools.'],
            ['03', 'Build and implementation', 'We create the website, lead flows, automations, dashboards and working processes.'],
            ['04', 'Optimisation support', 'We review what is working, improve weak points and help the system mature with the business.'],
          ].map(([num, title, copy]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="assessment-section" id="assessment">
        <div className="assessment-copy">
          <span className="eyebrow">Start with clarity</span>
          <h2>Find the weakest link in your business system.</h2>
          <p>Share a few details. Fameboat will review where leads, workflows, data or visibility may be breaking down and suggest the best starting point.</p>
          <div className="stage-note"><Sparkles size={18}/><span>{stageMessage}</span></div>
        </div>
        {submitted ? (
          <div className="success-card">
            <div className="success-icon"><Check size={28}/></div>
            <h3>Your assessment request is ready.</h3>
            <p>Thank you. The next step is a focused review of your current business flow and the most valuable system to build first.</p>
            <a className="button primary" href="https://wa.me/919000000000" target="_blank" rel="noreferrer">Continue on WhatsApp <ArrowRight size={18}/></a>
          </div>
        ) : (
          <form className="assessment-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <label>Name<input required name="name" placeholder="Your name" /></label>
              <label>Business<input required name="business" placeholder="Business name" /></label>
            </div>
            <label>Email or phone<input required name="contact" placeholder="How should we reach you?" /></label>
            <label>Business stage
              <select value={stage} onChange={e => setStage(e.target.value)}>
                <option>Starting from scratch</option>
                <option>Growing with some systems</option>
                <option>Scaling across teams or locations</option>
              </select>
            </label>
            <label>Biggest challenge
              <select defaultValue="Leads are not followed up consistently">
                <option>Leads are not followed up consistently</option>
                <option>Our positioning and offer are unclear</option>
                <option>Our teams and workflows are disconnected</option>
                <option>We cannot see the right numbers quickly</option>
                <option>We need one integrated business system</option>
              </select>
            </label>
            <button className="button primary submit" type="submit">Request my assessment <ArrowRight size={18}/></button>
            <small>No long sales pitch. Just a practical first diagnosis.</small>
          </form>
        )}
      </section>

      <footer>
        <div className="footer-top">
          <div><a className="brand" href="#top"><span className="brand-mark">F</span><span>Fameboat</span></a><p>Business systems for clearer growth.</p></div>
          <div className="footer-links"><a href="#system">The system</a><a href="#outcomes">Outcomes</a><a href="#engagement">How we work</a><a href="#assessment">Assessment</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Fameboat</span><span>Hyderabad, India</span></div>
      </footer>
    </main>
  )
}
