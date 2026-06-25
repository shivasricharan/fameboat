'use client'

import { useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Globe, Tv, BarChart3, Users, Mail, Smartphone, Layout, Database, ChevronRight } from 'lucide-react'

const IMG = '/case-studies/metro-tv'

const metrics = [
  { value: '6+', label: 'Pages Built', icon: <Layout size={20} /> },
  { value: '100%', label: 'Mobile Responsive', icon: <Smartphone size={20} /> },
  { value: 'Live', label: 'TV Streaming', icon: <Tv size={20} /> },
  { value: 'Automated', label: 'Lead Capture', icon: <Mail size={20} /> },
]

const techStack = [
  'Next.js', 'Tailwind CSS', 'YouTube API', 'Google Sheets CMS', 'Responsive Design', 'SEO Optimized',
]

export default function MetroTvCaseStudy() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main ref={ref} className="pt-24">
        {/* Hero */}
        <section className="py-12 mesh-bg">
          <div className="max-w-4xl mx-auto px-6">
            <div className="reveal">
              <Link href="/#work" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors mb-6">
                <ArrowLeft size={14} /> Back to Work
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="section-badge">Case Study</span>
                <span className="text-xs text-muted font-medium uppercase tracking-wider">Media &amp; Broadcasting</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Metro TV Telugu
              </h1>
              <p className="text-muted text-lg leading-relaxed max-w-2xl mb-6">
                A complete digital presence for a Telugu news channel — live TV streaming, content management, advertiser enquiries, and audience engagement, all connected through one system.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-violet-300 font-medium">Website</span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-orange-300 font-medium">Lead Capture</span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-300 font-medium">CMS</span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 font-medium">Live Streaming</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Screenshot */}
        <section className="mesh-bg pb-12">
          <div className="max-w-5xl mx-auto px-6 reveal">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src={`${IMG}/metro-desktop-home.png`} alt="Metro TV Telugu — Desktop Homepage" width={1440} height={900} className="w-full h-auto" priority />
            </div>
          </div>
        </section>

        {/* Case Study Snapshot */}
        <section className="py-12 section-bg border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="reveal">
              <div className="section-badge mb-4">Case Study Snapshot</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {[
                  { label: 'Client', value: 'Metro TV Telugu' },
                  { label: 'Industry', value: 'Regional Media' },
                  { label: 'System Built', value: 'Digital Presence System' },
                  { label: 'Delivery', value: '7 Days' },
                  { label: 'Stack', value: 'Next.js + Netlify + Google Sheets' },
                  { label: 'Core Outcome', value: 'Live TV, advertiser enquiries, contact workflows & CMS' },
                ].map(({ label, value }) => (
                  <div key={label} className="glass rounded-xl border border-white/8 p-4">
                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{label}</div>
                    <div className="text-sm font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>

              <div className="glass rounded-2xl border border-primary/20 p-5 mb-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Fameboat helped Metro TV Telugu move from scattered digital visibility to a structured online presence where viewers can watch live TV, advertisers can enquire, and the team can manage key content through Google Sheets.
                </p>
              </div>

              <div className="glass rounded-xl border border-white/8 p-4 mb-6">
                <div className="text-xs font-bold text-muted uppercase tracking-wider mb-3">System Flow</div>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  {['Viewer', 'Website', 'Live TV / Advertise / Contact', 'Google Sheet', 'Metro TV Team'].map((step, i, arr) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/25 text-violet-300 font-medium text-xs">{step}</span>
                      {i < arr.length - 1 && <ChevronRight size={14} className="text-muted flex-shrink-0" />}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#challenge" className="btn-primary text-sm py-2.5 px-5">View Full Case Study <ArrowRight size={14} /></a>
                <a href="/#contact" className="btn-secondary text-sm py-2.5 px-5">Contact Fameboat <ArrowRight size={14} /></a>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-12 section-bg border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
              {metrics.map(({ value, label, icon }) => (
                <div key={label} className="glass rounded-xl border border-white/8 p-5 text-center">
                  <div className="text-primary mb-2 flex justify-center">{icon}</div>
                  <div className="text-2xl font-bold text-white mb-0.5">{value}</div>
                  <div className="text-muted text-xs font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section id="challenge" className="py-16 mesh-bg">
          <div className="max-w-4xl mx-auto px-6">
            <div className="reveal">
              <div className="section-badge mb-4">The Challenge</div>
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                A growing news channel with no digital foundation.
              </h2>
              <div className="glass rounded-2xl border border-white/8 p-6 space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Metro TV Telugu is a regional Telugu-language news and entertainment channel. As the channel grew, they needed a professional digital presence that could serve multiple audiences — viewers, advertisers, and cable network operators.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'No website or digital presence for the channel',
                    'No way for advertisers to enquire online',
                    'Content scattered across YouTube without a hub',
                    'No system to manage leads or contacts',
                    'Manual content updates with no CMS',
                    'No mobile experience for growing mobile audience',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-amber-400 mt-0.5 flex-shrink-0">→</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-16 section-bg border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="reveal">
              <div className="section-badge mb-4">The Solution</div>
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                One connected system — website, streaming, CMS, and lead capture.
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-8">
                We built a complete digital platform that brings together live TV, content discovery, advertiser engagement, and backend management — all working as one system.
              </p>
            </div>

            {/* Desktop Homepage */}
            <div className="space-y-12">
              <div className="reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Homepage — Content Hub</h3>
                    <p className="text-muted text-xs">Live TV, breaking news, YouTube channels — all in one place.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <Image src={`${IMG}/metro-desktop-home.png`} alt="Metro TV Telugu Desktop Homepage" width={1440} height={900} className="w-full h-auto" />
                </div>
              </div>

              {/* Live TV */}
              <div className="reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center text-red-400 flex-shrink-0">
                    <Tv size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Live TV Streaming</h3>
                    <p className="text-muted text-xs">Embedded live TV player with event coverage and programme schedule.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <Image src={`${IMG}/metro-live-tv.png`} alt="Metro TV Telugu Live TV Page" width={1440} height={900} className="w-full h-auto" />
                </div>
              </div>

              {/* Advertise Page */}
              <div className="reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent flex-shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Advertiser Page — Reach Telugu Audiences</h3>
                    <p className="text-muted text-xs">Dedicated page for advertisers with clear value proposition and enquiry form.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <Image src={`${IMG}/metro-advertise-page.png`} alt="Metro TV Telugu Advertise Page" width={1440} height={900} className="w-full h-auto" />
                </div>
              </div>

              {/* Contact Form */}
              <div className="reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center text-green-400 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Structured Contact &amp; Enquiry Form</h3>
                    <p className="text-muted text-xs">Purpose-specific contact form capturing enquiry type, business details, and requirements.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <Image src={`${IMG}/metro-contact-form.png`} alt="Metro TV Telugu Contact Form" width={1440} height={900} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Experience */}
        <section className="py-16 mesh-bg">
          <div className="max-w-4xl mx-auto px-6">
            <div className="reveal">
              <div className="section-badge mb-4">Mobile First</div>
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Designed for every screen.
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-8">
                With the majority of Telugu content consumed on mobile, every page was designed mobile-first — responsive layouts, touch-friendly navigation, and optimised performance.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 reveal">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image src={`${IMG}/metro-mobile-home.png`} alt="Metro TV Telugu Mobile Homepage" width={390} height={844} className="w-full h-auto" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image src={`${IMG}/metro-mobile-menu.png`} alt="Metro TV Telugu Mobile Menu" width={390} height={844} className="w-full h-auto" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image src={`${IMG}/metro-mobile-advertising.png`} alt="Metro TV Telugu Mobile Advertising" width={390} height={844} className="w-full h-auto" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 text-center reveal">
              <p className="text-muted text-xs">Homepage — Live TV &amp; News</p>
              <p className="text-muted text-xs">Navigation — All Sections</p>
              <p className="text-muted text-xs">Advertising &amp; Cable Networks</p>
            </div>
          </div>
        </section>

        {/* Backend CMS */}
        <section className="py-16 section-bg border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="reveal">
              <div className="section-badge mb-4">Behind The Scenes</div>
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Google Sheets CMS — simple, powerful, no learning curve.
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-8">
                Instead of a complex CMS, we built a Google Sheets-powered backend. The Metro TV team manages ticker text, videos, shows, contacts, and enquiries from a spreadsheet they already know how to use — with tabs for Settings, Ticker, Videos, Shows, Contacts, and Enquiries.
              </p>
            </div>
            <div className="reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Database size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Metro TV CMS — Google Sheets Backend</h3>
                  <p className="text-muted text-xs">Settings, Ticker, Videos, Shows, Contacts, Enquiries — all managed from one spreadsheet.</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image src={`${IMG}/metro-google-sheet-backend.png`} alt="Metro TV Telugu Google Sheets CMS" width={1440} height={900} className="w-full h-auto" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-8 reveal">
              {[
                { title: 'Zero Training', desc: 'Team uses Google Sheets they already know.' },
                { title: 'Real-time Updates', desc: 'Change content and it reflects on the site instantly.' },
                { title: 'All Data Captured', desc: 'Enquiries, contacts, and leads stored automatically.' },
              ].map(({ title, desc }) => (
                <div key={title} className="glass rounded-xl border border-white/8 p-4">
                  <div className="text-sm font-bold text-white mb-1">{title}</div>
                  <p className="text-muted text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12 mesh-bg">
          <div className="max-w-4xl mx-auto px-6">
            <div className="reveal">
              <div className="section-badge mb-4">Tech Stack</div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Built with modern tools.
              </h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span key={tech} className="glass rounded-lg border border-white/8 px-4 py-2 text-sm text-gray-300 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 section-bg border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="reveal">
              <div className="section-badge mb-4">Results</div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                From zero digital presence to a connected platform.
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Professional Digital Presence', desc: 'A modern, fast website that positions Metro TV Telugu as a credible regional news channel.' },
                  { title: 'Advertiser Pipeline', desc: 'Structured enquiry system that captures and organises advertiser leads automatically.' },
                  { title: 'Content Centralisation', desc: 'All YouTube channels, live TV, and news content accessible from one platform.' },
                  { title: 'Self-Managed Updates', desc: 'The team updates content independently through the Google Sheets CMS — no developer needed.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="glass rounded-xl border border-white/8 p-5">
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <div className="text-sm font-bold text-white mb-1">{title}</div>
                        <p className="text-muted text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 mesh-bg">
          <div className="max-w-2xl mx-auto px-6 text-center reveal">
            <h2 className="font-display text-3xl font-bold text-white mb-3">Need a similar system for your business?</h2>
            <p className="text-muted mb-6">Tell us about your challenge. We&apos;ll show you how to connect the pieces.</p>
            <a href="/#contact" className="btn-primary text-base">Let&apos;s Talk <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
