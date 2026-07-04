'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    name: 'Metro TV Telugu',
    category: 'Media & Broadcasting',
    challenge: 'Build a clear digital presence and make advertiser enquiries easier to capture.',
    solution: 'Website, advertiser enquiry flow, contact capture, and channel information structure.',
    impact: 'Improved accessibility, enquiry capture, and advertiser contact experience.',
    image: '/case-studies/metro-tv/metro-desktop-home.png',
    href: '/case-studies/metro-tv-telugu',
    tags: ['Website', 'CMS', 'Lead Capture'],
  },
  {
    name: 'Telangana Architecture Festival / IIA',
    category: 'Architecture & Events',
    challenge: 'Manage registrations, payments, approvals, participant communication, and reporting for a live event.',
    solution: 'Registration flow, payment screenshot upload, data capture, approval workflow, confirmation emails, and operational dashboards.',
    impact: 'Created one connected system for registrations, verification, communication, and reporting.',
    image: null,
    href: null,
    tags: ['Dashboards', 'Automation', 'Workflows'],
  },
]

export default function MarketExamples() {
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
    <section ref={ref} id="work" className="py-16 mesh-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10 reveal">
          <div className="section-badge mb-4">Work</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Built for
            <span className="gradient-text"> real business needs.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {caseStudies.map(({ name, category, challenge, solution, impact, image, href, tags }, i) => {
            const card = (
              <div
                className="glass rounded-2xl border border-white/8 overflow-hidden card-hover reveal group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {image && (
                  <div className="relative overflow-hidden">
                    <Image src={image} alt={name} width={720} height={400} className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]" />
                  </div>
                )}
                <div className="px-5 py-3 border-b border-white/5">
                  <span className="text-xs font-bold text-muted uppercase tracking-wider">{category}</span>
                  <h3 className="font-display text-lg font-bold text-white mt-0.5">{name}</h3>
                </div>
                <div className="p-5 space-y-3">
                  <div>
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-0.5">Challenge</div>
                    <p className="text-muted text-sm">{challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-0.5">Solution</div>
                    <p className="text-muted text-sm">{solution}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-0.5">Impact</div>
                    <p className="text-white text-sm font-medium">{impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-muted border border-white/8">{tag}</span>
                    ))}
                  </div>
                  {href && (
                    <div className="pt-1">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                        View Case Study <ArrowRight size={14} />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )

            return href ? (
              <Link key={name} href={href} className="block">
                {card}
              </Link>
            ) : (
              <div key={name}>{card}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
