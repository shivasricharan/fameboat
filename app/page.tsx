"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"
import "./fameboat2.css"

const flow = [
  ["Marketing", "The activity you pay for or spend time on."],
  ["Customer response", "The calls, messages, enquiries and visits that follow."],
  ["Business outcome", "The sales, revenue and returning customers you can see."],
  ["Decision", "What to scale, stop, fix or test next."]
]

export default function Home() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "sending") return
    setStatus("sending"); setMessage("")
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, service: "14-Day Marketing Proof Audit" }) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setStatus("success"); setMessage("Thanks — your paid audit request is in. We’ll be in touch shortly.")
      e.currentTarget.reset()
    } catch (err) {
      setStatus("error"); setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  return <main className="fb2" id="top">
    <header className="fb2-header">
      <a className="fb2-brand" href="#top">Fameboat</a>
      <nav><a href="#how">How it works</a><Link href="/proof-lab">Proof Lab</Link><a href="#audit">14-Day Audit</a></nav>
      <a className="fb2-header-cta" href="#audit">Start audit</a>
    </header>

    <section className="fb2-hero">
      <div className="fb2-wrap fb2-hero-grid">
        <div>
          <p className="fb2-kicker">FAMEBOAT</p>
          <h1>Marketing shows activity.<br />Fameboat shows proof.</h1>
          <p className="fb2-lede">Understand what’s actually working, what’s unclear and what to do next — before spending more on marketing.</p>
          <div className="fb2-actions"><a className="fb2-button" href="#audit">Start 14-Day Audit — ₹5,000</a><Link className="fb2-text-link" href="/proof-lab">See Fameboat in action <span>→</span></Link></div>
          <p className="fb2-note">Focused 14-day engagement. Real business data. Clear next decisions.</p>
        </div>
        <aside className="fb2-hero-panel">
          <p>ONE BETTER QUESTION</p>
          <strong>What is actually creating business?</strong>
          <span>Fameboat helps you follow the evidence, without pretending it is perfect.</span>
        </aside>
      </div>
    </section>

    <section className="fb2-problem" id="problem">
      <div className="fb2-wrap fb2-split">
        <div><p className="fb2-kicker">THE PROBLEM</p><h2>Lots of activity.<br />Not enough clarity.</h2></div>
        <div><p>Clicks. Leads. Followers. Calls. Messages. Website traffic. Campaign reports.</p><p className="fb2-body">They all show activity. But they do not answer the owner’s questions: Which of these created business? Where are opportunities being lost? What should be fixed before more money is spent?</p></div>
      </div>
    </section>

    <section className="fb2-flow" id="how">
      <div className="fb2-wrap"><p className="fb2-kicker">HOW FAMEBOAT WORKS</p><h2>From activity to a decision.</h2>
        <div className="fb2-flow-grid">{flow.map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <p className="fb2-body fb2-flow-end">We look at the available evidence across the whole journey — what appears to be contributing, what cannot yet be proven, where value may be missed, and the next move worth investigating.</p>
      </div>
    </section>

    <section className="fb2-lab">
      <div className="fb2-wrap fb2-lab-inner"><div><p className="fb2-kicker">PROOF LAB</p><h2>See Fameboat in action.</h2><p className="fb2-body">Answer a few simple questions. See what Fameboat notices. It takes about a minute and never asks for customer-level data.</p><Link className="fb2-text-link" href="/proof-lab">Open Proof Lab <span>→</span></Link></div><div className="fb2-lab-quote"><span>Working</span><span>Unclear</span><span>Opportunity</span><strong>Next move</strong></div></div>
    </section>

    <section className="fb2-audit" id="audit">
      <div className="fb2-wrap"><div className="fb2-audit-head"><div><p className="fb2-kicker">THE 14-DAY AUDIT</p><h2>14 days to understand what deserves your attention.</h2></div><strong>₹5,000</strong></div>
        <div className="fb2-timeline">{[["Day 1–2","Understand the business question."],["Day 3–5","Review available marketing, customer and business evidence."],["Day 6–9","Identify gaps, patterns and assumptions."],["Day 10–12","Investigate the strongest opportunities."],["Day 13–14","Deliver findings and recommended next moves."]].map(([day, copy])=><article key={day}><b>{day}</b><p>{copy}</p></article>)}</div>
        <p className="fb2-fine">A focused engagement, not 14 days of full-time consulting.</p>
      </div>
    </section>

    <section className="fb2-deliverables"><div className="fb2-wrap fb2-split"><div><p className="fb2-kicker">WHAT YOU GET</p><h2>Useful evidence.<br />A clearer next move.</h2></div><ul><li>Business question definition</li><li>Marketing and channel review</li><li>Customer journey view</li><li>Evidence and tracking gaps</li><li>Opportunities worth investigating</li><li>Scale / Stop / Fix / Test recommendations</li><li>Final decision summary</li></ul></div></section>

    <section className="fb2-fit"><div className="fb2-wrap"><p className="fb2-kicker">THIS MAY BE USEFUL IF…</p><div className="fb2-fit-grid">{["You’re spending on marketing but aren’t sure what’s working.","Leads are coming in but business is not growing proportionately.","Different channels report different versions of success.","You suspect opportunities are getting lost between enquiry and sale.","You have business data but aren’t sure what it is telling you."].map(x=><p key={x}>{x}</p>)}</div><p className="fb2-fine">You don’t need perfect data to start.</p></div></section>

    <section className="fb2-no-magic"><div className="fb2-wrap fb2-split"><div><p className="fb2-kicker">A TRUST NOTE</p><h2>No magic attribution.</h2></div><p className="fb2-body">We won’t pretend every sale can be traced perfectly to a click, campaign or channel. We’ll work with the evidence available, show what’s known, identify what’s unclear and help determine what to investigate next.</p></div></section>

    <section className="fb2-founder"><div className="fb2-wrap fb2-split"><div><p className="fb2-kicker">FOUNDER</p><h2>Built from nearly two decades of asking the same question in different forms.</h2></div><div><p className="fb2-body">Shiva has worked across marketing, branding, media, digital and business/customer touchpoints for 19+ years. Fameboat comes from a continuing interest in connecting fragmented signals to better everyday decisions.</p><p className="fb2-sign">Shiva<br />Founder, Fameboat</p></div></div></section>

    <section className="fb2-form-section"><div className="fb2-wrap fb2-form-grid"><div><p className="fb2-kicker">START YOUR AUDIT</p><h2>Before you spend more, understand what’s already happening.</h2><p className="fb2-price">14-Day Marketing Proof Audit<br /><strong>₹5,000</strong></p><p className="fb2-body">Tell us what you’re trying to understand. We’ll take it from there.</p></div>
      <form onSubmit={submit}><input className="fb2-honeypot" name="company" tabIndex={-1} autoComplete="off" /><label>Name*<input name="name" required /></label><label>Business / Company*<input name="business" required /></label><label>Email*<input name="email" type="email" required /></label><label>Phone / WhatsApp*<input name="phone" required /></label><label>Website <em>(optional)</em><input name="website" placeholder="https://" /></label><label className="fb2-wide">What are you trying to understand?<textarea name="message" required /></label><button className="fb2-button" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request 14-Day Audit — ₹5,000"}</button>{message && <p className={status === "success" ? "fb2-success" : "fb2-error"}>{message}</p>}</form>
    </div></section>
    <footer className="fb2-footer"><div className="fb2-wrap"><span>Fameboat</span><span>© 2026</span><Link href="/privacy">Privacy</Link></div></footer>
  </main>
}