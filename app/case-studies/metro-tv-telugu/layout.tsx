import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Metro TV Telugu Case Study | Fameboat',
  description: 'How Fameboat built a complete digital platform for Metro TV Telugu — website, live TV streaming, advertiser lead capture, and Google Sheets CMS.',
  openGraph: {
    title: 'Metro TV Telugu Case Study | Fameboat',
    description: 'Website, live streaming, CMS, and lead capture — built as one connected system for a Telugu news channel.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
