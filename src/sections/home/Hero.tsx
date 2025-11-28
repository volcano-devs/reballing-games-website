import {Button} from '#/components/ui/button'
import {Award, ChevronsRight, Stars, ThumbsUp} from 'lucide-react'
import FeatureCard from './components/FeatureCard'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 lg:grid lg:h-[85vh] lg:place-content-center">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center brightness-125 contrast-125 filter"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1643489069237-3548135218c8?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/80" />

      <div className="z-20 mx-auto w-screen max-w-7xl py-16 sm:py-24 lg:px-12 lg:py-44">
        <div className="relative z-10 pt-20 lg:max-w-[40vw]">
          <h1 className="text-4xl font-bold text-white lg:text-5xl">
            Servicio técnico especializado <br />
            {/* <strong className="text-rose-400"> Reballing Games</strong> */}
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-200 sm:text-lg/relaxed">
            Damos soporte técnico a tus consolas y mandos de videojuegos.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <Button size="lg" asChild>
              <Link href="/get-in-touch">Contáctanos</Link>
            </Button>

            <Button variant="secondary" size="lg" asChild>
              <Link href="/shop">
                Ver Productos
                <ChevronsRight />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-24 w-full">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              title="Calidad y Garantía"
              description="Ofrecemos servicios de alta calidad con garantía en todas nuestras reparaciones y mantenimientos."
              icon={<Award />}
            />

            <FeatureCard
              title="Compromiso y responsabilidad"
              description="Trabajamos con dedicación y seriedad para asegurar la satisfacción de nuestros clientes."
              icon={<ThumbsUp />}
            />

            <FeatureCard
              title="Profesionalismo"
              description="Contamos con un equipo de técnicos altamente capacitados y con amplia experiencia, profesionales dedicados a ofrecer el mejor servicio."
              icon={<Stars />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
