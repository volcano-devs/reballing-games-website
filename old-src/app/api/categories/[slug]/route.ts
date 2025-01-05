import {NextResponse, type NextRequest} from 'next/server'
import {Category} from 'types/models'

export async function GET(_: NextRequest, {params}: {params: {slug: string}}) {
  const res = await fetch(
    `${process.env.CMS_API_URL}/categories/${params.slug}`,
    {
      headers: {
        accept: 'application/json',
      },
      cache: 'no-cache',
    },
  )

  const data = await res.json()

  return NextResponse.json<APIResponse<Category>>(data)
}
