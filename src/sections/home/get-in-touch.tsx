import { Mail, MapPin, Phone } from "lucide-react";

export default function GetInTouchSection() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-14">
          <span className="text-sm font-semibold">Contáctenos</span>
          <h1 className="mb-1 mt-1 text-balance text-3xl font-semibold md:text-4xl text-rose-700">
            Habla con nuestro amable equipo
          </h1>
          <p className="text-lg text-muted-foreground text-gray-500">
            Nos encantaría ayudarte. Visita nuestras sucursales, escríbenos por
            nuestras redes sociales o llámanos.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto text-sky-600" />
            </span>
            <p className="mb-2 text-lg font-semibold">Nuestras redes</p>
            <p className="mb-3 text-muted-foreground">
              Escríbenos para cualquier consulta.
            </p>
            <div className="flex mt-4 -mx-1.5 ">
              <a
                className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                href="https://www.facebook.com/ReballingGames"
                target="_blank"
              >
                <svg
                  className="w-8 h-8"
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
                className="mx-1.5 dark:hover:text-pink-400 text-gray-400 transition-colors duration-300 transform hover:text-pink-500"
                target="_blank"
                href="https://www.instagram.com/reballing.games"
              >
                <svg
                  className="w-8 h-8"
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
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" color="red" />
            </span>
            <p className="mb-2 text-lg font-semibold">Ven a visitarnos</p>
            <p className="mb-3 text-muted-foreground">
              Te esperamos en nuestras sucursales.
            </p>
            <a href="#" className="font-semibold hover:underline">
              Bolonia, Frente a Auto-banco lafise.
              <br /> Managua, Nicaragua.
            </a>
          </div>
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" color="green" />
            </span>
            <p className="mb-2 text-lg font-semibold"> Call Us</p>
            <p className="mb-3 text-muted-foreground">
              Atendemos tus llamadas en horario de oficina.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+50582374900"
                className="font-semibold hover:underline"
              >
                (Managua) +505 82374900
              </a>

              <a
                href="tel:+50582374900"
                className="font-semibold hover:underline"
              >
                (Jinotepe) +505 82374900
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
