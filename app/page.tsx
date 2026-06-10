import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TheProblem from '@/components/TheProblem'
import Framework from '@/components/Framework'
import ServicesOverview from '@/components/ServicesOverview'
import MarketExamples from '@/components/MarketExamples'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheProblem />
        <Framework />
        <ServicesOverview />
        <MarketExamples />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
