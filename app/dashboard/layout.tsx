import Layout from '@components/DashboardLayout'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
  return <Layout>{children}</Layout>
}
