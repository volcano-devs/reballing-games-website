import {Button} from '@nextui-org/button'
import {Card, CardBody} from '@nextui-org/card'

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col gap-10 w-full max-w-screen-2xl mx-auto">
          <div className="">
            <div className="flex flex-col gap-4">
              <div>
                <h1
                  className="text-6xl
            text-primary-500
            "
                >
                  Servicio técnico especializado
                </h1>
                <p className="text-gray-300 text-lg font-medium">
                  Damos soporte técnico a tus consolas y mandos de videojuegos.
                </p>
              </div>
              <Button color="primary" variant="shadow" className="w-max">
                Consultar
              </Button>
            </div>
          </div>

          <div className="flex gap-4">
            {/* <Card
              isBlurred
              shadow="none"
              className="
            bg-background-500
            "
            >
              <CardBody>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold">Calidad</h3>
                  <p className="text-gray-300 text-xs font-medium">
                    Trabajamos con altos estándares de calidad en todas nuestras
                    reparaciones y herramientas de trabajos en manos de
                    profesionales.
                  </p>
                </div>
              </CardBody>
            </Card> */}
          </div>
        </div>
      </section>
    </main>
  )
}
