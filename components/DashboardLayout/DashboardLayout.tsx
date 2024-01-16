'use client'
import Logo from '@components/Logo'
import {GamepadIcon, TagsIcon, LayerGroupIcon} from '@components/icons'
import {Button} from '@nextui-org/button'
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
import {usePathname, useRouter} from 'next/navigation'
import {Suspense, useMemo, useState} from 'react'

import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import type {Database} from 'types/database'
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

const supabase = createClientComponentClient<Database>()

export default function DashboardLayout({children}: DashboardLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname()

  return (
    <div className="h-screen bg-background-500 min-w-full max-w-none">
      <div className="h-full lg:grid lg:grid-cols-[320px_1fr]">
        <Navbar
          classNames={{
            base: 'h-20 lg:hidden border-b-1 border-gray-700 bg-background-500 backdrop-filter backdrop-blur-sm bg-opacity-60',
            menu: 'top-20',
          }}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent className="text-white">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            />
            <NavbarBrand>
              <Logo className="h-12 md:h-14 lg:h-20" />
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="ml-auto">
              <Avatar src="https://avatars.githubusercontent.com/u/36524241?v=4" />
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu className="gap-8 py-6" aria-label="Main navigation">
            {NAV_LINKS.map(({href, label, icon}) => (
              <NavbarMenuItem
                key={href}
                isActive={pathname === href}
                aria-label={label}
                onClick={() => {
                  setIsMenuOpen(false)
                  console.log('click')
                }}
              >
                <Link
                  color={pathname === href ? 'primary' : 'foreground'}
                  href={href}
                  size="sm"
                >
                  <div className="flex items-center gap-6">
                    {icon}
                    {label}
                  </div>
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
        <div className="hidden h-screen lg:flex flex-col items-start gap-4">
          <div className="p-6">
            <Logo href="/dashboard/products" />
          </div>
          <Listbox
            aria-label="Main navigation"
            aria-labelledby="main-navigation"
            classNames={{
              list: 'flex flex-col gap-1.5 p-4',
            }}
          >
            {NAV_LINKS.map(({href, label, icon}) => (
              <ListboxItem
                key={href}
                href={href}
                aria-label={label}
                variant={pathname === href ? 'solid' : 'flat'}
                color="primary"
                className={`w-full flex justify-start items-center gap-4 p-3.5 rounded-xl text-white ${
                  pathname === href ? 'bg-red-600' : ''
                }`}
                startContent={icon}
              >
                {label}
              </ListboxItem>
            ))}
          </Listbox>
          <div className="mt-auto p-4 w-full">
            <Suspense fallback={<div>Loading...</div>}>
              <UserCard />
            </Suspense>
          </div>
        </div>
        <div className="h-full lg:p-4 lg:pl-0">
          <div className="bg-background-800 text-foreground lg:rounded-xl h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
