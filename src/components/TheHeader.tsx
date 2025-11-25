import Navigation from './TheNavigation'
import Logo from './TheLogo'
import {Button} from './ui/button'
import {Menu, ShoppingCart} from 'lucide-react'

export default function TheHeader() {
  return (
    <header className="dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Logo />
          </div>

          <div className="hidden md:block">
            <Navigation />
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost">
              $0
              <ShoppingCart />
            </Button>

            <div className="block md:hidden">
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
