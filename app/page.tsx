import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Founder from '@/components/Founder'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import CaseStudies from '@/components/CaseStudies'
import WhyFameboat from '@/components/WhyFameboat'
import Industries from '@/components/Industries'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <Services />
        <HowItWorks />
        <CaseStudies />
        <WhyFameboat />
        <Industries />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
