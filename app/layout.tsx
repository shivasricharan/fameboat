import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' })

export const metadata: Metadata = {
  title: 'Fameboat — Lead-Gen Websites & AI Marketing for Every Business',
  description: 'Fameboat builds websites that capture leads directly to Google Sheets and runs AI-powered marketing for any business ready to grow online. Starting at ₹8,999.',
  keywords: 'business website india, digital marketing, local business website, lead generation website, AI marketing, google sheets crm, affordable website design, go online fast',
  openGraph: {
    title: 'Fameboat — Your Business Deserves More Than a Social Media Profile',
    description: 'We build lead-capturing websites and run AI-powered marketing for businesses ready to grow online. Leads go straight to your Google Sheet.',
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
