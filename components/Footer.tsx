import Link from 'next/link'
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <img src="/fameboat-logo.png" alt="Fameboat" width={679} height={149} />
        <p>
          WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a>
          <br />Hyderabad, India
        </p>
        <p><Link href="/privacy">Privacy</Link></p>
      </div>
    </footer>
  )
}
