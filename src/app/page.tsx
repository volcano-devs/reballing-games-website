import {
  BrandsSection,
  HeroSection,
  // TrendingProductsSection,
} from '#/sections/home'
import {CategoriesSection} from '#/sections/shop'

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <TrendingProductsSection /> */}
      <CategoriesSection />
      <BrandsSection />
    </>
  )
}
