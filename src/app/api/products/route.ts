import {Product} from '#/types/models'
import {NextResponse, type NextRequest} from 'next/server'

export async function GET(_: NextRequest) {
  const res = await fetch(`${process.env.API_URL}/products`, {
    headers: {
      accept: 'application/json',
    },
    cache: 'no-cache',
  })

  const data = await res.json()

  return NextResponse.json(data) as NextResponse<APIResponse<Product>>
}
