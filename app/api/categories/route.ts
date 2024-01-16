import {getRange} from 'lib/pagination'
import {createServerClient} from 'lib/supabase'
import {NextRequest, NextResponse} from 'next/server'

export async function GET(_: NextRequest, {params}: {params: {page?: number}}) {
  const supabase = createServerClient()

  const range = getRange(params?.page ?? 1)

  const response = await supabase
    .from('categories')
    .select('*, categories(parent_id, name)', {count: 'exact'})
    .range(range.start, range.end)

  return NextResponse.json(response)
}
