import Navigation from './TheNavigation'
import Logo from './TheLogo'
import TheShoppingCart from './TheShoppingCart'
import TheMobileNavigation from './TheMobileNavigation'

export default function TheHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b shadow-sm backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Logo />
          </div>

          <div className="hidden md:block">
            <Navigation />
          </div>

          <div className="flex items-center gap-4">
            <TheShoppingCart />

            <div className="block md:hidden">
              <TheMobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
