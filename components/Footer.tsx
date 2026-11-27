import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <img src="/fameboat-logo.png" alt="Fameboat" width={679} height={149} />
        <p>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <br />Hyderabad, India
        </p>
        <p><Link href="/privacy">Privacy</Link></p>
      </div>
    </footer>
  )
}
