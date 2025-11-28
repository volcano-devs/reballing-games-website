'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '#/components/ui/navigation-menu'
import {usePathname} from 'next/navigation'
import {Button} from '../ui/button'

export default function Navigation() {
  const links = [
    {name: 'Inicio', href: '/'},
    {name: 'Servicios', href: '/services'},
    {
      name: 'Tienda',
      href: '/shop',
      menu: [
        {name: 'PlayStation', href: '/shop/playstation'},
        {name: 'XBOX', href: '/shop/xbox'},
        {name: 'Nintendo', href: '/shop/nintendo'},
      ],
    },
    {name: 'Contacto', href: '/get-in-touch'},
  ]

  const pathname = usePathname()

  console.log('')

  return (
    <nav aria-label="Global">
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link) => (
            <NavigationMenuItem
              key={link.name}
              className={
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href))
                  ? 'text-rose-400'
                  : ''
              }
            >
              {link.menu ? (
                <>
                  <NavigationMenuTrigger className="bg-transparent">
                    {link.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-4">
                      {link.menu.map((sublink) => (
                        <li key={sublink.name}>
                          <NavigationMenuLink href={sublink.href}>
                            {sublink.name}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink href={link.href}>
                  {link.name}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
