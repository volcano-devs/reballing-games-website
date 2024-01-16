import Layout from '@components/DashboardLayout'

interface DashboardLayoutProps {
  children: React.ReactNode
}

async function getViewer() {
  const res = await fetch(`${process.env.NEXT_URL}/api/auth`, {
    headers: {
      accept: 'application/json',
    },
    cache: 'no-cache',
  })

  return res
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // const viewer = await getViewer().then((res) => res.json())

  // console.log(viewer)

  return <Layout>{children}</Layout>
}
