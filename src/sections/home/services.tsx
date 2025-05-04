import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  ComputerIcon,
  Cpu,
  Disc3,
  Gamepad2,
  GamepadIcon,
  Gift,
  HardDrive,
  JoystickIcon,
  LockKeyholeOpen,
  Microchip,
  ShoppingCart,
  Tickets,
  Wrench,
} from 'lucide-react'

import Autoplay from 'embla-carousel-autoplay'
import {useRef, useState} from 'react'

const services = [
  {
    title: 'Rework BGA (REBALLING)',
    description:
      'Reballing proviene del tipo soldaduras que se usa con los componentes electrónicos, llamado Ball Grid Array (BGA). Este reboleado implica cambiar las esferas de soldadura y es solo uno de los pasos del proceso completo, el rework: Hay que fundir el estaño para eliminar las soldaduras viejas y extraer el chip.',
    icon: <Cpu className="h-8 w-8 text-[#E72647]" />,
  },
  {
    title: 'Luces Rojas (XBOX 360)',
    description:
      'Reparamos todos los errores de luces rojas. La luces rojas es provocada, por falta de ventilación, Cortos electrónicos o bien el chip bga , no está haciendo contacto con la placa madre.',
    icon: <Wrench className="h-8 w-8 text-[#E72647]" />,
  },
  {
    title: 'Desbloqueo Nintendo Switch',
    description:
      'Liberamos la consola para tener acceso de una manera que nunca fue prevista por los creadores de su sistema. Te permite instalar aplicaciones y juegos no oficiales de la Switch. Incluye Dongle R4 S',
    icon: <GamepadIcon className="h-8 w-8 text-[#E72647]" />,
  },
  {
    title: 'Kernel Xploit PS4',
    description: (
      <>
        VALIDO SEGÚN VERSION DE LA CONSOLA <br />
        Válido para FW 5.05, 6.72, 7.20 <br /> Offline: SI <br />
        Online: NO
      </>
    ),
    icon: <ComputerIcon className="h-8 w-8 text-[#E72647]" />,
  },
  {
    title: 'Reset Glitch Hack (RGH) Xbox 360',
    description:
      'Se modifica el sistema original , mediante hardware. Instalando un chip, la cual nos permita emular sistema no oficiales.',
    icon: <HardDrive className="h-8 w-8 text-[#E72647]" />,
  },
  {
    title: 'Desbloqueo CFW Rebug + MULTIMAN',
    description:
      'Sé modifica el OFW de la PS3 mediante software, parcheando la NOR, una vez parcheada se le instala CFW, para poder emular. Sistemas no oficiales .',
    icon: <LockKeyholeOpen className="h-8 w-8 text-[#E72647]" />,
  },
  {
    title: 'Cargas Digitales PlayStation 3',
    description:
      'Se instala HFW, HEN , más Juegos a tu elección. y otras aplicaciones no oficiales.',
    icon: <Disc3 className="h-8 w-8 text-[#E72647]" />,
  },
  {
    title: 'Desbloqueo Nintendo wii',
    description:
      'Liberamos la consola para tener acceso de una manera que nunca fue prevista por los creadores de su sistema. Te permite instalar aplicaciones y juegos no oficiales de la Wii.',
    icon: <LockKeyholeOpen className="h-8 w-8 text-[#E72647]" />,
  },
  {
    title: 'Desbloqueo de 3DS',
    description:
      'Instalamos aplicaciones no oficiales para poder emular todos los juegos que existen en Nintendo 3ds.',
    icon: <LockKeyholeOpen className="h-8 w-8 text-[#E72647]" />,
  },
  {
    title: 'Mantenimiento Preventivo',
    description:
      'Damos mantenimiento a todas las consolas de juego (PS2, PS3, PS4, Xbox 360, Xbox One, Wii, Switch). INCLUYE: Cambio de pasta térmica de la mejor calidad (MX4 ARTIC SILVER), Lavado de tarjeta madre y Limpieza de case.',
  },
  {
    title: 'Reparación de mandos',
    description:
      'Arreglamos tu mando de juego de las consolas de juego PS2, PS3, PS4, Xbox 360, Xbox One, Wii, Switch.',
    icon: <Gamepad2 className="h-8 w-8 text-[#E72647]" />,
  },
  {
    title: 'Tarjetas de Compra',
    description: 'Compra en las tiendas de Xbox, Playstation y Nintendo',
    icon: <Tickets className="h-8 w-8 text-[#E72647]" />,
  },
  {
    title: 'Desbloqueo PS VITA',
    description:
      'Instalamos aplicaciones no oficiales para poder emular juegos de ps vita o bien de psp.',
    icon: <LockKeyholeOpen className="h-8 w-8 text-[#E72647]" />,
  },
  {
    title: 'Chip PS2 Slim o Fat',
    description:
      'Instalación de chip físico o bien virtual para todas las ps2.',
    icon: <Microchip className="h-8 w-8 text-[#E72647]" />,
  },
]

export default function OurServicesSection() {
  const plugin = useRef(
    Autoplay({delay: 2000, stopOnInteraction: false, playOnInit: true}),
  )
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Nuestros servicios
        </h2>

        <Carousel
          plugins={[plugin.current]}
          // className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          onChange={(index) => console.log(index)}
        >
          <CarouselContent>
            {services.map(({title, description, icon}, index) => {
              const isActive = currentIndex === index
              return (
                <CarouselItem key={index} className="">
                  <div
                    className={`min-w-[240px] p-4 rounded-lg border ${
                      isActive
                        ? 'bg-white shadow-md border-gray-200'
                        : 'bg-white shadow-sm border-gray-100 opacity-75'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div
                        className={`w-8 h-8 flex justify-center items-center rounded-full ${
                          isActive ? 'bg-blue-100' : 'bg-purple-100'
                        }`}
                      >
                        {icon}
                      </div>
                      <h3
                        className={`text-lg font-medium ${
                          isActive ? 'text-gray-800' : 'text-gray-600'
                        }`}
                      >
                        {title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">{description}</p>
                    <a
                      href="#"
                      className={`mt-4 inline-flex items-center text-sm font-medium ${
                        isActive ? 'text-blue-500' : 'text-gray-400'
                      }`}
                    >
                      Explore Now <span className="ml-1">→</span>
                    </a>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
