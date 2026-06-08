import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, business, service, message } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 })
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL
    if (!scriptUrl) {
      console.error('GOOGLE_SCRIPT_URL not set')
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, business, service, message }),
    })

    if (!response.ok) {
      throw new Error(`Script responded with ${response.status}`)
    }

    return NextResponse.json({ success: true, message: 'Got it! We will call you within 24 hours.' })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
