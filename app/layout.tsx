import type { Metadata, Viewport } from 'next'
// Self-hosted fonts: Poppins echoes the wordmark, Figtree keeps long text easy to read.
import '@fontsource/poppins/600.css'
import '@fontsource-variable/figtree'
import './globals.css'

const title = 'Fameboat | 14-Day Marketing Proof Audit'
const description = 'Understand what your marketing is contributing and what to do next. A focused 14-day audit for founders and business owners. ₹5,000 one-time.'

export const metadata: Metadata = {
  metadataBase: new URL('https://fameboat.com'),
  title: { default: title, template: '%s | Fameboat' },
  description,
  openGraph: { title, description, url: '/', siteName: 'Fameboat', locale: 'en_IN', type: 'website', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Fameboat. Understand your marketing. Know your next move.' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
}

export const viewport: Viewport = { themeColor: '#0E1F3D' }

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Fameboat',
  url: 'https://fameboat.com',
  logo: 'https://fameboat.com/fameboat-logo.png',
  email: 'shivacharan.s@gmail.com',
  areaServed: 'IN',
  makesOffer: { '@type': 'Offer', name: '14-Day Marketing Proof Audit', price: '5000', priceCurrency: 'INR' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  )
}
