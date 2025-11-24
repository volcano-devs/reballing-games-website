import Breadcrumbs from '@components/Breadcrumbs'
import {Divider} from '@nextui-org/divider'
import * as React from 'react'
import CheckoutProductList from './components/CheckoutItemList'
import CheckoutInfo from './components/CheckoutInformation'

export interface CheckoutProps {}

export default function Checkout(props: CheckoutProps) {
  return (
    <div className="container mx-auto my-24 bg-white p-8">
      <div>
        <h1 className="mb-1 text-3xl font-bold text-gray-700">
          Finalizar compra
        </h1>
        <Breadcrumbs
          items={[
            {
              label: 'Home',
              href: '/',
            },
            {
              label: 'Finalizar compra',
              href: '/checkout',
            },
          ]}
        />
      </div>

      <Divider className="mt-6 mb-4 bg-gray-200 md:mt-16" />

      <div className="flex w-full flex-col items-stretch gap-10 pt-4 md:pt-12 lg:flex-row lg:gap-0">
        <CheckoutProductList />
        <CheckoutInfo />
      </div>
    </div>
  )
}
