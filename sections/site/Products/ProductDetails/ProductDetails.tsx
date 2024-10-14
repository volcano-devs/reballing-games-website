import Breadcrumbs from '@components/Breadcrumbs'
import * as React from 'react'
import type {Product} from 'types/models'
import ProductForm from './components/ProductForm'

export interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({product}: ProductDetailsProps) {
  return (
    <div className="container my-36 mx-auto p-8 bg-white">
      <Breadcrumbs
        items={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Products',
            href: '/shop',
          },
          {
            label: product.name,
            href: `/shop/${product.slug}`,
          },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <div className="w-full h-1/2  md:h-[680px] bg-gray-100 rounded-3xl overflow-hidden">
            <img
              src={product.media[0].original_url ?? ''}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-700">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-lg font-semibold text-gray-700">
                ${product.price}
              </span>

              <span className="text-sm text-gray-500">
                {product.stock > 0
                  ? product.stock < 3
                    ? 'Almost out of stock'
                    : 'In Stock'
                  : 'Out of Stock'}
              </span>
            </div>
          </div>

          <ProductForm product={product} />

          <div className="mt-10 flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-gray-700">Details</h2>
            <p
              className="text-gray-500"
              dangerouslySetInnerHTML={{__html: product.description ?? ''}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
