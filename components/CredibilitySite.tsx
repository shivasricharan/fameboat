'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { ArrowRight, Check, ChevronLeft, Menu, X } from 'lucide-react'

const nav = [
  ['The Problem', '/#problem'], ['What We Build', '/#build'], ['Our Work', '/work'],
  ['The Sprint', '/digital-credibility-sprint'], ['About', '/about'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="shell nav-wrap">
    <Link href="/" className="brand" aria-label="Fameboat home"><span>F</span> Fameboat</Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <Link href="/#review" className="button button-dark desktop-cta">Review My Digital Presence</Link>
    <button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  </div>{open && <div className="mobile-nav">{nav.map(([label, href]) => <Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link href="/#review" className="button button-dark" onClick={()=>setOpen(false)}>Review My Digital Presence</Link></div>}</header>
}

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid"><div><div className="brand brand-footer"><span>F</span> Fameboat</div><p>Digital credibility and customer experience studio for established founder-led businesses.</p><p className="muted">Hyderabad, India</p></div><div className="footer-links"><Link href="/digital-credibility-sprint">Digital Credibility Sprint</Link><Link href="/work">Selected Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div><div className="shell copyright">© 2026 Fameboat</div></footer>
}

const fragments = ['Old website','PDF brochures','WhatsApp enquiries','Scattered event pages','Unclear service information']
const coherent = ['Clear positioning','Premium website','Structured customer journey','Qualified enquiry','Simple publishing workflow']

export function HomePage() {
  return <><Header/><main>
    <section className="hero"><div className="shell hero-grid"><div className="hero-copy"><p className="context-line">Established in the real world. Underrepresented online.</p><h1>Make your digital presence match the business you have built.</h1><p className="lead">Fameboat helps established founder-led businesses turn outdated websites, scattered content, and unclear customer journeys into one credible digital experience that earns trust and captures serious enquiries.</p><div className="actions"><Link className="button button-primary" href="#review">Review My Digital Presence <ArrowRight size={18}/></Link><Link className="text-link" href="/work">See Selected Work <ArrowRight size={16}/></Link></div></div><TransformationVisual/></div></section>

    <section id="problem" className="section section-tint"><div className="shell"><p className="section-label">The central problem</p><div className="split-heading"><h2>Your business has evolved. Your website may still be telling an older story.</h2><p>Established businesses grow through delivery, relationships, referrals, and reputation. But the website is often left behind—making a strong organisation look unclear, smaller, or less credible than it really is.</p></div><div className="problem-grid">{['Your value is difficult to understand','Your website feels smaller than your business','Important information is scattered','Visitors do not know what to do next','Enquiries arrive without enough context','Updating content depends on a developer'].map((x,i)=><article key={x}><span>0{i+1}</span><h3>{x}</h3></article>)}</div></div></section>

    <section className="section"><div className="shell"><p className="section-label">The credibility gap</p><h2 className="max-title">What you have built and what visitors see should tell the same story.</h2><div className="credibility-compare"><div className="compare-side strong"><p>What the business has built</p>{['Years of experience','Strong customer relationships','Industry knowledge','Proven delivery','Reputation and referrals','Real-world presence'].map(x=><div key={x}><Check size={17}/>{x}</div>)}</div><div className="gap-mark"><span>Fameboat closes the gap</span><ArrowRight/></div><div className="compare-side weak"><p>What visitors may currently see</p>{['Old design','Generic messaging','Limited proof','Confusing navigation','Weak calls to action','An experience that does not inspire confidence'].map(x=><div key={x}>{x}</div>)}</div></div></div></section>

    <section id="build" className="section section-dark"><div className="shell"><p className="section-label light">What Fameboat builds</p><div className="split-heading light-copy"><h2>One digital credibility experience. Four connected layers.</h2><p>Not a menu of disconnected services. Each layer works together so customers can understand, trust, and engage with your business.</p></div><div className="layers">{[
      ['Positioning','Clarify what the business does, who it serves, and why it deserves attention.'],
      ['Digital Experience','Design a premium, responsive website that reflects the business accurately.'],
      ['Customer Journey','Help visitors discover, understand, trust, and enquire without confusion.'],
      ['Practical Infrastructure','Create forms, publishing workflows, analytics, CMS connections, and enquiry handoffs the team can operate.']
    ].map((x,i)=><article key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>

    <section className="section sprint-preview"><div className="shell sprint-grid"><div><p className="section-label">The focused engagement</p><h2>Digital Credibility Sprint</h2><p className="lead-sm">In 21 days, turn an outdated or unclear digital presence into a premium business experience built to earn trust and capture serious enquiries.</p><p className="muted">The 21-day sprint applies to a focused, agreed scope. Larger or more complex websites may require a phased engagement.</p><Link className="button button-primary" href="/digital-credibility-sprint">Explore the Sprint <ArrowRight size={18}/></Link></div><div className="timeline-mini">{[['Days 1–3','Understand'],['Days 4–7','Clarify'],['Days 8–17','Design and Build'],['Days 18–21','Test and Launch']].map(x=><div key={x[0]}><span>{x[0]}</span><strong>{x[1]}</strong></div>)}</div></div></section>

    <SelectedWork/>
    <FounderSection/>
    <Difference/>
    <ReviewForm/>
  </main><Footer/></>
}

function TransformationVisual(){return <div className="transformation" aria-label="Fragmented digital touchpoints becoming one coherent customer experience"><div className="fragmented"><p>Today</p>{fragments.map(x=><span key={x}>{x}</span>)}</div><div className="transform-arrow"><ArrowRight/></div><div className="coherent"><p>One coherent experience</p>{coherent.map(x=><span key={x}><Check size={14}/>{x}</span>)}</div></div>}

export function SelectedWork(){return <section id="work" className="section section-tint"><div className="shell"><div className="section-row"><div><p className="section-label">Selected work</p><h2>Digital experiences built around real organisations.</h2></div><Link className="text-link" href="/work">View all work <ArrowRight size={16}/></Link></div><div className="work-grid"><WorkCard title="Metro TV Telugu" category="Media & publishing" text="A modern digital publishing presence designed around content discovery, live media, advertiser enquiries, and a practical Google Sheets publishing workflow." href="/work/metro-tv-telugu" liveUrl="https://metrotvtelugu.com"/><WorkCard title="IIA Telangana" category="Professional association" text="A clearer industry-facing experience for programmes, events, information discovery, and registration pathways." href="/work/iia-telangana" liveUrl="https://iiatchapter.org/"/></div></div></section>}

function WorkCard({title,category,text,href,liveUrl}:{title:string,category:string,text:string,href:string,liveUrl?:string}){return <article className="work-card"><Link href={href}><div className="work-visual"><div className="browser-bar"><i/><i/><i/></div><div className="work-placeholder"><span>{title}</span></div></div><p className="section-label">{category}</p><h3>{title}</h3><p>{text}</p><span className="text-link">View case study <ArrowRight size={15}/></span></Link>{liveUrl&&<a className="text-link" href={liveUrl} target="_blank" rel="noreferrer">Visit live experience <ArrowRight size={15}/></a>}</article>}

export function FounderSection(){return <section className="section"><div className="shell founder-grid"><div className="founder-mark">20<span>+</span></div><div><p className="section-label">Why Fameboat</p><h2>Built from business understanding, not website templates.</h2><p>Fameboat is led by a professional with more than 20 years of experience across marketing, branding, media, digital touchpoints, customer journeys, technology, and business implementation.</p><p>The work begins with how a customer understands and experiences the business—not with a theme, template, or preferred technology.</p><Link href="/about" className="text-link">About Fameboat <ArrowRight size={16}/></Link></div></div></section>}

export function Difference(){return <section className="section section-soft"><div className="shell"><p className="section-label">A practical difference</p><h2 className="max-title">Strategy, design, and implementation stay connected.</h2><div className="difference-grid"><div><h3>Fameboat is not</h3>{['A template website package','Design without business context','A long strategy document without implementation','Unnecessary technology','A generic AI-generated website'].map(x=><p key={x}>{x}</p>)}</div><div className="positive"><h3>Fameboat provides</h3>{['Clear business positioning','Strong digital credibility','Customer-first structure','Premium implementation','Practical internal workflows','A launch-ready experience'].map(x=><p key={x}><Check size={16}/>{x}</p>)}</div></div></div></section>}

const weaknessOptions=['Website looks outdated','Our positioning is unclear','The website does not reflect our full capabilities','Visitors do not know what to do next','We are not receiving serious enquiries','Updating content is difficult','We need a stronger event or campaign experience','We need a complete digital rebuild']

export function ReviewForm(){
 const [step,setStep]=useState(1); const [status,setStatus]=useState<'idle'|'loading'|'success'|'error'>('idle'); const [error,setError]=useState('');
 const [form,setForm]=useState({name:'',business:'',website:'',email:'',phone:'',industry:'',years:'',weakness:'',changed:'',objective:'',contact:'WhatsApp',company:''})
 const update=(key:string,value:string)=>setForm({...form,[key]:value})
 const next=()=>{setError(''); if(step===1&&(!form.name||!form.business||!form.website)){setError('Please complete the required fields.');return} if(step===2&&(!form.email||!form.phone||!form.weakness)){setError('Please complete the required fields.');return} setStep(step+1); track('review_form_step_complete',{step})}
 const submit=async(e:FormEvent)=>{e.preventDefault(); if(form.company)return; setStatus('loading');setError('');track('review_form_submission');try{const res=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...form,service:'Digital Presence Review',message:`Weakness: ${form.weakness}\nBusiness changed: ${form.changed}\nObjective: ${form.objective}\nPreferred contact: ${form.contact}`})});if(!res.ok)throw new Error();setStatus('success')}catch{setStatus('error');setError('We could not submit your review. Please try again or contact Fameboat directly.');track('review_form_error')}}
 if(status==='success')return <section id="review" className="section review-section"><div className="shell narrow success-panel"><Check/><h2>Your digital presence review is requested.</h2><p>Fameboat will review the information you shared and contact you through your preferred method to discuss the most important credibility and customer-experience gaps.</p></div></section>
 return <section id="review" className="section review-section"><div className="shell review-grid"><div><p className="section-label light">Digital Presence Review</p><h2>Does your website represent the business you have become?</h2><p>Share your current digital presence and what has changed in your business. Fameboat will identify the most important credibility and customer-experience gaps.</p></div><form className="review-form" onSubmit={submit} onFocus={()=>track('review_form_start')} noValidate><div className="form-progress"><span style={{width:`${step*33.33}%`}}/></div><p className="step-label">Step {step} of 3</p>
 {step===1&&<div className="form-fields"><Field label="Name" required value={form.name} onChange={v=>update('name',v)}/><Field label="Business name" required value={form.business} onChange={v=>update('business',v)}/><Field label="Website URL" type="url" required placeholder="https://" value={form.website} onChange={v=>update('website',v)}/><Field label="Industry" value={form.industry} onChange={v=>update('industry',v)}/><Field label="How long has the business operated?" value={form.years} onChange={v=>update('years',v)}/></div>}
 {step===2&&<div className="form-fields"><Field label="Email" type="email" required value={form.email} onChange={v=>update('email',v)}/><Field label="Phone or WhatsApp" type="tel" required value={form.phone} onChange={v=>update('phone',v)}/><label>What feels weakest today? <b>*</b><select required value={form.weakness} onChange={e=>update('weakness',e.target.value)}><option value="">Select one</option>{weaknessOptions.map(x=><option key={x}>{x}</option>)}</select></label></div>}
 {step===3&&<div className="form-fields"><label>What has changed since the website was built?<textarea rows={3} value={form.changed} onChange={e=>update('changed',e.target.value)}/></label><label>Primary objective for the website<textarea rows={3} value={form.objective} onChange={e=>update('objective',e.target.value)}/></label><label>Preferred contact method<select value={form.contact} onChange={e=>update('contact',e.target.value)}><option>WhatsApp</option><option>Phone</option><option>Email</option></select></label><label className="honeypot">Company<input tabIndex={-1} autoComplete="off" value={form.company} onChange={e=>update('company',e.target.value)}/></label><p className="consent">By submitting, you consent to Fameboat using these details only to review and respond to your enquiry.</p></div>}
 {error&&<p className="form-error" role="alert">{error}</p>}<div className="form-actions">{step>1&&<button type="button" className="button button-ghost" onClick={()=>setStep(step-1)}><ChevronLeft size={17}/> Back</button>}{step<3?<button type="button" className="button button-primary" onClick={next}>Continue <ArrowRight size={17}/></button>:<button className="button button-primary" disabled={status==='loading'}>{status==='loading'?'Submitting…':'Request My Digital Review'} <ArrowRight size={17}/></button>}</div></form></div></section>
}

function Field({label,value,onChange,type='text',required=false,placeholder=''}:{label:string,value:string,onChange:(v:string)=>void,type?:string,required?:boolean,placeholder?:string}){return <label>{label} {required&&<b>*</b>}<input type={type} required={required} placeholder={placeholder} value={value} onChange={e=>onChange(e.target.value)} /></label>}
export function track(event:string,data:Record<string,unknown>={}){if(typeof window==='undefined')return;(window as typeof window & {dataLayer?:unknown[]}).dataLayer?.push({event,...data})}

export function StandardPage({eyebrow,title,intro,children}:{eyebrow:string,title:string,intro:string,children:React.ReactNode}){return <><Header/><main><section className="page-hero"><div className="shell narrow"><p className="section-label">{eyebrow}</p><h1>{title}</h1><p className="lead-sm">{intro}</p></div></section>{children}</main><Footer/></>}
