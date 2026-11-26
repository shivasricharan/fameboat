import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proof Lab',
  description: 'An indicative first view of your marketing question, based only on what you type. Not a verified diagnosis.',
  alternates: { canonical: '/proof-lab' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
