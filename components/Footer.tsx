import { Instagram, Linkedin, Facebook } from 'lucide-react'
import Link from 'next/link'

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
              Growth systems for service businesses. Positioning, websites, lead capture, dashboards, and automation — connected.
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
                ['Pricing', '/#pricing'],
                ['Contact', '/#contact'],
              ].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-muted hover:text-white text-sm transition-colors">{label}</Link></li>
              ))}
              <li><a href="mailto:shivacharan.s@gmail.com" className="text-muted hover:text-white text-sm transition-colors">shivacharan.s@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs">&copy; {year} Fameboat. All rights reserved. Hyderabad, India.</p>
          <p className="text-muted text-xs italic">&ldquo;Growth systems for service businesses.&rdquo;</p>
        </div>
      </div>
    </footer>
  )
}
