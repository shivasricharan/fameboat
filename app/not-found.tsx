import Link from 'next/link'
import { Header, Footer } from '@/components/CredibilitySite'
export default function NotFound(){return <><Header/><main className="page-hero"><div className="shell narrow"><p className="section-label">404</p><h1>This page no longer represents Fameboat.</h1><p className="lead-sm">The website has been rebuilt around digital credibility for established founder-led businesses.</p><Link className="button button-primary" href="/">Return to Fameboat</Link></div></main><Footer/></>}
