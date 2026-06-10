import type { Metadata } from 'next'
import { Inter, Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400','600','700','800'], variable: '--font-poppins' })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Fameboat — Positioning First. Growth Second.',
  description: 'We help service businesses stand out from competitors. Clear positioning, professional websites, and growth marketing that attracts the right customers.',
  keywords: 'positioning strategy india, service business marketing, website design hyderabad, brand differentiation, competitive positioning',
  openGraph: {
    title: 'Fameboat — Why Your Competitors Are Winning (And How We Change That)',
    description: 'Most service businesses look identical to competitors. You don\'t need to. We position you to stand out.',
    url: 'https://fameboat.com',
    siteName: 'Fameboat',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('fb-theme');if(t==='light')document.documentElement.classList.add('light');})();` }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
