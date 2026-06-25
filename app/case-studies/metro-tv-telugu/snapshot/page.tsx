'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Printer } from 'lucide-react'

const IMG = '/case-studies/metro-tv'

export default function MetroTvSnapshot() {
  return (
    <>
      {/* Screen-only nav bar */}
      <div className="print:hidden fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 py-3">
        <div className="max-w-[800px] mx-auto px-6 flex items-center justify-between">
          <Link href="/case-studies/metro-tv-telugu" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors">
            <ArrowLeft size={14} /> Back to Case Study
          </Link>
          <button
            onClick={() => window.print()}
            className="btn-primary text-sm py-2 px-4"
          >
            <Printer size={14} /> Download as PDF
          </button>
        </div>
      </div>

      {/* Printable A4 page */}
      <div className="snapshot-page max-w-[800px] mx-auto px-8 pt-20 pb-12 print:pt-0 print:pb-0 print:px-0">
        <div className="print:p-[40px]">

          {/* Header */}
          <div className="flex items-start justify-between mb-6 pb-5 border-b-2 border-violet-600">
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Case Study</div>
              <h1 className="font-display text-3xl font-bold text-white print:text-black">Metro TV Telugu</h1>
              <p className="text-muted text-sm mt-1">Regional Telugu News &amp; Entertainment Channel</p>
            </div>
            <div className="print:block">
              <Image src="/fameboat.png" alt="Fameboat" width={120} height={36} className="h-8 w-auto print:invert-0" />
            </div>
          </div>

          {/* Summary */}
          <div className="bg-primary/5 print:bg-gray-50 border border-primary/20 print:border-gray-300 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-300 print:text-gray-700 leading-relaxed">
              Fameboat helped Metro TV Telugu move from scattered digital visibility to a structured online presence where viewers can watch live TV, advertisers can enquire, and the team can manage key content through Google Sheets.
            </p>
          </div>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: 'Client', value: 'Metro TV Telugu' },
              { label: 'Industry', value: 'Regional Media' },
              { label: 'Delivery', value: '7 Days' },
              { label: 'System', value: 'Digital Presence' },
              { label: 'Stack', value: 'Next.js + Netlify + Sheets' },
              { label: 'Website', value: 'metrotvtelugu.com' },
            ].map(({ label, value }) => (
              <div key={label} className="border border-white/10 print:border-gray-200 rounded-lg p-3">
                <div className="text-[10px] font-bold text-primary print:text-violet-700 uppercase tracking-wider">{label}</div>
                <div className="text-sm font-semibold text-white print:text-black mt-0.5">{value}</div>
              </div>
            ))}
          </div>

          {/* Challenge */}
          <div className="mb-6">
            <h2 className="font-display text-lg font-bold text-white print:text-black mb-2 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-amber-500 rounded-full inline-block" />
              The Challenge
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {[
                'No website or digital presence',
                'No online advertiser enquiry system',
                'Content scattered across YouTube',
                'No lead management system',
                'Manual content updates',
                'No mobile experience',
              ].map((item) => (
                <p key={item} className="text-xs text-gray-400 print:text-gray-600 flex items-start gap-1.5">
                  <span className="text-amber-400 print:text-amber-600 mt-0.5">→</span> {item}
                </p>
              ))}
            </div>
          </div>

          {/* What We Built */}
          <div className="mb-6">
            <h2 className="font-display text-lg font-bold text-white print:text-black mb-2 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-violet-500 rounded-full inline-block" />
              What Fameboat Built
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Website & Content Hub', desc: 'Homepage with live TV, breaking news, YouTube channels, and social links' },
                { title: 'Advertiser Enquiry System', desc: 'Dedicated /advertise page with structured enquiry form' },
                { title: 'Contact Workflows', desc: 'Purpose-specific contact form with automated Google Sheets capture' },
                { title: 'Google Sheets CMS', desc: 'Settings, Ticker, Videos, Shows, Contacts, Enquiries — all self-managed' },
              ].map(({ title, desc }) => (
                <div key={title} className="border border-white/10 print:border-gray-200 rounded-lg p-3">
                  <div className="text-xs font-bold text-white print:text-black mb-0.5">{title}</div>
                  <p className="text-[11px] text-gray-400 print:text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshot */}
          <div className="mb-6 rounded-xl overflow-hidden border border-white/10 print:border-gray-200">
            <Image src={`${IMG}/metro-desktop-home.png`} alt="Metro TV Telugu Homepage" width={1440} height={900} className="w-full h-auto" />
          </div>

          {/* System Flow */}
          <div className="mb-6">
            <h2 className="font-display text-lg font-bold text-white print:text-black mb-3 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-500 rounded-full inline-block" />
              System Flow
            </h2>
            <div className="flex items-center justify-between bg-white/5 print:bg-gray-50 border border-white/10 print:border-gray-200 rounded-xl p-4">
              {['Viewer', 'Website', 'Live TV / Advertise / Contact', 'Google Sheet', 'Metro TV Team'].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="px-2.5 py-1.5 rounded-lg bg-primary/10 print:bg-violet-50 border border-primary/25 print:border-violet-200 text-violet-300 print:text-violet-700 font-semibold text-[10px] text-center whitespace-nowrap">{step}</div>
                  {i < arr.length - 1 && <span className="text-muted text-xs">→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="mb-6">
            <h2 className="font-display text-lg font-bold text-white print:text-black mb-2 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-green-500 rounded-full inline-block" />
              Outcomes
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Professional digital presence for a credible regional news channel',
                'Structured advertiser pipeline with automated lead capture',
                'All content centralised — YouTube, live TV, and news in one platform',
                'Self-managed CMS — team updates content via Google Sheets, no developer needed',
              ].map((item) => (
                <p key={item} className="text-xs text-gray-400 print:text-gray-600 flex items-start gap-1.5">
                  <span className="text-green-400 print:text-green-600 mt-0.5 font-bold">✓</span> {item}
                </p>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h2 className="font-display text-lg font-bold text-white print:text-black mb-2 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-orange-500 rounded-full inline-block" />
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'Tailwind CSS', 'YouTube API', 'Google Sheets CMS', 'Netlify', 'SEO Optimized'].map((t) => (
                <span key={t} className="text-[11px] px-2.5 py-1 rounded-md border border-white/10 print:border-gray-200 text-gray-300 print:text-gray-600 font-medium">{t}</span>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="border-t-2 border-violet-600 pt-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white print:text-black mb-0.5">Need a similar system?</div>
                <p className="text-xs text-muted">Fameboat builds connected growth systems for businesses.</p>
                <p className="text-xs text-primary font-semibold mt-1">fameboat.com &nbsp;·&nbsp; metrotvtelugu.com</p>
              </div>
              <div className="text-right">
                <Image src="/fameboat.png" alt="Fameboat" width={100} height={30} className="h-6 w-auto ml-auto mb-1" />
                <p className="text-[10px] text-muted">Simple systems for growing businesses.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
