'use client'
import {Product} from 'types/models'
import {Chip} from '@nextui-org/chip'
import {Button} from '@nextui-org/button'
import {ChevronRightIcon, ShoppingBagIcon} from '@components/icons'
import {useRouter} from 'next/navigation'
import {shoppingCart} from '@app/store/shopping-cart'
import {useStore} from '@tanstack/react-store'
import Image from 'next/image'

interface ProductCardProps {
  product: Product
  size?: 'sm' | 'md' | 'lg'
}

export default function ProductCard({product, size = 'lg'}: ProductCardProps) {
  const {push, refresh} = useRouter()

  const {addItem} = useStore(shoppingCart)

  const sizeClasses = {
    image: {
      sm: 'h-[190px]',
      md: 'h-[300px]',
      lg: 'h-[350px]',
    },
    title: {
      sm: 'text-base',
      md: 'text-sm',
      lg: 'text-lg',
    },
    category: {
      sm: 'text-xs',
      md: 'text-xs',
      lg: 'text-sm',
    },
  }
  return (
    <div
      className="relative cursor-pointer lg:max-w-[340px]"
      onClick={() => push(`/products/${product.slug}`)}
    >
      <div
        className={`group relative w-full overflow-hidden ${sizeClasses.image[size]} rounded-xl bg-gray-200`}
      >
        <div className={`h-full w-full overflow-hidden bg-gray-200`}>
          <Image
            src={
              product.media[0]?.original_url || 'https://placehold.co/800x800'
            }
            alt={product.name}
            width={640}
            height={640}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="ease absolute bottom-0 left-0 z-50 flex h-[40%] w-full translate-y-full transform items-end justify-center overflow-hidden rounded-xl bg-gradient-to-t from-gray-800 to-transparent px-4 pb-8 transition-transform duration-[200ms] group-hover:translate-y-0">
          <Button
            color="primary"
            variant="shadow"
            className="z-50 w-max rounded-xl text-xs text-white"
            onClick={() => {
              addItem(product, 1, product.variants[0])
              refresh()
            }}
          >
            <ShoppingBagIcon />
            Agregar al carrito
          </Button>
        </div>
      </div>
      <div className="mt-6 flex justify-between pb-4">
        <div className="w-full">
          {product.variants && (
            <div className="mb-4 flex gap-2">
              {product.variants?.map((variant, i) => (
                <div
                  key={i}
                  style={{background: variant.color}}
                  className={`flex h-4 w-4 items-center justify-center rounded-full`}
                />
              ))}
            </div>
          )}
          <div className="flex w-full justify-between text-sm">
            <span className={`${sizeClasses.title[size]} font-semibold`}>
              {product.name}
            </span>

            <span className="flex h-max items-center rounded-lg border-2 border-green-500 px-2 py-1 text-sm font-medium text-green-500 md:px-2.5 md:py-1.5">
              {`$${Number(product.price).toFixed(2)}`}
            </span>
          </div>
          <p className={`${sizeClasses.category[size]} text-gray-500`}>
            {product.category.name}
          </p>
        </div>
      </div>
    </div>
  )
}
