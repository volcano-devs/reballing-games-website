'use client'
import Logo from '@components/Logo'
import {GamepadIcon, TagsIcon, LayerGroupIcon} from '@components/icons'
import {Link} from '@nextui-org/link'
import {Listbox, ListboxItem} from '@nextui-org/listbox'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import {Avatar} from '@nextui-org/avatar'
import {usePathname} from 'next/navigation'
import {Suspense, useState} from 'react'

import UserCard from './components/UserCard'

export interface DashboardLayoutProps {
  children: React.ReactNode
}

const NAV_LINKS = [
  // {
  //   href: '/dashboard',
  //   label: 'Inicio',
  //   icon: <HouseIcon />,
  // },
  {
    href: '/dashboard/products',
    label: 'Productos',
    icon: <GamepadIcon />,
  },
  {
    href: '/dashboard/categories',
    label: 'Categorias',
    icon: <LayerGroupIcon />,
  },
  {
    href: '/dashboard/tags',
    label: 'Tags',
    icon: <TagsIcon />,
  },
  // {
  //   href: '/dashboard/services',
  //   label: 'Servicios',
  //   icon: <MicrochipIcon />,
  // },
  // {
  //   href: '/dashboard/settings',
  //   label: 'Configuración',
  //   icon: <GearsIcon />,
  // },
]

export default function DashboardLayout({children}: DashboardLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname()

  return (
    <div className="relative">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isBlurred
        classNames={{
          base: `bg-background-600 h-20 z-10 fixed top-0 ${
            pathname === '/'
              ? ' lg:animate-[header-blur_linear_both_1ms] lg:backdrop-blur-md lg:[animation-range:0_1000px] lg:[animation-timeline:scroll()]'
              : ''
          }`,
          wrapper: 'max-w-screen-2xl mx-auto',
          menu: 'top-20',
        }}
      >
        <NavbarContent className="flex-grow-0">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Logo className="h-8 sm:h-10 md:h-12 w-28 md:w-32" />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent>
          <div className="hidden sm:flex gap-10">
            {NAV_LINKS.map(({href, icon, label}) => (
              <NavbarItem key={href} isActive={pathname === href}>
                <Link
                  color={pathname === href ? 'primary' : 'foreground'}
                  href={href}
                >
                  <div className="flex items-center gap-6">
                    {icon}
                    {label}
                  </div>
                </Link>
              </NavbarItem>
            ))}
          </div>
          <NavbarItem className="ml-auto">
            <Avatar src="/images/avatar.jpg" />
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
      <div className="absolute top-16 inset-x-0 bg-background-500">
        {children}
      </div>
    </div>
  )
}
