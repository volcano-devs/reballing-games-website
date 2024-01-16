import {Button} from '@nextui-org/button'
import Image from 'next/image'
import Link from 'next/link'
import consolesGroup from 'public/consolas-group.png'

export default function Home() {
  return (
    <div className="relative">
      <div className="text-white bg-hero static top-0">
        <div
          className="container mx-auto flex w-full flex-col
      justify-center gap-20 xl:flex-row min-h-screen lg:min-h-[1080px]"
        >
          <div className="flex max-w-2xl flex-col self-center px-6 text-center md:px-8 md:text-left lg:px-0">
            <h1 className=" text-4xl font-bold  tracking-tight sm:text-6xl">
              Servicio técnico especializado
            </h1>
            <p className="mt-6 text-lg leading-8">
              Damos soporte técnico a tus consolas y mandos de videojuegos.
            </p>

            <div className="mt-10 flex w-full flex-col gap-x-4 gap-y-4 md:flex-row md:items-center">
              <Link href="#">
                <Button color="primary" className="w-full md:w-auto py-8">
                  Realizar una consulta
                </Button>
              </Link>
            </div>
          </div>
          <div className="self-center md:w-[440px] lg:w-[540px] xl:w-[760px]">
            <Image className="w-full" src={consolesGroup} alt="consoles" />
          </div>
        </div>
      </div>
      //features section about reballing games technical service
      <div className="-mt-20 container mx-auto pb-20 px-10 md:px-12">
        <section>
          <div>
            <div className="grid grid-cols-1 gap-8 xl:gap-10 xl:grid-cols-3">
              <div className="space-y-3 bg-white rounded-2xl px-6 py-10 border border-gray-200 shadow-lg shadow-gray-100">
                <span className="inline-block p-3 text-red-500 bg-red-100 rounded-full dark:text-white dark:bg-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Calidad y garantía
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  trabajamos con altos estándares de calidad en todas nuestras
                  reparaciones y herramientas ae trabajos en manos de
                  profesionales
                </p>
              </div>

              <div className="space-y-3 bg-white rounded-2xl px-6 py-10 border border-gray-200 shadow-lg shadow-gray-100">
                <span className="inline-block p-3 text-red-500 bg-red-100 rounded-full dark:text-white dark:bg-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z" />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Compromiso y responsabilidad
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Trabajamos de manera limpia v honesta, comunicando todos los
                  procesos necesarios. ofreciendo resultados positivos
                </p>
              </div>

              <div className="space-y-3 bg-white rounded-2xl px-6 py-10 border border-gray-200 shadow-lg shadow-gray-100">
                <span className="inline-block p-3 text-red-500 bg-red-100 rounded-full dark:text-white dark:bg-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Profesionalismo
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Nuestro equipo esta formado por profesionales con más de 5
                  años de experiencia dedicados a la reparación de hardware y
                  software de consolas de videojuegos
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      //contact call to action
      <section className="bg-white dark:bg-gray-900 py-10">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            ¿Tienes alguna duda o consulta?{' '}
            <span className="text-red-500">
              ¡Conéctate con nosotros ahora mismo!
            </span>
          </h2>

          <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
            Si tienes alguna duda o consulta sobre nuestros servicios, no dudes
            en contactarnos a través de nuestro formulario de contacto o en
            nuestras redes sociales.
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <Link
              href="/get-in-touch"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-red-600 rounded-lg hover:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80"
            >
              ¡Contáctenos!
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
