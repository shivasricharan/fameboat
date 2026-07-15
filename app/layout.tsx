import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter=Inter({subsets:['latin'],variable:'--font-body',display:'swap'})
const manrope=Manrope({subsets:['latin'],variable:'--font-display',display:'swap'})

export const metadata:Metadata={
 metadataBase:new URL('https://fameboat.com'),
 title:{default:'Fameboat | Digital Credibility for Established Businesses',template:'%s | Fameboat'},
 description:'Fameboat helps established founder-led businesses clarify their story, modernise their website, improve customer journeys, and capture better enquiries through one premium digital experience.',
 keywords:['digital credibility','premium business website','customer experience studio','website strategy','founder-led businesses','Hyderabad'],
 alternates:{canonical:'/'},
 openGraph:{title:'Make your digital presence match the business you have built.',description:'Digital credibility and customer experience studio for established founder-led businesses.',url:'https://fameboat.com',siteName:'Fameboat',locale:'en_IN',type:'website'},
 twitter:{card:'summary_large_image',title:'Fameboat — Digital Credibility Studio',description:'Make your digital presence match the business you have built.'},
 robots:{index:true,follow:true},
}

const schema={'@context':'https://schema.org','@type':'ProfessionalService',name:'Fameboat',url:'https://fameboat.com',areaServed:'India',address:{'@type':'PostalAddress',addressLocality:'Hyderabad',addressCountry:'IN'},description:'Digital credibility and customer experience studio for established founder-led businesses.'}

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${inter.variable} ${manrope.variable}`}><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>}
