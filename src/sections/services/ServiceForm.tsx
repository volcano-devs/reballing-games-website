'use client'

import {Button} from '#/components/ui/button'
import {Input} from '#/components/ui/input'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '#/components/ui/item'
import type {ServiceOrder, Status} from '#/types/models'
import {
  ArrowRight,
  BadgeCheck,
  BadgeInfo,
  Info,
  UserCheck,
  Wrench,
} from 'lucide-react'
import * as z from 'zod'
import {useForm} from '@tanstack/react-form'
import {redirect} from 'next/navigation'

export interface ServiceFormSectionProps {
  orderId: string | null | undefined
  service: ServiceOrder | null
}

const statusAttrs = {
  in_progress: {
    color: 'text-lime-400',
    label: 'En progreso',
    description: 'Tu orden está siendo procesada.',
    icon: <Wrench />,
  },
  revision: {
    color: 'text-yellow-400',
    label: 'En revisión',
    description: 'Tu equipo está siendo revisado.',
    icon: <BadgeInfo />,
  },
  finalized: {
    color: 'text-green-400',
    label: 'Finalizado',
    description: 'Tu equipo está listo, puedes retirarlo.',
    icon: <BadgeCheck />,
  },
  committed: {
    color: 'text-green-400',
    label: 'Entregado',
    description: 'Tu equipo ha sido reparado y entregado.',
    icon: <UserCheck />,
  },
  no_approved: {
    color: 'text-red-400',
    label: 'No aprobado',
    description: 'Tu equipo no ha sido aprobado para reparación.',
    icon: <BadgeInfo />,
  },
} as {
  [key in Status['value']]: {
    color: string
    label: string
    icon: React.JSX.Element | null
    description: string
  }
}

const formSchema = z.object({
  orderCode: z.string().regex(/^OR-\d{4}$/, 'Número de orden inválido'),
})

export default function ServiceFormSection({
  orderId,
  service,
}: ServiceFormSectionProps) {
  console.log('ServiceFormSection rendered with orderId:', orderId, service)

  const form = useForm({
    defaultValues: {
      orderCode: orderId || '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: (props) => {
      redirect(`?order_id=${props.value.orderCode}`)
    },
  })

  return (
    <section className="flex min-h-[60vh] flex-col justify-center bg-gray-50 dark:bg-gray-900">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
            Consultar el estado de tu servicio
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block dark:text-gray-400">
            Ingresa el número de orden que te fue proporcionado al momento de
            dejar tu equipo en servicio para consultar el estado actual del
            mismo.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form
            id="service-order-form"
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
            className="items-stretch sm:flex sm:gap-4"
          >
            <div className="sm:flex-1">
              <form.Field name="orderCode">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid

                  return (
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      type="text"
                      placeholder="Número de orden: ej. OR-1234"
                      pattern="^OR-\d{4}$"
                      className="py-5"
                      autoComplete="off"
                    />
                  )
                }}
              </form.Field>
            </div>

            <Button
              type="submit"
              size="lg"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:ring-2 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto"
            >
              Consultar
              <ArrowRight />
            </Button>
          </form>
        </div>

        {service?.status && (
          <Item variant="muted" className="mx-auto mt-12 md:w-max">
            <ItemMedia
              variant="icon"
              className={
                service?.status && statusAttrs[service.status]
                  ? `${statusAttrs[service.status].color}`
                  : 'text-yellow-500'
              }
            >
              {service?.status && statusAttrs[service.status] ? (
                statusAttrs[service.status].icon
              ) : (
                <Info />
              )}
            </ItemMedia>
            <ItemContent>
              <ItemTitle>
                <h2>
                  Servicio{' '}
                  {service?.status ? (
                    <>
                      #${service.order_id}{' '}
                      <strong
                        className={`${statusAttrs[service.status].color}`}
                      >
                        {' - '}
                        {statusAttrs[service.status].label}
                      </strong>
                    </>
                  ) : (
                    'no encontrado'
                  )}
                </h2>
              </ItemTitle>
              <ItemDescription>
                {service?.status
                  ? `${statusAttrs[service.status].description}`
                  : 'Por favor verifica que el número de orden sea correcto e inténtalo de nuevo.'}
              </ItemDescription>
            </ItemContent>
          </Item>
        )}
      </div>
    </section>
  )
}
