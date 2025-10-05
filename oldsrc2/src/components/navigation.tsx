import {MenuIcon, Search, ShoppingCart} from 'lucide-react'
import Logo from './logo'
import {Button} from './ui/button'
import type {Page} from 'astro'

const navigationLinks = [
  {name: 'Inicio', href: '/'},
  {name: 'Tienda', href: '/products'},
  {name: 'Servicios', href: '/#services'},
  {name: 'Nosotros', href: '/about'},
  {name: 'Contacto', href: '/#get-in-touch'},
]

export interface NavigationProps {
  page: Page
}

export default function Navigation(props: NavigationProps) {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 items-center">
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <a
                  className="text-sm font-medium hover:text-[#E72647] transition-colors"
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="/"
          className="flex items-center self-center space-x-2 w-36 md:w-48 lg:mx-auto"
        >
          <Logo />
        </a>

        <div className="flex items-center justify-end space-x-4">
          {/* <Button
          variant="ghost"
          size="icon"
          className="text-gray-600 hover:text-[#E72647]"
        >
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button> */}
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-[#E72647]"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>

          <Button variant="secondary" size="icon" className="lg:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
