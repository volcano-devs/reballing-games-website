import ProductListSectionPage from 'sections/site/Products/ProductList'

interface ShopPageProps {
  params: {
    category?: string[]
  }
}

async function getProducts(searchParams?: SearchParams) {
  const res = await fetch(`${process.env.NEXT_URL}/api/products`, {
    headers: {
      accept: 'application/json',
    },
    cache: 'no-cache',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getCategory(category: string) {
  const res = await fetch(
    `${process.env.NEXT_URL}/api/categories/${category}`,
    {
      headers: {
        accept: 'application/json',
      },
      cache: 'no-cache',
    },
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Shop({
  params: {category: categorySlugs},
}: ShopPageProps) {
  const data = await getProducts({})
  const categoryData = categorySlugs?.length
    ? await getCategory(categorySlugs?.pop() ?? '')
    : null

  return <ProductListSectionPage {...{data, category: categoryData?.data}} />
}
