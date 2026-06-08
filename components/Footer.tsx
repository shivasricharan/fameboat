import { Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 bg-dark py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white text-sm">
                F
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Fame<span className="text-primary">boat</span>
              </span>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-5">
              AI-powered marketing and lead-gen websites for local businesses in Hyderabad.
              Built to help you own your growth.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
                { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
                { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
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
                ['Brand Identity', '#services'],
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
              <li>hello@fameboat.com</li>
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
