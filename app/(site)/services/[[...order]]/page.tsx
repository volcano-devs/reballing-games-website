import ServiceDetailsSection from 'sections/site/Services/ServiceDetails'
import type {ServiceOrder} from 'types/models'

interface ServiceDetailsPageProps {
  searchParams: {
    order?: string
  }
}

async function getData(searchParams: SearchParams) {
  if (!searchParams.order) {
    return {
      data: {
        order_id: '',
        status: null,
      },
    }
  }

  const res = await fetch(
    `${process.env.NEXT_URL}/api/services/${searchParams.order}`,
    {
      headers: {
        accept: 'application/json',
      },
      cache: 'no-cache',
    },
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function ServicesPage({
  searchParams,
}: ServiceDetailsPageProps) {
  const {data: service}: {data: ServiceOrder} = await getData(searchParams)

  return (
    <div className="container min-h-[80vh] mx-auto mt-20 flex flex-col justify-center gap-2">
      <div className="flex flex-col gap-12 text-center max-w-sm mx-auto px-6 md:px-0">
        <div className="flex flex-col gap-2 text-left md:text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Consultar el estado de tu servicio
          </h1>
          <p className="text-md text-gray-500">
            Ingresa el número de orden que te fue proporcionado al momento de
            dejar tu equipo
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <ServiceDetailsSection
            service={service}
            currentServiceId={searchParams.order}
          />
        </div>
      </div>
    </div>
  )
}
