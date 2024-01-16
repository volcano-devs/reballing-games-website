import ProductList from 'sections/admin/products/ProductList'

export interface ProductsPageProps {
  searchParams: {
    page?: string
  }
}

async function getData({page}: {page?: number}) {
  const res = await await fetch(
    `${process.env.NEXT_URL}/api/products?page=${page ?? 1}`,
    {
      headers: {
        accept: 'application/json',
      },
      cache: 'no-cache',
    },
  )

  return res
}
export default async function ProductsPage({searchParams}: ProductsPageProps) {
  const response: Response & {
    data?: Product[]
    count?: number
  } = await getData({
    page: searchParams.page ? parseInt(searchParams.page) : 1,
  }).then((res) => res.json())

  return (
    <ProductList products={response.data! ?? []} count={response.count ?? 0} />
  )
}
