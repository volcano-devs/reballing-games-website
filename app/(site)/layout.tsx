import PageLayout from '@components/PageLayout'

export interface SiteLayoutProps {
  children: React.ReactNode
}

export default function SiteLayout({children}: SiteLayoutProps) {
  return <PageLayout>{children}</PageLayout>
}
