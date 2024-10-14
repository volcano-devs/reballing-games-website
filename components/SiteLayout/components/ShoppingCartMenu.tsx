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
          className="rounded-full text-base p-2 w-max"
          size="lg"
          onClick={() => onOpenChange()}
        >
          <ShoppingBagIcon />
        </Button>
      </Badge>

      <CustomDrawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <div className="flex flex-col p-8 h-screen overflow-y-scroll">
          <h3 className="text-xl font-semibold">
            Lista de compras
            <span className="text-sm font-semibold text-gray-900 ml-1">
              ({cart.length})
            </span>
          </h3>
          <Divider className="my-4" />

          {cart.length === 0 ? (
            <>
              <p className="tracking-tighter text-lg mb-6">
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
                <h4 className="text-lg font-semibold mt-8 text-gray-900">
                  Productos Mas Vendidos
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 overflow-y-scroll">
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
                    className={`flex py-6 w-full gap-4 ${
                      i === cart.length - 1 ? '' : 'border-b border-gray-100'
                    }`}
                  >
                    <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-neutral-100">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        height={96}
                        width={80}
                        className="absolute inset-0 object-cover rounded w-full h-full aspect-square"
                      />
                    </div>

                    <div className="flex flex-col w-full h-24">
                      <div className="flex justify-between w-full">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {product.name}
                        </h4>

                        <span className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium text-green-500 h-max">
                          ${product.price}
                        </span>
                      </div>
                      <div className="flex justify-between mt-auto">
                        <span className="text-sm text-gray-500 ">
                          Qty {product.quantity}
                        </span>

                        <Button
                          className="p-0 text-sm text-blue-600 font-semibold bg-transparent h-max"
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

              <div className="mt-auto justify-self">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold text-gray-900">
                    Subtotal
                  </span>

                  <span className="text-lg font-semibold text-gray-900">
                    ${cart.reduce((acc, item) => acc + Number(item.price), 0)}
                  </span>
                </div>

                <p>El total con el envío se calculan al finalizar la compra.</p>

                <div className="flex w-full gap-2 justify-between mt-6">
                  <Button
                    color="default"
                    variant="bordered"
                    className="rounded-3xl p-7 flex-1"
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
