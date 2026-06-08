'use client'

import { useEffect, useRef, useState } from 'react'
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react'

const services = [
  'Lead-Gen Website (Starter – ₹8,999)',
  'Lead-Gen Website (Growth – ₹14,999)',
  'Lead-Gen Website (Premium – ₹24,999)',
  'Monthly Marketing (Ignite – ₹15K/mo)',
  'Monthly Marketing (Accelerate – ₹30K/mo)',
  'Brand Identity Kit',
  'AI Marketing Workshop',
  'Not sure yet – need advice',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    service: '',
    message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

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
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section ref={ref} id="contact" className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-badge mb-5">Contact</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Let's Build Something
            <span className="gradient-text"> That Gets You Leads.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Fill the form or call directly. We'll respond within 24 hours with a clear plan and
            honest assessment — no sales pressure.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <div className="lg:col-span-2 space-y-6 reveal">
            {[
              {
                icon: <Mail size={20} />,
                label: 'Email',
                value: 'shivacharan.s@gmail.com',
                sub: 'Reply within 24 hours',
              },
              {
                icon: <MapPin size={20} />,
                label: 'Based in',
                value: 'Hyderabad, Telangana',
                sub: 'Serving all of India',
              },
            ].map(({ icon, label, value, sub }) => (
              <div key={label} className="glass rounded-2xl p-5 border border-white/8 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="text-muted text-xs mb-1">{label}</div>
                  <div className="text-white font-semibold text-sm">{value}</div>
                  <div className="text-muted text-xs">{sub}</div>
                </div>
              </div>
            ))}

            {/* Promise box */}
            <div className="glass rounded-2xl p-6 border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="text-lg mb-3">🤝</div>
              <div className="font-bold text-white mb-2">Our Promise</div>
              <ul className="space-y-2">
                {[
                  'Free 30-min strategy call',
                  'No obligation to buy',
                  'Honest, straightforward advice',
                  'Quote within 24 hours',
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 reveal">
            {status === 'success' ? (
              <div className="glass rounded-2xl p-12 border border-green-500/25 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  We Got Your Message!
                </h3>
                <p className="text-muted text-base max-w-sm mb-6">
                  Thanks for reaching out. We'll call you within 24 hours with a clear plan
                  tailored to your business.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Raj Sharma"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone / WhatsApp <span className="text-primary">*</span>
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="raj@yourbusiness.com"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Business Name
                    </label>
                    <input
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Your Cafe / Clinic / Store"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    I'm Interested In
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-dark-mid">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tell Us About Your Business
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What does your business do? What's your biggest marketing challenge right now?"
                    className="form-input resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/25 rounded-xl px-4 py-3 text-red-400 text-sm">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center text-base animate-pulse-glow disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message & Book Free Call
                      <Send size={17} />
                    </>
                  )}
                </button>

                <p className="text-center text-muted text-xs">
                  Your info is private. We will never spam or sell your details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
