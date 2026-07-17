import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import './fameboat.css'
import './home-updates.css'
import './proof-lab/proof-lab.css'
import './proof-lab/zero-mode.css'
import './premium-polish.css'

const inter=Inter({subsets:['latin'],variable:'--font-body',display:'swap'})
const manrope=Manrope({subsets:['latin'],variable:'--font-display',display:'swap'})

export const metadata:Metadata={
 metadataBase:new URL('https://fameboat.com'),
 title:{default:'Fameboat | Know What Actually Creates Business',template:'%s | Fameboat'},
 description:'Fameboat turns campaigns, customer paths and real outcomes into clear owner decisions.',
 keywords:['marketing measurement','campaign attribution','marketing ROI','customer journey','campaign proof','marketing accountability'],
 alternates:{canonical:'/'},
 openGraph:{title:'Know what actually creates business.',description:'Turn campaigns, customer paths and real outcomes into one clear owner decision.',url:'https://fameboat.com',siteName:'Fameboat',locale:'en_IN',type:'website'},
 twitter:{card:'summary_large_image',title:'Fameboat — Know What Creates Business',description:'See the strongest signal, the evidence gap and the next growth decision.'},
 robots:{index:true,follow:true},
}

const schema={'@context':'https://schema.org','@type':'ProfessionalService',name:'Fameboat',url:'https://fameboat.com',areaServed:'India',description:'Campaign proof and customer journey measurement for practical business growth decisions.'}

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${inter.variable} ${manrope.variable}`}><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>}
