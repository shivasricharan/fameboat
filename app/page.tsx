import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import Pricing from '@/components/Pricing'
import Industries from '@/components/Industries'
import WhyFameboat from '@/components/WhyFameboat'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <CaseStudies />
        <Pricing />
        <Industries />
        <WhyFameboat />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
