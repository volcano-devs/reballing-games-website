import {getRange} from 'lib/pagination'
import {createServerClient} from 'lib/supabase'
import CategoriesList from 'sections/admin/categories/CategoriesList'

export interface CategoriesPageProps {
  searchParams: {
    page?: string
  }
}

async function getCategories({page}: {page?: number}) {
  const supabase = createServerClient()

  const range = getRange(page ?? 1)

  const categories = await supabase
    .from('categories')
    .select('*, categories(parent_id, name)', {count: 'exact'})
    .range(range.start, range.end)

  return categories
}

export default async function CategoriesPage({
  searchParams,
}: CategoriesPageProps) {
  const response = await getCategories({
    page: searchParams.page ? parseInt(searchParams.page) : 1,
  })

  console.log(response)

  return (
    <CategoriesList categories={response.data ?? []} count={response.count} />
  )
}
