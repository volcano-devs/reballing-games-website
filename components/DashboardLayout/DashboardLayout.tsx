'use client'
import Logo from '@components/Logo'
import {
  HouseIcon,
  GamepadIcon,
  MicrochipIcon,
  TagsIcon,
  LayerGroupIcon,
  GearsIcon,
} from '@components/icons'
import {Badge} from '@nextui-org/badge'
import {Button} from '@nextui-org/button'
import {Link} from '@nextui-org/link'
import {Listbox, ListboxItem, ListboxSection} from '@nextui-org/listbox'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import {User} from '@nextui-org/user'
import {Avatar} from '@nextui-org/avatar'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import {Chip} from '@nextui-org/chip'
import {Card} from '@nextui-org/card'

export interface DashboardLayoutProps {
  children: React.ReactNode
}

const NAV_LINKS = [
  {
    href: '/dashboard',
    label: 'Inicio',
    icon: <HouseIcon />,
  },
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
  {
    href: '/dashboard/services',
    label: 'Servicios',
    icon: <MicrochipIcon />,
  },
  {
    href: '/dashboard/settings',
    label: 'Configuración',
    icon: <GearsIcon />,
  },
]

export default function DashboardLayout({children}: DashboardLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname()

  return (
    <div className="h-screen bg-background min-w-full max-w-none">
      <div className="h-full lg:grid lg:grid-cols-[320px_1fr]">
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          className="bg-background h-24 lg:hidden border-b-1 border-gray-700"
        >
          <NavbarContent className="text-white">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            />
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="ml-auto">
              <Avatar src="https://avatars.githubusercontent.com/u/36524241?v=4" />
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
        <div className="hidden bg-background h-screen lg:flex flex-col items-start gap-4">
          <div className="p-6">
            <Logo />
          </div>
          <Listbox className="p-4">
            {NAV_LINKS.map(({href, label, icon}) => (
              <ListboxItem
                key={href}
                className="text-white px-4 py-3.5 rounded-md"
                variant="flat"
                color="primary"
                startContent={icon}
              >
                {label}
              </ListboxItem>
            ))}
          </Listbox>
          <div className="mt-auto p-4 w-full">
            <Card className="p-4 bg-[#0B0C26]">
              <User
                className="text-white mt-auto"
                name="Kevin Aguilar"
                description={
                  <Chip color="primary" variant="flat" size="sm">
                    Administrador
                  </Chip>
                }
                avatarProps={{
                  src: 'https://avatars.githubusercontent.com/u/36524241?v=4',
                }}
              />
            </Card>
          </div>
        </div>
        <div className="h-full lg:p-4">
          <div className="bg-white lg:rounded-xl h-full">{children}</div>
        </div>
      </div>
    </div>
  )
}
