import {Button} from '#/components/ui/button'
import Link from 'next/link'

export default function NotFoundPage() {
  const randomUrl = `https://source.unsplash.com/collection/190727/1920x1080`

  return (
    <div
      style={{
        backgroundImage: `url(${randomUrl})`,
      }}
      className="min-h-[700px] bg-cover bg-center"
    >
      <section className="overflow-hidden sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-5xl font-bold">404</h1>
            <h2 className="mt-4 text-2xl font-bold md:text-3xl">
              Oops! Página no encontrada.
            </h2>

            <p className="hidden text-gray-400 md:mt-4 md:block">
              Lo sentimos, la página que estás buscando no existe. Es posible
              que haya sido movida o eliminada. Revisa la URL o regresa a la
              página de inicio.
            </p>

            <div className="mt-4 md:mt-8">
              <Button size="lg" asChild>
                <Link href="/">Volver a la página de inicio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
