export interface ShopByBrandPageProps {
  params: Promise<{
    brand: string
  }>
}

export default async function ShopByBrandPage(props: ShopByBrandPageProps) {
  const {brand} = await props.params
  return (
    <div>
      <h1>Shop by brand: {brand}</h1>
    </div>
  )
}
