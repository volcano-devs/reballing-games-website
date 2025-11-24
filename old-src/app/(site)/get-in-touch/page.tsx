import {Button} from '@nextui-org/button'

export default function GetInTouch() {
  return (
    <div className="container mx-auto mt-20 flex min-h-[80vh] flex-col justify-center gap-2">
      <div className="container mx-auto px-6 pt-14 text-center leading-tight">
        <h1 className="text-center text-4xl font-bold text-gray-900 md:text-5xl">
          ¡Conéctate con nosotros ahora mismo!
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          Si tienes alguna duda o consulta sobre nuestros servicios, no dudes en
          contactarnos a través de nuestro formulario de contacto o en nuestras
          redes sociales.
          <br />
        </p>
      </div>
      <section className="container mx-auto bg-white dark:bg-gray-900">
        <div className="px-6 py-12">
          <div className="justify-center gap-10 lg:-mx-6 lg:flex lg:items-center">
            <div className="lg:w-2/6">
              <h1 className="text-center text-2xl font-semibold text-gray-800 capitalize md:text-left lg:text-3xl dark:text-white">
                Contáctenos para <br /> más información.
              </h1>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="-mx-2 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 h-6 w-6 text-red-500 dark:text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="mx-2 w-72 truncate text-gray-700 dark:text-gray-400">
                    Bolonia, Frente a Auto-banco lafise.
                    <br /> Managua, Nicaragua.
                  </span>
                </p>

                <p className="-mx-2 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 h-6 w-6 text-red-500 dark:text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="mx-2 w-72 truncate text-gray-700 dark:text-gray-400">
                    +505 8471-3436
                  </span>
                </p>

                <p className="-mx-2 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 h-6 w-6 text-red-500 dark:text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2 w-72 truncate text-gray-700 dark:text-gray-400">
                    reballing.games@gmail.com
                  </span>
                </p>
              </div>

              <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-gray-600 dark:text-gray-300">
                  Síguenos en
                </h3>

                <div className="-mx-1.5 mt-4 flex">
                  <a
                    className="mx-1.5 transform text-gray-400 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
                    href="https://www.facebook.com/ReballingGames"
                    target="_blank"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>

                  <a
                    className="mx-1.5 transform text-gray-400 transition-colors duration-300 hover:text-pink-500 dark:hover:text-pink-400"
                    target="_blank"
                    href="https://www.instagram.com/reballing.games"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-2/5">
              <div className="w-full overflow-hidden pt-6 md:rounded-2xl md:bg-white md:px-12 md:py-14 md:pt-0 md:shadow-xl md:shadow-gray-300/60 lg:max-w-xl md:dark:bg-gray-900 md:dark:shadow-black/50">
                <h1 className="text-lg font-medium text-gray-700">
                  Qué podemos hacer por ti?
                </h1>

                <form className="mt-6">
                  <div className="flex-1">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm text-gray-600 dark:text-gray-200"
                    >
                      Nombre completo
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Kevin Aguilar"
                      className="focus:ring-opacity-40 mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                    />
                  </div>

                  <div className="mt-6 flex-1">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm text-gray-600 dark:text-gray-200"
                    >
                      Correo electrónico
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      className="focus:ring-opacity-40 mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                    />
                  </div>

                  <div className="mt-6 w-full">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm text-gray-600 dark:text-gray-200"
                    >
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      className="focus:ring-opacity-40 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none md:h-48 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                      placeholder="Escribe tu mensaje aquí"
                    ></textarea>
                  </div>

                  <Button
                    color="primary"
                    className="bg-primary-500 hover:bg-primary-400 focus:ring-primary-300 focus:ring-opacity-50 mt-6 w-full transform rounded-md px-6 py-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 focus:ring focus:outline-none"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
