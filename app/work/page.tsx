import type { Metadata } from 'next'
import { SelectedWork, StandardPage } from '@/components/CredibilitySite'
export const metadata:Metadata={title:'Selected Work',description:'Selected Fameboat work across media publishing and professional association digital experiences.',alternates:{canonical:'/work'}}
export default function Page(){return <StandardPage eyebrow="Selected work" title="Digital credibility built around real organisations." intro="Each engagement begins with the organisation, its audience, its operational reality, and the experience customers need—not with a template."><SelectedWork/></StandardPage>}
