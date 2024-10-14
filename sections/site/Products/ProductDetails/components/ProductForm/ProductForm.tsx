'use client'

import {ShoppingBagIcon} from '@components/icons'
import {Button} from '@nextui-org/button'
import {Input} from '@nextui-org/input'
import * as React from 'react'
import type {Product} from 'types/models'

export interface ProductFormProps {
  product: Product
}

export default function ProductForm({product}: ProductFormProps) {
  const [quantity, setQuantity] = React.useState(1)

  return (
    <div className="flex gap-4 items-center">
      <Input
        value={`${quantity}`}
        className="max-w-[200px]"
        classNames={{
          inputWrapper: 'rounded-full',
          input: 'text-center',
        }}
        size="md"
        startContent={
          <Button
            size="sm"
            variant="flat"
            color="secondary"
            className="rounded-full h-8 w-8"
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
            className="rounded-full h-8 w-8"
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
        className="w-full flex-1 px-10 py-8"
      >
        <ShoppingBagIcon className="w-4 h-4" />
        {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}{' '}
      </Button>
    </div>
  )
}
