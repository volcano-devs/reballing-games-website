import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '#/components/ui/drawer'
import {Button} from './ui/button'
import {Menu, XIcon} from 'lucide-react'
import {links} from './TheNavigation'
import Link from 'next/link'
import React from 'react'

export interface TheMobileNavigationProps {}

export default function TheMobileNavigation(props: TheMobileNavigationProps) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="flex items-center justify-between gap-4">
            <span>Menú de Navegación</span>
            <DrawerClose>
              <XIcon className="h-5 w-5" />
            </DrawerClose>
          </DrawerTitle>
          <DrawerDescription asChild>
            <nav className="mt-4 flex flex-col gap-2">
              {links.map(({href, name, menu}) => (
                <React.Fragment key={href}>
                  <DrawerClose className="w-full justify-start" asChild>
                    <Button
                      variant="ghost"
                      size="lg"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href={href}>{name}</Link>
                    </Button>
                  </DrawerClose>
                  {menu && (
                    <ul className="mt-2 space-y-1 pl-4">
                      {menu.map(({href: subHref, name: subName}) => (
                        <li key={subHref}>
                          <DrawerClose asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start text-sm"
                              asChild
                            >
                              <Link href={subHref}>{subName}</Link>
                            </Button>
                          </DrawerClose>
                        </li>
                      ))}
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
