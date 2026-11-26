import type { Metadata } from 'next'
import Link from 'next/link'
import EnquiryForm from '@/components/EnquiryForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata: Metadata = { alternates: { canonical: '/' } }

const situations = [
  ['You spend on marketing but aren’t sure what it contributes.', 'Reports show reach, clicks and leads. They don’t always show what any of it did for the business.'],
  ['Enquiries arrive, but you don’t know where potential customers drop off.', 'Some call, some message, some visit. Between first contact and sale, the trail goes quiet.'],
  ['You need a clearer basis for deciding what to spend on next.', 'Before renewing a campaign or trying a new channel, you want more than a hunch.'],
]

const steps = [
  ['Agree on the business question', 'We settle what you need to decide and what the audit will and won’t cover.'],
  ['Review the available evidence', 'You share what you already have: campaign reports, enquiries, customer interactions and sales records.'],
  ['Identify patterns, gaps and uncertainties', 'We separate what the records show from what is assumed or simply unknown.'],
  ['Recommend practical next actions', 'You get a prioritised view of what to scale, stop, fix or test next.'],
]

const faqs = [
  ['Do I need perfect data?', 'No. Start with what you have, even if it is spread across reports, chats, spreadsheets and notebooks. Missing information limits what can be concluded, and the summary says where.'],
  ['Is marketing execution included?', 'No. The audit gives you observations and recommendations. Running campaigns or making the changes is not part of this engagement.'],
  ['Can you identify the source of every sale?', 'No. Some customers see several things before buying, and some sources are never recorded. We show what can be traced, what is an assumption and what remains unknown.'],
  ['What happens after I enquire?', 'We get in touch to understand your question and see whether the audit is a good fit. If it is, we agree the scope before the 14-day engagement begins. An enquiry does not commit you to buying.'],
]

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero wrap">
          <h1>Understand your marketing.<br />Know your next move.</h1>
          <div className="hero-side">
            <p>Fameboat reviews the campaign reports, enquiries and sales records you already have, then tells you what appears to be working, what is unclear and what to do next.</p>
            <p className="offer-line">14-Day Marketing Proof Audit · ₹5,000</p>
            <div className="actions">
              <a className="btn" href="#audit">Request an audit</a>
              <a className="text-link" href="#output">See what you get</a>
            </div>
          </div>
        </section>

        <section className="band navy" aria-labelledby="who-title">
          <div className="wrap">
            <h2 id="who-title">Sound familiar?</h2>
            <ul className="situations">
              {situations.map(([title, copy]) => <li key={title}><h3>{title}</h3><p>{copy}</p></li>)}
            </ul>
          </div>
        </section>

        <section className="band wrap split" id="how" aria-labelledby="how-title">
          <div>
            <h2 id="how-title">How it works</h2>
            <p className="intro">A focused 14-day engagement. The question and scope are agreed at the beginning, so you know what is being looked at.</p>
          </div>
          <ol className="steps">
            {steps.map(([title, copy]) => <li key={title}><h3>{title}</h3><p>{copy}</p></li>)}
          </ol>
        </section>

        <section className="band tint" id="output" aria-labelledby="output-title">
          <div className="wrap split">
            <div>
              <h2 id="output-title">What you get</h2>
              <p className="intro">A concise decision summary, written so you can act on it. It covers:</p>
              <ul className="covers">
                <li>The business question</li>
                <li>Evidence and observations</li>
                <li>What remains unclear</li>
                <li>Prioritised recommendations</li>
              </ul>
            </div>

            <article className="sheet" aria-labelledby="sample-title">
              <p className="fiction">Fictional example. Not a real client or result.</p>
              <h3 id="sample-title">Decision summary: a neighbourhood fitness studio</h3>

              <h4>Business question</h4>
              <p>Should we put more money into Instagram ads next month?</p>

              <h4>Evidence and observations</h4>
              <dl>
                <div><dt>Evidence</dt><dd>The ad report shows ₹30,000 spent and 90 enquiry forms in one month.</dd></div>
                <div><dt>Evidence</dt><dd>The register shows 20 new members. A source is noted for 8: five referrals, three Instagram.</dd></div>
                <div><dt className="assume">Assumption</dt><dd>The owner believes most new members come from Instagram. The records neither confirm nor rule this out.</dd></div>
              </dl>

              <h4>What remains unclear</h4>
              <p>Where the other 12 members came from, and what happened to enquiries after the first call.</p>

              <h4>Prioritised recommendations</h4>
              <ol>
                <li><b>Fix:</b> record the source and follow-up status of every enquiry.</li>
                <li><b>Test:</b> call new enquiries the same day for two weeks and note how many book a visit.</li>
                <li><b>Hold:</b> keep ad spend where it is until a month of source records exists.</li>
              </ol>
            </article>
          </div>
        </section>

        <aside className="wrap lab" aria-labelledby="lab-title">
          <div>
            <h2 id="lab-title">Not ready to enquire? Try the Proof Lab.</h2>
            <p>Answer a few questions for an indicative first view. It is based only on what you type and is not a verified diagnosis.</p>
          </div>
          <Link className="btn outline" href="/proof-lab">Open Proof Lab</Link>
        </aside>

        <section className="band navy" id="audit" aria-labelledby="audit-title">
          <div className="wrap split">
            <div>
              <h2 id="audit-title">14-Day Marketing Proof Audit</h2>
              <p className="price">₹5,000 <span>one-time engagement</span></p>
              <p>Included:</p>
              <ul className="included">
                <li>One business question and scope, agreed at the start</li>
                <li>A review of the information you already have</li>
                <li>Observations, gaps and uncertainties</li>
                <li>A concise summary with prioritised recommendations</li>
              </ul>
              <p className="note">The audit does not promise revenue growth or complete attribution. Marketing execution is not included.</p>
            </div>
            <EnquiryForm />
          </div>
        </section>

        <section className="band wrap split" id="faq" aria-labelledby="faq-title">
          <h2 id="faq-title">Common questions</h2>
          <div className="faq">
            {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
