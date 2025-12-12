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
import {Label} from '#/components/ui/label'

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
    <section className="flex flex-col items-center justify-center md:py-10">
      <div className="bg-dark-section flex min-h-full max-w-2xl flex-col items-center justify-center gap-10 px-8 py-16 md:p-10">
        <div className="mt-auto text-left">
          <div>
            <p className="text-sm font-semibold text-rose-600 uppercase">
              Estado del servicio
            </p>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Consultar el estado de tu servicio
            </h2>
          </div>
          <p className="text-gray-500 sm:mt-4 sm:block dark:text-gray-400">
            Ingresa el número de orden que te fue proporcionado al momento de
            dejar tu equipo en servicio para consultar el estado actual del
            mismo.
          </p>
        </div>

        <div className="w-full flex-1 self-start">
          <form
            id="service-order-form"
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
            className="flex flex-1 items-center justify-between gap-4"
          >
            <div className="sm:flex-1">
              <form.Field name="orderCode">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid

                  return (
                    <>
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
                    </>
                  )
                }}
              </form.Field>
            </div>

            <Button
              type="submit"
              size="lg"
              className="group flex items-center justify-center gap-2 rounded-md bg-yellow-600 px-5 py-3 text-white transition focus:ring-2 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto"
            >
              Consultar
              <ArrowRight />
            </Button>
          </form>

          {service?.status && (
            <Item variant="muted" className="mx-auto mt-6">
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
      </div>
    </section>
  )
}
