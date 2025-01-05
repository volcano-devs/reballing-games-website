import {NextRequest, NextResponse} from 'next/server'
import type {Product} from 'types/models'

export async function GET(_: NextRequest, {params}: {params: {slug: string}}) {
  const res = await fetch(
    `${process.env.CMS_API_URL}/products/${params.slug}`,
    {
      headers: {
        accept: 'application/json',
      },
      cache: 'no-cache',
    },
  )

  const data = await res.json()

  return NextResponse.json<APIResponse<Product>>(data)
}
