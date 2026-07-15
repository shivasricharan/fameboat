import type { Metadata } from 'next'
import { ReviewForm, StandardPage } from '@/components/CredibilitySite'
export const metadata:Metadata={title:'Contact',description:'Request a Digital Presence Review from Fameboat.',alternates:{canonical:'/contact'}}
export default function Page(){return <StandardPage eyebrow="Contact" title="Does your website represent the business you have become?" intro="Share your current digital presence and the changes happening in your business. Fameboat will identify the most important credibility and customer-experience gaps."><ReviewForm/></StandardPage>}
