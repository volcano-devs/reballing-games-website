'use client'

import CustomDrawer from '@components/Drawer/Drawer'
import {LeftArrowIcon, ShoppingBagIcon} from '@components/icons'
import {Badge} from '@nextui-org/badge'
import {Button} from '@nextui-org/button'
import {useDisclosure} from '@nextui-org/modal'
import Link from 'next/link'
import * as React from 'react'
import {Divider} from '@nextui-org/divider'
import {useStore} from '@tanstack/react-store'
import {shoppingCart} from '@app/store/shopping-cart'
import {ProductCard} from 'sections/site/Products/components'
import {usePathname, useRouter} from 'next/navigation'
import Image from 'next/image'

export interface ShoppingCartMenuProps {}

export default function ShoppingCartMenu(props: ShoppingCartMenuProps) {
  const {isOpen, onOpenChange} = useDisclosure()
  const {cart, bestSellers, getBestSellers, removeItem} = useStore(shoppingCart)

  const pathname = usePathname()

  const {push, refresh} = useRouter()

  React.useEffect(() => {
    getBestSellers()
  }, []) // eslint-disable-line

  React.useEffect(() => {
    if (isOpen) {
      onOpenChange()
    }
  }, [pathname]) // eslint-disable-line

  return (
    <>
      <Badge
        content={cart.reduce((acc, item) => acc + item.quantity, 0)}
        color="primary"
        variant="solid"
      >
        <Button
          aria-label="Open cart"
          isIconOnly
          color="primary"
          variant="solid"
          className="w-max rounded-full p-2 text-base"
          size="lg"
          onClick={() => onOpenChange()}
        >
          <ShoppingBagIcon />
        </Button>
      </Badge>

      <CustomDrawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <div className="flex h-screen flex-col overflow-y-scroll p-8">
          <h3 className="text-xl font-semibold">
            Lista de compras
            <span className="ml-1 text-sm font-semibold text-gray-900">
              ({cart.length})
            </span>
          </h3>
          <Divider className="my-4" />

          {cart.length === 0 ? (
            <>
              <p className="mb-6 text-lg tracking-tighter">
                Parece que aún no has añadido nada a la lista, ¿qué esperas para
                hacerlo?
              </p>

              <Button
                color="primary"
                variant="solid"
                className="w-max rounded-3xl p-7"
                onClick={() => onOpenChange()}
              >
                <LeftArrowIcon />
                Continuar comprando
              </Button>

              <div className="mt-8">
                <h4 className="mt-8 text-lg font-semibold text-gray-900">
                  Productos Mas Vendidos
                </h4>

                <div className="mt-4 grid grid-cols-1 gap-8 overflow-y-scroll md:grid-cols-2">
                  {bestSellers.map((product) => (
                    <ProductCard key={product.id} product={product} size="sm" />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-3">
                {cart.map((product, i) => (
                  <div
                    key={product.id}
                    className={`flex w-full gap-4 py-6 ${
                      i === cart.length - 1 ? '' : 'border-b border-gray-100'
                    }`}
                  >
                    <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-neutral-100">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        height={96}
                        width={80}
                        className="absolute inset-0 aspect-square h-full w-full rounded object-cover"
                      />
                    </div>

                    <div className="flex h-24 w-full flex-col">
                      <div className="flex w-full justify-between">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {product.name}
                        </h4>

                        <span className="flex h-max items-center rounded-lg border-2 border-green-500 px-2 py-1 text-sm font-medium text-green-500 md:px-2.5 md:py-1.5">
                          ${product.price}
                        </span>
                      </div>
                      <div className="mt-auto flex justify-between">
                        <span className="text-sm text-gray-500">
                          Qty {product.quantity}
                        </span>

                        <Button
                          className="h-max bg-transparent p-0 text-sm font-semibold text-blue-600"
                          onClick={() => {
                            removeItem(product.id)
                            refresh()
                          }}
                        >
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="justify-self mt-auto">
                <div className="mb-2 flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">
                    Subtotal
                  </span>

                  <span className="text-lg font-semibold text-gray-900">
                    ${cart.reduce((acc, item) => acc + Number(item.price), 0)}
                  </span>
                </div>

                <p>El total con el envío se calculan al finalizar la compra.</p>

                <div className="mt-6 flex w-full justify-between gap-2">
                  <Button
                    color="default"
                    variant="bordered"
                    className="flex-1 rounded-3xl p-7"
                    onClick={() => onOpenChange()}
                  >
                    <LeftArrowIcon className="hidden md:block" />
                    Continuar comprando
                  </Button>

                  <Button
                    color="primary"
                    variant="solid"
                    className="flex-1 rounded-3xl p-7"
                    onClick={() => push('/checkout')}
                  >
                    Finalizar compra
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </CustomDrawer>
    </>
  )
}
