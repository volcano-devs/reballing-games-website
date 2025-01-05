import {NextResponse, type NextRequest} from 'next/server'

export async function GET(_: NextRequest, {params}: {params: {slug: string}}) {
  const res = await fetch(`${process.env.API_URL}/services/${params.slug}`, {
    headers: {
      accept: 'application/json',
    },
    cache: 'no-cache',
  })

  const data = await res.json()

  return NextResponse.json(data)
}
