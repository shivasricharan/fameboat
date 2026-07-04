import { Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const WA_URL = 'https://wa.me/919849016794?text=Hi%20Fameboat%2C%20I%20want%20to%20discuss%20a%20growth%20system%20for%20my%20business.'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/8 bg-dark py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <div className="fb-logo-wrap">
                <img src="/fameboat.png" alt="Fameboat" style={{ height: '40px', width: 'auto' }} />
              </div>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-5">
              Simple systems for growing businesses. Positioning, websites, lead capture, dashboards, and automation — connected.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={18} />, href: 'https://www.instagram.com/fameboatmedia/', label: 'Instagram' },
                { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/company/fameboatmedia/', label: 'LinkedIn' },
                { icon: <Facebook size={18} />, href: 'https://www.facebook.com/fameboatmedia/', label: 'Facebook' },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-muted hover:text-white transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-4 text-sm">Solutions</div>
            <ul className="space-y-2.5">
              {[
                ['Positioning Sprint', '/#solutions'],
                ['Growth Website', '/#solutions'],
                ['Lead Visibility', '/#solutions'],
                ['Dashboards', '/#solutions'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-muted hover:text-white text-sm transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold mb-4 text-sm">Company</div>
            <ul className="space-y-2.5">
              {[
                ['How It Works', '/#how-it-works'],
                ['Case Studies', '/#work'],
                ['Pricing', '/#pricing'],
                ['Contact', '/#contact'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-muted hover:text-white text-sm transition-colors">{label}</Link></li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-white font-semibold text-sm mb-2">Have a business challenge?</p>
              <p className="text-muted text-xs mb-3">Let&apos;s talk on WhatsApp.</p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Us"
                className="btn-whatsapp inline-flex items-center gap-2 text-sm font-semibold"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <p className="text-muted text-xs mt-2">Typically responds within a few hours.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs">&copy; {year} Fameboat. All rights reserved. Hyderabad, India.</p>
          <p className="text-muted text-xs italic">&ldquo;Find missed revenue opportunities before they disappear.&rdquo;</p>
        </div>
      </div>
    </footer>
  )
}
