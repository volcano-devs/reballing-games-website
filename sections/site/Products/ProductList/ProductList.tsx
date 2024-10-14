'use client'

import * as React from 'react'
import {ProductCard} from '../components'
import {Pagination} from '@nextui-org/pagination'
import {Category, Product} from 'types/models'
import {Breadcrumbs, BreadcrumbItem} from '@nextui-org/breadcrumbs'

export interface ProductListSectionProps {
  data: APIResponse<Product[]>
  category?: Category | null
}

export default function ProductListSectionPage({
  data: {data: products, meta},
  category,
}: ProductListSectionProps) {
  const breadcrumbs = React.useMemo(() => {
    const items = [
      {
        label: 'Home',
        href: '/',
      },
    ]

    if (category?.parent) {
      items.push({
        label: category?.parent?.name,
        href: `/shop/${category.parent.slug}`,
      })
    }

    items.push({
      label: category?.name ?? 'All Products',
      href: category ? `/products?category=${category.slug}` : '/shop',
    })

    return items
  }, [category])

  return (
    <div className="container min-h-[80vh] mx-auto mt-20 flex flex-col gap-2 text-black py-16 px-4">
      <div className="flex gap-4 justify-between text-center items-center pb-16 px-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl w-max font-bold text-gray-700 tracking-tighter">
            {`${category?.name ?? 'All Products'}`}
            <span className="text-sm text-gray-700 dark:text-gray-400 ml-2 tracking-normal font-semibold">
              {'('}
              {products.length}
              {' Result'}
              {products.length === 1 && 's'})
            </span>
          </h1>

          <Breadcrumbs className="text-sm text-gray-500">
            {breadcrumbs.map((breadcrumb, i) => (
              <BreadcrumbItem
                key={i}
                href={breadcrumb?.href}
                classNames={{
                  base: 'text-gray-500 hover:text-gray-700',
                  item: 'text-gray-500 hover:text-gray-700',
                  separator: 'text-gray-500',
                }}
                onClick={() => {
                  console.log('Home clicked')
                }}
              >
                {breadcrumb?.label}
              </BreadcrumbItem>
            ))}
          </Breadcrumbs>
        </div>

        {/* <Input
      classNames={{
        base: 'max-w-full sm:max-w-[10rem] h-10',
        mainWrapper: 'h-full',
        input: 'text-small',
        inputWrapper:
          'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
      }}
      placeholder="Type to search..."
      size="sm"
      startContent={<MagnifyingGlassIcon className="w-5 h-5" />}
      type="search"
    /> */}
      </div>

      <div className="grid grid-cols-1 gap-8 xl:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-10">
        {products.map((_, i) => (
          <ProductCard key={i} product={products[i]} />
        ))}
      </div>

      <Pagination
        total={meta!.last_page}
        showControls
        initialPage={meta!.current_page}
        variant="light"
        color="secondary"
        className="self-center"
      />
    </div>
  )
}
