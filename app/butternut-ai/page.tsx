import type { Metadata } from 'next'
import ButternutAICaseStudyPage from '@/components/butternut-ai-case-study'

export const metadata: Metadata = {
  title: 'Butternut AI (YC24) – UX Case Study',
  description:
    'Redesigning an AI-powered website editor to help small business owners publish customizable websites with ease.',
}

export default function Page() {
  return <ButternutAICaseStudyPage />
}

