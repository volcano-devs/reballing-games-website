import Breadcrumbs from '@components/Breadcrumbs'
import * as React from 'react'
import type {Product} from 'types/models'
import ProductForm from './components/ProductForm'
import Image from 'next/image'

export interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({product}: ProductDetailsProps) {
  return (
    <div className="container mx-auto my-20 bg-white p-8 lg:my-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div>
          <div className="h-[280px] w-full overflow-hidden rounded-xl bg-gray-100 md:h-[680px]">
            <Image
              src={
                product.media[0].original_url ?? 'https://placehold.co/800x800'
              }
              alt={product.name}
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-4 flex w-full gap-4 overflow-x-auto">
            {[
              ...product.media,
              ...product.variants?.reduce(
                (acc, variant) => [...acc, ...variant.media],
                [] as Product['media'],
              ),
            ].map((media, i) => (
              <div
                key={i}
                className="h-24 w-24 min-w-24 overflow-hidden rounded-lg bg-gray-100"
              >
                <Image
                  src={media.original_url ?? 'https://placehold.co/200x200'}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
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
            <h1 className="text-2xl font-semibold tracking-tight text-gray-700">
              {product.name}
            </h1>
            <div className="mt-2 flex items-center gap-2">
              <span className="flex items-center rounded-lg border-2 border-green-500 px-2 py-1 text-sm font-medium text-green-500 md:px-2.5 md:py-1.5">
                ${product.price}
              </span>

              <span className="ml-3 border-l border-gray-300 pl-3 text-sm font-semibold text-gray-500">
                {product.stock > 0
                  ? product.stock < 3
                    ? 'Almost out of stock'
                    : 'In Stock'
                  : 'Out of Stock'}
              </span>
            </div>
          </div>

          <div className="py-6">
            <h2 className="text-md mb-4 font-semibold text-gray-700">Color</h2>
            <div className="flex gap-3.5">
              {product.variants
                .slice(0, Math.min(product.variants.length, 5))
                .map((variant, i) => (
                  <div
                    key={i}
                    style={{background: variant.color}}
                    className={`flex h-10 w-10 items-center justify-center rounded-full`}
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
