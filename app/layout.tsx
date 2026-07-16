import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import './fameboat.css'
import './home-updates.css'
import './proof-lab/proof-lab.css'

const inter=Inter({subsets:['latin'],variable:'--font-body',display:'swap'})
const manrope=Manrope({subsets:['latin'],variable:'--font-display',display:'swap'})

export const metadata:Metadata={
 metadataBase:new URL('https://fameboat.com'),
 title:{default:'Fameboat | Know What Is Actually Bringing Customers',template:'%s | Fameboat'},
 description:'Fameboat helps businesses make marketing accountable by connecting campaigns with real enquiries, visits and sales—without demanding sensitive data on day one.',
 keywords:['marketing measurement','campaign attribution','marketing ROI','customer acquisition measurement','campaign proof','marketing accountability'],
 alternates:{canonical:'/'},
 openGraph:{title:'Know what is actually bringing customers.',description:'Make your next marketing investment easier to measure, understand and improve.',url:'https://fameboat.com',siteName:'Fameboat',locale:'en_IN',type:'website'},
 twitter:{card:'summary_large_image',title:'Fameboat — Make Marketing Accountable',description:'Know what is bringing customers, what is uncertain and what to test next.'},
 robots:{index:true,follow:true},
}

const schema={'@context':'https://schema.org','@type':'ProfessionalService',name:'Fameboat',url:'https://fameboat.com',areaServed:'India',description:'Marketing measurement and campaign proof service helping businesses connect marketing activity with real customer outcomes.'}

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${inter.variable} ${manrope.variable}`}><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>}
