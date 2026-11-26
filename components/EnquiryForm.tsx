'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useRef, useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'
const FAILED = 'We could not confirm that your enquiry was received. Your details are still in the form, so please try again or message us on WhatsApp.'

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [ready, setReady] = useState(false)
  const done = useRef<HTMLDivElement>(null)

  useEffect(() => setReady(true), [])
  useEffect(() => { if (status === 'success') done.current?.focus() }, [status])

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries())
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok || data?.success !== true) {
        setError(data?.error || FAILED)
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setError(FAILED)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form" ref={done} tabIndex={-1} role="status">
        <h3>Your enquiry has been received.</h3>
        <p>The next step is a conversation to confirm whether the audit fits your question and what it would cover.</p>
      </div>
    )
  }

  return (
    <form className="form" method="post" onSubmit={submit}>
      <div className="trap" aria-hidden="true">
        <label>Leave this empty<input name="fb_leave_blank" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label>Name<input name="name" required maxLength={100} autoComplete="name" /></label>
      <label>Business name<input name="business" required maxLength={150} autoComplete="organization" /></label>
      <label>Email<input name="email" type="email" required maxLength={150} autoComplete="email" /></label>
      <label><span>Phone / WhatsApp <small>optional</small></span><input name="phone" type="tel" maxLength={25} autoComplete="tel" /></label>
      <label><span>Website <small>optional</small></span><input name="website" inputMode="url" maxLength={200} autoComplete="url" placeholder="yourbusiness.com" /></label>
      <label>What are you trying to understand?<textarea name="message" required rows={5} maxLength={3000} /></label>
      <p className="hint">An enquiry starts a conversation to confirm fit and scope. You pay nothing to enquire. Please do not include your customers’ personal details. See our <Link href="/privacy">privacy note</Link>.</p>
      {status === 'error' && <p className="error" role="alert">{error}</p>}
      <button className="btn" type="submit" disabled={!ready || status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Request an audit'}
      </button>
      <noscript><p className="error">This form needs JavaScript. Please contact us on WhatsApp using the number below.</p></noscript>
    </form>
  )
}
