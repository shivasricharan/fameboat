import { NextRequest, NextResponse } from 'next/server'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const websitePattern = /^(https?:\/\/)?[^\s/.]+(\.[^\s/.]+)+([/?#]\S*)?$/i
const phonePattern = /^[+\d][\d\s()-]{6,24}$/

const text = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '')
// Stops visitor text being run as a formula when it lands in Google Sheets.
const safe = (value: string) => (/^[=+\-@]/.test(value) ? `'${value}` : value)
const fail = (error: string, status: number) => NextResponse.json({ error }, { status })

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body || typeof body !== 'object') return fail('The enquiry could not be read. Please try again.', 400)

  // Spam trap. Never report success for something that was not saved.
  if (body.fb_leave_blank) return fail('The enquiry was not sent. Please message us on WhatsApp instead.', 400)

  const name = text(body.name, 100)
  const business = text(body.business, 150)
  const email = text(body.email, 150)
  const phone = text(body.phone, 25)
  const website = text(body.website, 200)
  const message = text(body.message, 3000)

  if (!name || !business || !email || !message) return fail('Please complete name, business name, email and your question.', 400)
  if (!emailPattern.test(email)) return fail('Enter a valid email address.', 400)
  if (phone && !phonePattern.test(phone)) return fail('Enter a valid phone or WhatsApp number, or leave it empty.', 400)
  if (website && !websitePattern.test(website)) return fail('Enter a website such as yourbusiness.com, or leave it empty.', 400)

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL
  if (!scriptUrl) {
    console.error('GOOGLE_SCRIPT_URL not set')
    return fail('The enquiry form is unavailable right now. Please message us on WhatsApp.', 503)
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: safe(name),
        business: safe(business),
        email: safe(email),
        // A leading + would otherwise be read as a formula.
        phone: safe(phone),
        website,
        service: '14-Day Marketing Proof Audit',
        // The sheet has no website column, so the website travels with the message.
        message: safe(website ? `${message}\n\nWebsite: ${website}` : message),
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(9000),
    })
    // Apps Script answers 200 even when saving fails, so check the body.
    const result = await response.json()
    if (!response.ok || result?.success !== true) throw new Error(result?.error || `Script responded with ${response.status}`)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return fail('We could not confirm that your enquiry was received. Please try again or message us on WhatsApp.', 502)
  }
}
