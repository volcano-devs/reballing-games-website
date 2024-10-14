'use client'

import {shoppingCart} from '@app/store/shopping-cart'
import {Button} from '@nextui-org/button'
import {Input} from '@nextui-org/input'
import {useStore} from '@tanstack/react-store'
import * as React from 'react'

export interface CheckoutInfoProps {}

export default function CheckoutInfo(props: CheckoutInfoProps) {
  const {cart} = useStore(shoppingCart)

  return (
    <div className="lg:pl-16 lg:min-w-[570px]">
      <div className="mb-14">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Información de envío
        </h2>
        <form className="flex flex-col gap-4">
          <Input
            placeholder="Nombre"
            variant="bordered"
            className="mb-2"
            label="Nombre Completo"
          />

          <div className="flex gap-4">
            <Input
              variant="bordered"
              className="mb-2"
              label="Teléfono"
              placeholder="+505 8888-8888"
            />
            <Input
              variant="bordered"
              className="mb-2"
              label="Email"
              placeholder="kevin@example.com"
            />
          </div>

          <Input
            variant="bordered"
            className="mb-2"
            label="Dirección"
            placeholder="Bo. El Centro, 3ra Calle, Casa #123"
          />
        </form>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-lg font-semibold text-gray-900">Subtotal</span>

        <span className="text-lg font-semibold text-gray-900">
          ${cart.reduce((acc, item) => acc + Number(item.price), 0)}
        </span>
      </div>

      <p>El total con el envío se calculan al finalizar la compra.</p>
      <Button
        color="primary"
        variant="solid"
        className="w-full rounded-3xl p-7 mt-10"
        onClick={() => {}}
      >
        Finalizar compra
      </Button>
    </div>
  )
}
