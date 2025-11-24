'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '#/components/ui/navigation-menu'

const links = [
  {name: 'Inicio', href: '/'},
  {name: 'Servicios', href: '/services'},
  {
    name: 'Tienda',
    href: '/shop',
    menu: [
      {name: 'PS5', href: '/shop/ps5'},
      {name: 'XBOX', href: '/shop/xbox'},
      {name: 'Nintendo', href: '/shop/nintendo'},
    ],
  },
  {name: 'Contacto', href: '/get-in-touch'},
]

export default function Navigation() {
  return (
    <nav aria-label="Global">
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link) => (
            <NavigationMenuItem key={link.name}>
              {link.menu ? (
                <>
                  <NavigationMenuTrigger>{link.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                      {link.menu.map((sublink) => (
                        <li key={sublink.name}>
                          <NavigationMenuLink
                            className="block rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                            href={sublink.href}
                          >
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
      {/* <ul className="flex items-center gap-6 text-sm">
        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Servicios
          </a>
        </li>

        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Tienda
          </a>
        </li>

        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Contacto
          </a>
        </li>
      </ul> */}
    </nav>
  )
}
