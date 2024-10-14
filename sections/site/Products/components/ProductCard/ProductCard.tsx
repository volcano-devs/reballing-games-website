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
        className={`relative group overflow-hidden w-full ${sizeClasses.image[size]} bg-gray-200 rounded-3xl`}
      >
        <div className={`overflow-hidden w-full h-full bg-gray-200`}>
          <Image
            src={
              product.media[0]?.original_url || 'https://placehold.co/800x800'
            }
            alt={product.name}
            width={640}
            height={640}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          className="z-50 absolute bottom-0 left-0 w-full overflow-hidden h-[40%]  flex items-end pb-8 px-4 justify-center
          transition-transform duration-[500ms] ease
          transform translate-y-full group-hover:translate-y-0
          bg-gradient-to-t from-gray-800 to-transparent rounded-3xl
        "
        >
          <Button
            color="primary"
            variant="shadow"
            className="w-max z-50 text-white text-sm rounded-xl"
            onClick={() => {
              addItem(product, 1)
              refresh()
            }}
          >
            <ShoppingBagIcon />
            Agregar al carrito
          </Button>
        </div>
      </div>
      <div className="mt-8 flex justify-between pb-4">
        <div>
          <h3 className="text-sm text-gray-700">
            <span className={`${sizeClasses.title[size]} font-semibold `}>
              {product.name}
            </span>
          </h3>
          <p className={`mb-4 ${sizeClasses.category[size]} text-gray-500`}>
            {product.category.name}
          </p>
        </div>

        <Chip
          variant="solid"
          className="text-sm font-medium text-green-800 bg-green-200"
        >{`$${Number(product.price).toFixed(2)}`}</Chip>
      </div>
    </div>
  )
}
