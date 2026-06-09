import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Fameboat — Your In-House Growth Team',
  description: 'Fameboat is a founder-led marketing agency that designs, builds, and markets your digital presence. Premium websites and growth marketing for service businesses. Based in Hyderabad, India.',
  keywords: 'digital marketing agency india, website design hyderabad, growth marketing, service business marketing, founder-led agency, brand strategy india',
  openGraph: {
    title: 'Fameboat — Your In-House Growth Team. Without the Overhead.',
    description: 'We design, build, and market your digital presence. Strategy first. Results measured in revenue.',
    url: 'https://fameboat.com',
    siteName: 'Fameboat',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('fb-theme');if(t==='light')document.documentElement.classList.add('light');})();` }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
