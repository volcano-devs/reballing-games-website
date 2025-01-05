import Breadcrumbs from '@components/Breadcrumbs'
import {Divider} from '@nextui-org/divider'
import * as React from 'react'
import CheckoutProductList from './components/CheckoutItemList'
import CheckoutInfo from './components/CheckoutInformation'

export interface CheckoutProps {}

export default function Checkout(props: CheckoutProps) {
  return (
    <div className="container my-24 mx-auto p-8 bg-white">
      <div>
        <h1 className="text-3xl font-bold text-gray-700 mb-1">
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

      <Divider className="mb-4 mt-6 md:mt-16 bg-gray-200" />

      <div className="flex flex-col lg:flex-row items-stretch w-full gap-10 lg:gap-0 pt-4 md:pt-12">
        <CheckoutProductList />
        <CheckoutInfo />
      </div>
    </div>
  )
}
