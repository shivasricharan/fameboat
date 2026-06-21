import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="py-16 mesh-bg">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="section-badge mb-5">About</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Growth systems for
              <span className="gradient-text"> service businesses.</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Fameboat helps service businesses connect positioning, websites, lead capture, follow-ups, and dashboards into one simple growth system.
            </p>
            <a href="/#contact" className="btn-primary text-base">Let&apos;s Talk <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
