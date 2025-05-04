import {Search, ShoppingCart} from 'lucide-react'
import Logo from './logo'
import {Button} from './ui/button'
import type {Page} from 'astro'

export interface NavigationProps {
  page: Page
}

export default function Navigation(props: NavigationProps) {
  return (
    <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 items-center">
      <nav className="hidden lg:flex space-x-6">
        <a
          className="text-sm font-medium hover:text-[#E72647] transition-colors"
          href="/"
        >
          Inicio
        </a>
        <a
          className="text-sm font-medium hover:text-[#E72647] transition-colors"
          href="/products"
        >
          Tienda
        </a>
        <a
          className="text-sm font-medium hover:text-[#E72647] transition-colors"
          href="/#services"
        >
          Servicios
        </a>
        {/* <a className="text-sm font-medium hover:text-[#E72647] transition-colors" href="/about">Nosotros</a> */}
        <a
          className="text-sm font-medium hover:text-[#E72647] transition-colors"
          href="/get-in-touch"
        >
          Contacto
        </a>
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
      </div>
    </div>
  )
}
