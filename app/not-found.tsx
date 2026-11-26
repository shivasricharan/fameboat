import Link from 'next/link'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="wrap prose">
        <h1>Page not found</h1>
        <p>The page may have moved or no longer exists.</p>
        <p><Link className="btn" href="/">Go to the home page</Link></p>
      </main>
      <Footer />
    </>
  )
}
