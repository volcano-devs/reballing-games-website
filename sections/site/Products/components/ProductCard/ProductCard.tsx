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
        className={`relative group overflow-hidden w-full ${sizeClasses.image[size]} bg-gray-200 rounded-xl`}
      >
        <div className={`overflow-hidden w-full h-full bg-gray-200`}>
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
        <div
          className="z-50 absolute bottom-0 left-0 w-full overflow-hidden h-[40%]  flex items-end pb-8 px-4 justify-center
          transition-transform duration-[200ms] ease
          transform translate-y-full group-hover:translate-y-0
          bg-gradient-to-t from-gray-800 to-transparent rounded-xl
        "
        >
          <Button
            color="primary"
            variant="shadow"
            className="w-max z-50 text-white text-xs rounded-xl"
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
          <div className="flex gap-2 mb-4">
            {product.variants.map((variant, i) => (
              <div
                key={i}
                style={{background: variant.color}}
                className={`flex items-center justify-center w-4 h-4 rounded-full`}
              />
            ))}
          </div>
          <div className="flex justify-between text-sm w-full">
            <span className={`${sizeClasses.title[size]} font-semibold`}>
              {product.name}
            </span>

            <span className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium text-green-500 h-max">
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
