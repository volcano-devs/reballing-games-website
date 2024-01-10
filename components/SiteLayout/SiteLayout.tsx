'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import {useState} from 'react'
import {Link} from '@nextui-org/link'
import {usePathname} from 'next/navigation'
import {Button} from '@nextui-org/button'
import {Badge} from '@nextui-org/badge'
import Logo from '@components/Logo'

export interface SiteLayoutProps {
  children: React.ReactNode
}

const NAV_LINKS = [
  {href: '/', label: 'Inicio'},

  {
    href: '#services',
    label: 'Servicios',
  },
  {
    href: '/shop',
    label: 'Tienda',
  },
  {
    href: '/get-in-touch',
    label: 'Contacto',
  },
]

export default function SiteLayout({children}: SiteLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname()

  return (
    <div className="min-h-screen red-dark text-foreground bg-neutral-100 relative">
      <div className="lg:bg-login-bg relative">
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          classNames={{
            base: 'h-20 border-b-1 border-gray-700 bg-background-500 backdrop-filter backdrop-blur-sm bg-opacity-60 sticky top-0',
            wrapper: 'max-w-screen-2xl mx-auto',
            menu: 'top-20',
          }}
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="sm:hidden"
            />
            <NavbarBrand>
              <Logo className="h-12 md:h-14 lg:h-20" />
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent justify="end">
            <div className="hidden sm:flex gap-4">
              {NAV_LINKS.map(({href, label}) => (
                <NavbarItem key={href} isActive={pathname === href}>
                  <Link
                    color={pathname === href ? 'primary' : 'foreground'}
                    href={href}
                  >
                    {label}
                  </Link>
                </NavbarItem>
              ))}
            </div>
            <NavbarItem className="ml-auto">
              <Badge content="0" color="primary" variant="shadow">
                <Button
                  as={Link}
                  aria-label="Open cart"
                  isIconOnly
                  color="primary"
                  href="#"
                  variant="flat"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                  </svg>
                </Button>
              </Badge>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>
            {NAV_LINKS.map(({href, label}) => (
              <NavbarMenuItem key={href} isActive={pathname === href}>
                <Link
                  color={pathname === href ? 'primary' : 'foreground'}
                  href={href}
                >
                  {label}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
        <>{children}</>
      </div>
    </div>
  )
}
