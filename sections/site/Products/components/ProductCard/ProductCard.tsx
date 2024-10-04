import {Button} from '@nextui-org/button'
import {Product} from 'types/models'

export default function ProductCard({product}: {product: Product}) {
  return (
    <div className="cursor-pointer p-4 rounded-2xl border border-gray-200">
      <div className="overflow-hidden w-full bg-gray-200 group-hover:opacity-80 rounded-2xl">
        <img
          src={product.media[0]?.original_url || ''}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between pb-4">
        <div>
          <h3 className="text-sm text-gray-700">
            <span className="text-md font-semibold">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {product.name}
            </span>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category.name}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{`$${Number(
          product.price,
        ).toFixed(2)}`}</p>
      </div>

      <div className="flex gap-2">
        <Button
          color="secondary"
          variant="bordered"
          className="w-full mt-4 text-gray-700 border-gray-200 border hover:border-primary-50 hover:bg-primary hover:text-white hover:shadow-lg
        transition-background  duration-500 ease-in-out"
        >
          Agregar al Carrito
        </Button>

        <Button
          color="primary"
          variant="shadow"
          className="w-full mt-4 text-white hover:border-primary-50 hover:bg-primary hover:text-white hover:shadow-lg
        transition-background  duration-500 ease-in-out"
        >
          Comprar Ahora
        </Button>
      </div>
    </div>
  )
}
