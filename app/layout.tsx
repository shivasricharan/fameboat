import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' })

export const metadata: Metadata = {
  title: 'Fameboat — Lead-Gen Websites & AI Marketing for Local Businesses',
  description: 'Fameboat builds websites that capture leads directly to Google Sheets, and runs AI-powered marketing for local businesses in Hyderabad. Starting at ₹8,999.',
  keywords: 'website design hyderabad, digital marketing hyderabad, local business website, lead generation, AI marketing, google sheets crm, affordable website hyderabad',
  openGraph: {
    title: 'Fameboat — Your Business Deserves More Than an Instagram Page',
    description: 'We build lead-capturing websites and AI-powered marketing for local businesses in Hyderabad. Leads go straight to your Google Sheet.',
    url: 'https://fameboat.com',
    siteName: 'Fameboat',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
