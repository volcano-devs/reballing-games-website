import * as React from 'react'
import ProductDetails from 'sections/site/Products/ProductDetails/ProductDetails'

export interface ProductDetailsPageProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string) {
  const res = await fetch(`${process.env.NEXT_URL}/api/products/${slug}`, {
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

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const {data: product} = await getProduct(params.slug)

  return <ProductDetails product={product} />
}
