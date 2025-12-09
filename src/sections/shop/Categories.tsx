import {Button} from '#/components/ui/button'

export interface CategoriesSectionProps {}

export default function CategoriesSection(props: CategoriesSectionProps) {
  return (
    <section className="bg-dark-section">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <h2 className="mx-auto text-center text-3xl font-bold text-white sm:text-4xl">
          Categorías
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          <a
            href="#"
            className="group relative block max-h-48 min-h-48 w-full overflow-hidden rounded-lg bg-black"
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1679813553135-d8ebc0b83437?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative flex h-full flex-col items-center justify-center gap-4 p-4 text-center sm:p-6 lg:p-8">
              <p className="text-xl font-bold text-white sm:text-2xl">
                Consolas
              </p>
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <Button>Ver</Button>
              </div>
            </div>
          </a>

          <a
            href="#"
            className="group relative block max-h-48 min-h-48 w-full overflow-hidden rounded-lg bg-black"
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603985753826-30c036e8804d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative flex h-full flex-col items-center justify-center gap-4 p-4 text-center sm:p-6 lg:p-8">
              <p className="text-xl font-bold text-white sm:text-2xl">
                Videojuegos
              </p>
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <Button>Ver</Button>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group relative block max-h-48 min-h-48 w-full overflow-hidden rounded-lg bg-black"
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative flex h-full flex-col items-center justify-center gap-4 p-4 text-center sm:p-6 lg:p-8">
              <p className="text-xl font-bold text-white sm:text-2xl">
                Accesorios
              </p>
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <Button>Ver</Button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
