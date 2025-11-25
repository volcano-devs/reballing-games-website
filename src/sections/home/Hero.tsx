import {Button} from '#/components/ui/button'
import {Award, ChevronsRight, Stars, ThumbsUp} from 'lucide-react'

export interface HeroSectionProps {}

export default function HeroSection(props: HeroSectionProps) {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-prose">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Servicio técnico especializado <br />
            <strong className="text-rose-400"> Reballing Games</strong>
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Damos soporte técnico a tus consolas y mandos de videojuegos.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <Button>Contáctanos</Button>

            <Button variant="outline">
              Ver Productos
              <ChevronsRight />
            </Button>
          </div>
        </div>
        <div className="mt-24 w-full">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <Award />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Calidad y Garantía
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Ofrecemos servicios de alta calidad con garantía en todas
                nuestras reparaciones y mantenimientos.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <ThumbsUp />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Compromiso y responsabilidad
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Trabajamos con dedicación y seriedad para asegurar la
                satisfacción de nuestros clientes.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                <Stars />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Profesionalismo
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Contamos con un equipo de técnicos altamente capacitados y con
                amplia experiencia, profesionales dedicados a ofrecer el mejor
                servicio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
