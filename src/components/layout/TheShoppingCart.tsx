'use client'

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
import {ShoppingCart, XIcon} from 'lucide-react'
import {useMediaQuery} from 'usehooks-ts'
import {Button} from '#/components/ui/button'

export interface TheShoppingCartProps {}

export default function TheShoppingCart(props: TheShoppingCartProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Drawer direction={isMobile ? 'bottom' : 'right'}>
      <DrawerTrigger asChild>
        <Button variant="ghost">
          $0
          <ShoppingCart />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="flex items-center justify-center gap-4 md:justify-between">
            <span>Carrito de Compras</span>
            <DrawerClose className="hidden md:inline-flex">
              <XIcon className="h-5 w-5" />
            </DrawerClose>
          </DrawerTitle>
          <DrawerDescription>
            Tu carrito de compras está vacío.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="gap-4">
          {/* <Button>Proceder al Pago</Button> */}
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              Cerrar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
