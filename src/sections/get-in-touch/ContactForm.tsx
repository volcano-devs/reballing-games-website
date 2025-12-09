'use client'
import {Button} from '#/components/ui/button'
import {Input} from '#/components/ui/input'
import {Textarea} from '#/components/ui/textarea'
import {Mail, Smartphone, MapPinned} from 'lucide-react'
import dynamic from 'next/dynamic'
const MapComponent = dynamic(
  () => import('./MapSection').then((mod) => mod.default),
  {ssr: false},
)

export default function ContactFormSection() {
  return (
    <div className="mx-auto max-w-7xl pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-max bg-[#0C0D11] px-6 py-20 lg:px-16">
          <div>
            <p className="text-sm font-semibold text-rose-600 uppercase">
              Contacto
            </p>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Ponte en contacto con nosotros
            </h2>
          </div>

          <p className="mt-4 text-pretty text-gray-700 dark:text-gray-200">
            Si tienes alguna pregunta o necesitas más información, no dudes en
            contactarnos. Estamos aquí para ayudarte y brindarte el mejor
            servicio posible.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="sr-only">Phone number</dt>

              <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-700 dark:text-gray-200">
                <Smartphone />

                <span className="font-medium">+505 8471-3436</span>
              </dd>
            </div>

            <div>
              <dt className="sr-only">Email</dt>

              <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-700 dark:text-gray-200">
                <Mail />

                <span className="font-medium">reballing.games@gmail.com</span>
              </dd>
            </div>

            <div>
              <dt className="sr-only">Location</dt>

              <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-700 dark:text-gray-200">
                <MapPinned />

                <span className="font-medium">
                  Bolonia, Frente a Auto-banco lafise. Managua, Nicaragua.
                </span>
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <MapComponent />

          <form
            action="#"
            className="space-y-6 bg-blue-700 px-6 py-10 lg:px-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Envíanos un mensaje
            </h2>
            <div>
              <Input
                id="name"
                type="text"
                placeholder="Nombre"
                color="neutral"
              />
            </div>

            <div>
              <Input
                id="email"
                type="email"
                placeholder="Correo Electrónico, Ej: kevin@gmail.com"
              />
            </div>

            <div>
              <Textarea
                id="message"
                rows={10}
                placeholder="Escribe tu mensaje aquí..."
                className="min-h-[120px]"
              ></Textarea>
            </div>

            <Button type="submit" size="lg">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
