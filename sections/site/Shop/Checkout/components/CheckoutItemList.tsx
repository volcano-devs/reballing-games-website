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
    <div className="flex flex-col gap-8 flex-1 lg:border-r border-gray-200 lg:pr-16">
      {cart.length === 0 && (
        <div className="flex flex-col gap-4 items-center justify-center">
          <h3 className="text-2xl font-semibold text-center text-gray-900">
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
              className="absolute inset-0 object-cover rounded w-full h-full aspect-square"
            />
          </div>

          <div className="flex flex-col w-full h-24">
            <div className="flex justify-between w-full">
              <h4 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h4>

              <span className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium text-green-500">
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
  )
}
