'use client'

import {shoppingCart} from '@app/store/shopping-cart'
import {ShoppingBagIcon} from '@components/icons'
import {Button} from '@nextui-org/button'
import {Input} from '@nextui-org/input'
import {useStore} from '@tanstack/react-store'
import {useRouter} from 'next/navigation'
import * as React from 'react'
import type {Product} from 'types/models'

export interface ProductFormProps {
  product: Product
}

export default function ProductForm({product}: ProductFormProps) {
  const [quantity, setQuantity] = React.useState(1)

  const {addItem, cart} = useStore(shoppingCart)
  const {refresh} = useRouter()

  return (
    <>
      <div className="flex  flex-col md:flex-row gap-4 items-center">
        <Input
          value={`${quantity}`}
          className="md:max-w-[280px]"
          classNames={{
            inputWrapper: 'rounded-xl h-14',
            input: 'text-center',
          }}
          size="md"
          startContent={
            <Button
              size="sm"
              variant="flat"
              color="secondary"
              className="rounded-lg h-10 w-6"
              disabled={quantity === 1}
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </Button>
          }
          endContent={
            <Button
              size="sm"
              variant="flat"
              color="secondary"
              className="rounded-lg h-10 w-6"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          }
        />
        <Button
          disabled={product.stock === 0}
          size="lg"
          variant="solid"
          color="primary"
          className="w-full flex-1 px-10 py-4 md:py-6"
          onClick={() => {
            addItem(product, quantity)
            setQuantity(1)
            refresh()
          }}
        >
          <ShoppingBagIcon className="w-4 h-4" />
          {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}{' '}
        </Button>
      </div>
    </>
  )
}
