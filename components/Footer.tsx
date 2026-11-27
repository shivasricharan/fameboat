import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <img src="/fameboat-logo.png" alt="Fameboat" width={679} height={149} />
        <p>Hyderabad, India</p>
        <p><Link href="/privacy">Privacy</Link></p>
      </div>
    </footer>
  )
}
