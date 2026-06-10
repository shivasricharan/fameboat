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
              Positioning first. Growth second. We help service businesses stand out from competitors and close better customers.
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
            <div className="text-white font-semibold mb-4 text-sm">Services</div>
            <ul className="space-y-2.5">
              {[['Positioning Strategy', '/services#positioning'], ['Positioned Website', '/services#website'], ['Launch + Growth', '/services#growth'], ['Pricing', '/pricing']].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-muted hover:text-white text-sm transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold mb-4 text-sm">Company</div>
            <ul className="space-y-2.5">
              {[['How We Work', '/how-we-work'], ['About', '/about'], ['Contact', '/#contact']].map(([label, href]) => (
                <li key={label}><Link href={href} className="text-muted hover:text-white text-sm transition-colors">{label}</Link></li>
              ))}
              <li><a href="mailto:shivacharan.s@gmail.com" className="text-muted hover:text-white text-sm transition-colors">shivacharan.s@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs">© {year} Fameboat. All rights reserved. Hyderabad, India.</p>
          <p className="text-muted text-xs italic">"Positioning First. Growth Second."</p>
        </div>
      </div>
    </footer>
  )
}
