import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { CONTACT_EMAIL } from '@/lib'

export const metadata: Metadata = { title: 'Privacy', description: 'How Fameboat handles information shared through this website.', alternates: { canonical: '/privacy' } }

export default function Privacy() {
  return (
    <>
      <Header />
      <main id="main" className="wrap prose">
        <h1>Privacy</h1>
        <h2>What we collect</h2>
        <p>When you send an enquiry, we receive your name, business name, email address, your question, and your phone number and website if you choose to add them.</p>
        <h2>How we use it</h2>
        <p>We use it to reply to you, confirm fit and scope, and discuss a possible engagement. We do not sell your information.</p>
        <h2>Who processes it</h2>
        <p>The website is hosted on Netlify. Enquiries are passed to Google Apps Script, which stores them in a Google Sheet and sends an email notification.</p>
        <h2>Proof Lab</h2>
        <p>What you type into the Proof Lab is processed in your browser. It is not sent to us or saved.</p>
        <h2>Tracking</h2>
        <p>This website’s code does not set advertising or analytics cookies. The hosting provider may keep standard server logs.</p>
        <h2>Your choices</h2>
        <p>To see, correct or delete what you have sent, email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
        <p>Last updated: 27 November 2026.</p>
      </main>
      <Footer />
    </>
  )
}
