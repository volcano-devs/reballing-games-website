'use client'

import {Button} from '@nextui-org/button'
import {Input} from '@nextui-org/input'
import {type BaseSyntheticEvent, useState} from 'react'
import type {ServiceOrder, Status} from 'types/models'

export interface ServiceDetailsSectionProps {
  service?: ServiceOrder
}

export default function ServiceDetailsSection({
  service,
}: ServiceDetailsSectionProps) {
  const [serviceOrder, setServiceOrder] = useState(service)

  return (
    <>
      <form onSubmit={handleService}>
        <Input
          type="text"
          name="order"
          variant="flat"
          color="secondary"
          placeholder="Número de orden, e.g. OR-0001"
          defaultValue={serviceOrder?.order_id}
          endContent={
            <Button type="submit" color="primary">
              Consultar
            </Button>
          }
          required
        />
      </form>
      <div className="text-xl">
        {serviceOrder?.date && (
          <h2 className="text-center text-gray-500">
            Fecha de ingreso: {serviceOrder.date}
          </h2>
        )}
      </div>
      <div className="w-full">
        {!serviceOrder?.order_id ? (
          <p className="text-center">No hay información disponible.</p>
        ) : (
          <span className="h-6 w-6 primary">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
            </svg>
          </span>
        )}
      </div>
    </>
  )

  async function handleService(e: BaseSyntheticEvent) {
    console.log({e})

    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)

    if (!formData.get('order')) {
      return
    }

    const resp = await fetch(`api/services/${formData.get('order')}`, {
      headers: {
        accept: 'application/json',
      },
    })

    if (!resp.ok) {
      setServiceOrder({
        order_id: '',
        statuses: [],
      })
    }

    const {data: service} = await resp.json()

    setServiceOrder(service)
  }
}
