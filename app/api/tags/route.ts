import {getRange} from 'lib/pagination'
import {createServerClient} from 'lib/supabase'
import {NextRequest, NextResponse} from 'next/server'

export async function GET(_: NextRequest, {params}: {params: {page?: number}}) {
  const supabase = createServerClient()

  const range = getRange(params?.page ?? 1)

  const response = await supabase
    .from('tags')
    .select('*', {count: 'exact'})
    .range(range.start, range.end)

  return NextResponse.json(response)
}
