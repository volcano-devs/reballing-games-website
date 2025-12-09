import Breadcrumbs from '#/components/Breadcrumbs'
import {CategoriesSection} from '#/sections/shop'

export interface ShopByBrandPageProps {
  params: Promise<{
    brand: string
  }>
}

export default async function ShopByBrandPage(props: ShopByBrandPageProps) {
  const {brand} = await props.params

  const pathBrand = brand ? [{label: brand, href: `/shop/${brand}`}] : []

  return (
    <>
      <Breadcrumbs
        pageTitle={brand ? `Tienda - ${brand}` : 'Tienda'}
        paths={[
          {label: 'Inicio', href: '/'},
          {label: 'Tienda', href: '/shop'},
          ...pathBrand,
        ]}
      />

      <CategoriesSection />
    </>
  )
}
