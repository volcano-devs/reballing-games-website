'use client'

import {shoppingCart} from '@app/store/shopping-cart'
import {ShoppingBagIcon} from '@components/icons'
import {Button} from '@nextui-org/button'
import {useStore} from '@tanstack/react-store'
import {useRouter} from 'next/navigation'
import * as React from 'react'

export interface CheckoutProductListProps {}

export default function CheckoutProductList(props: CheckoutProductListProps) {
  const {cart, removeItem} = useStore(shoppingCart)

  const {refresh, push} = useRouter()

  return (
    <div className="flex flex-1 flex-col gap-8 border-gray-200 lg:border-r lg:pr-16">
      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-center text-2xl font-semibold text-gray-900">
            No hay productos en tu carrito de compras aún 🛒
          </h3>

          <Button
            variant="solid"
            color="primary"
            size="lg"
            className="mt-4"
            onClick={() => {
              push('/shop')
            }}
          >
            <ShoppingBagIcon />
            Ir a la tienda
          </Button>
        </div>
      )}

      {cart.map((product, i) => (
        <div
          className={`flex w-full gap-4 ${
            i === cart.length - 1 ? 'pt-4' : 'border-b border-gray-100 pb-16'
          }`}
        >
          <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-neutral-100">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="absolute inset-0 aspect-square h-full w-full rounded object-cover"
            />
          </div>

          <div className="flex h-24 w-full flex-col">
            <div className="flex w-full justify-between">
              <h4 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h4>

              <span className="flex items-center rounded-lg border-2 border-green-500 px-2 py-1 text-sm font-medium text-green-500 md:px-2.5 md:py-1.5">
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
  )
}
