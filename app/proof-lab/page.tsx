'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const questions = ['What’s bringing customers?', 'What’s actually converting?', 'Where am I losing opportunities?', 'What’s worth spending more on?', 'Why aren’t customers coming back?', 'I want to understand my business better']
const channels = ['Google', 'Instagram', 'Facebook', 'WhatsApp', 'Referrals', 'Walk-ins', 'Website', 'Ads', 'Events', 'Partners', 'Other']
const fields = [['spend', 'Marketing spend (₹)'], ['enquiries', 'Enquiries'], ['sales', 'Sales or orders'], ['revenue', 'Revenue (₹)']] as const
const empty = { spend: '', enquiries: '', sales: '', revenue: '' }

// Accepts "50,000" or "₹ 50000". Anything else counts as not provided.
const toNumber = (v: string) => {
  const n = Number(v.replace(/[₹,\s]/g, ''))
  return Number.isFinite(n) && n > 0 ? n : null
}

export default function ProofLab() {
  const [step, setStep] = useState(1)
  const [focus, setFocus] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const [values, setValues] = useState(empty)
  const heading = useRef<HTMLHeadingElement>(null)
  const moved = useRef(false)

  useEffect(() => { if (moved.current) heading.current?.focus() }, [step])
  const go = (n: number) => { moved.current = true; setStep(n) }

  const spend = toNumber(values.spend)
  const enquiries = toNumber(values.enquiries)
  const sales = toNumber(values.sales)
  const revenue = toNumber(values.revenue)
  const comparable = enquiries !== null && sales !== null && sales <= enquiries

  const reset = () => { setFocus(''); setSelected([]); setValues(empty); go(1) }
  const toggle = (x: string) => setSelected((s) => (s.includes(x) ? s.filter((v) => v !== x) : [...s, x]))

  return (
    <>
      <Header />
      <main id="main" className="wrap prose lab-page">
        <h1>Proof Lab</h1>
        <p>An indicative first view based only on what you type. It is not a verified diagnosis. No login, and nothing you enter is sent or saved.</p>
        <p className="progress">Step {step} of 3</p>

        {step === 1 && (
          <section>
            <h2 ref={heading} tabIndex={-1}>What are you trying to understand?</h2>
            <div className="choices">
              {questions.map((q) => <button type="button" key={q} aria-pressed={focus === q} onClick={() => setFocus(q)}>{q}</button>)}
            </div>
            <button type="button" className="btn" disabled={!focus} onClick={() => go(2)}>Continue</button>
          </section>
        )}

        {step === 2 && (
          <section>
            <h2 ref={heading} tabIndex={-1}>What do you know?</h2>
            <p>Use totals for the same period. Leave blank anything you don’t have.</p>
            <div className="form flat">
              {fields.map(([key, label]) => (
                <label key={key}>{label}<input inputMode="numeric" value={values[key]} onChange={(e) => setValues({ ...values, [key]: e.target.value })} /></label>
              ))}
            </div>
            <h3>How do customers usually find you?</h3>
            <div className="choices chips">
              {channels.map((c) => <button type="button" key={c} aria-pressed={selected.includes(c)} onClick={() => toggle(c)}>{c}</button>)}
            </div>
            <div className="actions">
              <button type="button" className="btn" onClick={() => go(3)}>See the first view</button>
              <button type="button" className="text-link" onClick={() => go(1)}>Back</button>
            </div>
          </section>
        )}

        {step === 3 && (
          <section>
            <h2 ref={heading} tabIndex={-1}>Your indicative first view</h2>
            <p>Your question: <b>{focus}</b></p>
            <h3>What your numbers show</h3>
            <p>{comparable ? `About ${Math.round((sales / enquiries) * 100)}% of enquiries became sales (${sales} of ${enquiries}).` : enquiries !== null && sales !== null ? 'Sales are higher than enquiries, so some sales may not start with a recorded enquiry, or the periods differ.' : 'There is not enough here yet to compare enquiries with sales.'}
              {sales !== null && revenue !== null && ` Average revenue per sale is about ₹${Math.round(revenue / sales).toLocaleString('en-IN')}.`}
              {spend !== null && revenue !== null && ` Reported revenue is ${(revenue / spend).toFixed(1)} times reported marketing spend. That is a comparison, not proof that marketing caused it.`}</p>
            <h3>What remains unclear</h3>
            <p>{selected.length ? `You named ${selected.join(', ')}. These totals do not show which of them contributed to sales.` : 'How customers are finding you.'}</p>
            <h3>Where to look</h3>
            <p>{comparable && enquiries > sales ? `${enquiries - sales} enquiries are not matched by a sale. Check whether they are still open, were lost, or were never followed up.` : 'Check whether every enquiry and its outcome is being recorded.'}</p>
            <h3>A next step</h3>
            <p>For the next month, note the source and outcome of each enquiry in one place.</p>
            <div className="actions">
              <Link className="btn" href="/#audit">Request an audit</Link>
              <button type="button" className="text-link" onClick={reset}>Start over</button>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
