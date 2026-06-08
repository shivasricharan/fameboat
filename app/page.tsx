import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import WebsiteService from '@/components/WebsiteService'
import HowItWorks from '@/components/HowItWorks'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Industries from '@/components/Industries'
import WhyFameboat from '@/components/WhyFameboat'
import CaseStudies from '@/components/CaseStudies'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WebsiteService />
        <HowItWorks />
        <Services />
        <Pricing />
        <Industries />
        <WhyFameboat />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
