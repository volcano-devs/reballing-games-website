import {NextResponse, type NextRequest} from 'next/server'

export async function GET(
  _: NextRequest,
  {params}: {params: Promise<{slug: string}>},
) {
  const {slug} = await params

  const res = await fetch(`${process.env.API_URL}/services/${slug}`, {
    headers: {
      accept: 'application/json',
    },
    cache: 'no-cache',
  })

  const data = await res.json()

  return NextResponse.json(data)
}
