import { Instagram, Linkedin, Facebook } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 bg-dark py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <span className="logo-dark items-center gap-2.5">
                <svg width="34" height="30" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="1,33 11,5 21,33" fill="#FFD600"/>
                  <polygon points="8.5,13 21,33 15,33" fill="#000" fillOpacity="0.22"/>
                  <polygon points="19,33 29,5 39,33" fill="#FFD600"/>
                  <polygon points="26,13 19,33 25,33" fill="#000" fillOpacity="0.22"/>
                  <rect x="1" y="33.5" width="38" height="2.5" rx="1.25" fill="#FFD600"/>
                </svg>
                <span className="font-display font-bold text-xl text-white tracking-tight">
                  fame<span className="text-primary">boat</span>
                </span>
              </span>
              <img
                src="/fameboat.png"
                alt="Fameboat"
                className="logo-light"
                style={{ height: '60px', width: 'auto', marginLeft: '-8px' }}
              />
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-5">
              AI-powered marketing and lead-gen websites for businesses ready to grow online.
              Built to help you own your growth.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={18} />, href: 'https://www.instagram.com/fameboatmedia/', label: 'Instagram' },
                { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/company/fameboatmedia/', label: 'LinkedIn' },
                { icon: <Facebook size={18} />, href: 'https://www.facebook.com/fameboatmedia/', label: 'Facebook' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-muted hover:text-white hover:border-primary/30 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-white font-semibold mb-4 text-sm">Services</div>
            <ul className="space-y-2.5">
              {[
                ['Lead-Gen Websites', '#services'],
                ['AI Marketing Retainer', '#services'],
                ['Pricing', '#pricing'],
                ['Industries', '#industries'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-muted hover:text-white text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white font-semibold mb-4 text-sm">Get in Touch</div>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <a href="mailto:shivacharan.s@gmail.com" className="hover:text-white transition-colors">
                  shivacharan.s@gmail.com
                </a>
              </li>
              <li>Hyderabad, Telangana</li>
              <li className="text-white font-medium">
                <a href="#contact" className="hover:text-primary transition-colors">
                  → Book a Free Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs">
            © {year} Fameboat. All rights reserved. Hyderabad, India.
          </p>
          <div className="flex gap-4 text-xs text-muted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
