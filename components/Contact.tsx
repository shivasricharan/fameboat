'use client'

import { useEffect, useRef, useState } from 'react'
import { Send, MessageCircle, MapPin, CheckCircle } from 'lucide-react'

const WA_URL = 'https://wa.me/919849016794?text=Hi%20Fameboat%2C%20I%20want%20to%20discuss%20a%20growth%20system%20for%20my%20business.'

const challenges = [
  'No visibility on where leads go',
  'Follow-ups falling through the cracks',
  'Website doesn\'t generate enquiries',
  'No system to track opportunities',
  'Need dashboards or automation',
  'Not sure — need an assessment',
]

const businessTypes = [
  'Interior Design',
  'Architecture',
  'Consulting',
  'Agency',
  'Clinic / Healthcare',
  'Real Estate',
  'Professional Services',
  'Other service business',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({
    name: '', phone: '', email: '', business: '', service: '', message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus('success')
      setForm({ name: '', phone: '', email: '', business: '', service: '', message: '' })
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <section ref={ref} id="contact" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-badge mb-5">Get Started</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Turn scattered opportunities into
            <span className="gradient-text"> a growth system.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5 reveal">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="glass rounded-2xl p-5 border border-green-500/25 bg-green-500/5 flex items-start gap-4 group transition-all hover:border-green-500/50 hover:bg-green-500/10"
            >
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="text-white font-semibold text-sm group-hover:text-green-300 transition-colors">WhatsApp Us</div>
                <div className="text-muted text-xs">Typically responds within a few hours</div>
              </div>
            </a>

            <div className="glass rounded-2xl p-5 border border-white/8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-muted text-xs mb-1">Based in</div>
                <div className="text-white font-semibold text-sm">Hyderabad, Telangana</div>
                <div className="text-muted text-xs">Serving all of India</div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-primary/20 bg-primary/5">
              <div className="font-bold text-white mb-3 text-sm">What happens next</div>
              <ul className="space-y-2">
                {['We review your requirements', 'Quick call to understand your business', 'You get a clear recommendation', 'No obligation to proceed'].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={13} className="text-green-400 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 reveal">
            {status === 'success' ? (
              <div className="glass rounded-2xl p-12 border border-green-500/25 text-center flex flex-col items-center justify-center min-h-80">
                <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center mb-4">
                  <CheckCircle size={28} className="text-green-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Got it!</h3>
                <p className="text-muted max-w-sm mb-5">We&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="btn-secondary text-sm py-2.5 px-5">Submit another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name <span className="text-accent">*</span></label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone <span className="text-accent">*</span></label>
                    <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" className="form-input" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Business type</label>
                    <select name="business" value={form.business} onChange={handleChange} className="form-input">
                      <option value="" disabled>Select...</option>
                      {businessTypes.map((b) => <option key={b} value={b} className="bg-dark-mid">{b}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">What do you need help with?</label>
                  <select name="service" value={form.service} onChange={handleChange} className="form-input">
                    <option value="" disabled>Select a challenge...</option>
                    {challenges.map((c) => <option key={c} value={c} className="bg-dark-mid">{c}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Anything else?</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Tell us about your business..." className="form-input resize-none" />
                </div>

                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/25 rounded-xl px-4 py-3 text-red-400 text-sm">{errorMsg}</div>
                )}

                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center text-base animate-pulse-glow disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'loading' ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <>Let&apos;s Talk <Send size={17} /></>
                  )}
                </button>
                <p className="text-center text-muted text-xs">Your info is private. We never spam or sell your details.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
