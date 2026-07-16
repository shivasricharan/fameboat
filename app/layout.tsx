import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter=Inter({subsets:['latin'],variable:'--font-body',display:'swap'})
const manrope=Manrope({subsets:['latin'],variable:'--font-display',display:'swap'})

export const metadata:Metadata={
 metadataBase:new URL('https://fameboat.com'),
 title:{default:'Fameboat | Marketing-led Digital Experiences for Business',template:'%s | Fameboat'},
 description:'Fameboat helps businesses communicate clearly, build trust, improve customer journeys, and launch practical digital experiences that make it easier for customers to act.',
 keywords:['digital experience studio','business website','customer journey','website strategy','digital presence review','Hyderabad'],
 alternates:{canonical:'/'},
 openGraph:{title:'Make your business easier to understand, trust, and choose online.',description:'Marketing-led digital experiences for businesses across industries and stages.',url:'https://fameboat.com',siteName:'Fameboat',locale:'en_IN',type:'website'},
 twitter:{card:'summary_large_image',title:'Fameboat — Marketing-led Digital Experiences',description:'Make your business easier to understand, trust, and choose online.'},
 robots:{index:true,follow:true},
}

const schema={'@context':'https://schema.org','@type':'ProfessionalService',name:'Fameboat',url:'https://fameboat.com',areaServed:'India',address:{'@type':'PostalAddress',addressLocality:'Hyderabad',addressCountry:'IN'},description:'Marketing-led digital experience studio helping businesses improve clarity, trust, customer journeys, and digital implementation.'}

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${inter.variable} ${manrope.variable}`}><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>}
