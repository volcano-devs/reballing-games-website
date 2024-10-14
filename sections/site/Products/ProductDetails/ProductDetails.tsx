import Breadcrumbs from '@components/Breadcrumbs'
import * as React from 'react'
import type {Product} from 'types/models'
import ProductForm from './components/ProductForm'
import Image from 'next/image'

export interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({product}: ProductDetailsProps) {
  console.log(product)

  return (
    <div className="container my-20 lg:my-32 mx-auto p-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div>
          <div className="w-full h-[280px] md:h-[680px] bg-gray-100 rounded-xl overflow-hidden">
            <Image
              src={
                product.media[0].original_url ?? 'https://placehold.co/800x800'
              }
              alt={product.name}
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex mt-4 gap-4 w-full overflow-x-auto">
            {[
              ...product.media,
              ...product.variants?.reduce(
                (acc, variant) => [...acc, ...variant.media],
                [] as Product['media'],
              ),
            ].map((media, i) => (
              <div
                key={i}
                className="w-24 min-w-24 h-24 bg-gray-100 rounded-lg overflow-hidden"
              >
                <Image
                  src={media.original_url ?? 'https://placehold.co/200x200'}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
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
            <h1 className="text-2xl tracking-tight font-semibold text-gray-700">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium text-green-500">
                ${product.price}
              </span>

              <span className="text-sm text-gray-500 font-semibold border-l border-gray-300 pl-3 ml-3">
                {product.stock > 0
                  ? product.stock < 3
                    ? 'Almost out of stock'
                    : 'In Stock'
                  : 'Out of Stock'}
              </span>
            </div>
          </div>

          <div className="py-6">
            <h2 className="text-md font-semibold text-gray-700 mb-4">Color</h2>
            <div className="flex gap-3.5">
              {product.variants
                .slice(0, Math.min(product.variants.length, 5))
                .map((variant, i) => (
                  <div
                    key={i}
                    style={{background: variant.color}}
                    className={`flex items-center justify-center w-10 h-10 rounded-full`}
                  />
                ))}
            </div>
          </div>

          <ProductForm product={product} />

          <div className="mt-10 flex flex-col gap-2">
            <h2 className="text-md font-semibold text-gray-700">Details</h2>
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
