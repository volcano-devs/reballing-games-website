export interface NavigationProps {}

export default function Navigation(props: NavigationProps) {
  return (
    <nav aria-label="Global">
      <ul className="flex items-center gap-6 text-sm">
        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Servicios
          </a>
        </li>

        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Tienda
          </a>
        </li>

        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}
