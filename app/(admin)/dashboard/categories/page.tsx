import ky from 'ky'
import {getRange} from 'lib/pagination'
import {createServerClient} from 'lib/supabase'
import CategoriesList from 'sections/admin/categories/CategoriesList'

export interface CategoriesPageProps {
  searchParams: {
    page?: string
  }
}

async function getCategories({page}: {page?: number}) {
  const res = await await fetch(
    `${process.env.NEXT_URL}/api/categories?page=${page ?? 1}`,
    {
      headers: {
        accept: 'application/json',
      },
      cache: 'no-cache',
    },
  )

  return res
}

export default async function CategoriesPage({
  searchParams,
}: CategoriesPageProps) {
  const response: Response & {
    data?: Category[]
    count?: number
  } = await getCategories({
    page: searchParams.page ? parseInt(searchParams.page) : 1,
  }).then((res) => res.json())

  return (
    <CategoriesList
      categories={response.data! ?? []}
      count={response.count ?? 0}
    />
  )
}
