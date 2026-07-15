import type { Metadata } from 'next'
import { Inter, Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400','600','700','800'], variable: '--font-poppins' })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Fameboat | Business Systems for Clearer Growth',
  description: 'Fameboat builds connected business systems across positioning, lead capture, workflows, data, automation and leadership dashboards.',
  keywords: 'business system builder, lead management, business dashboards, workflow automation, growth systems, Hyderabad',
  openGraph: {
    title: 'Fameboat | Build the Business System Behind Your Growth',
    description: 'Connect positioning, lead capture, workflows, data and dashboards into one practical operating system.',
    url: 'https://fameboat.com',
    siteName: 'Fameboat',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
