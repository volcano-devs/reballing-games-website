import ServiceDetailsSection from 'sections/site/service/ServiceDetails/ServiceDetails'
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

  console.log('searchParams', searchParams)

  const res = await fetch(
    `${process.env.NEXT_URL}/api/services/${searchParams.order}`,
    {
      headers: {
        accept: 'application/json',
      },
      cache: 'no-cache',
    },
  )

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
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
      <div className="flex flex-col gap-10 text-center max-w-[540px] mx-auto">
        <div className="flex flex-col gap-2">
          <h1
            className="text-4xl
          font-bold text-gray-800 tracking-tight
        "
          >
            Consultar el estado de tu servicio
          </h1>
          <p className="text-gray-500">
            Ingresa el número de orden que te fue proporcionado al momento de
            dejar tu equipo
          </p>
        </div>

        <ServiceDetailsSection service={service} />
      </div>
    </div>
  )
}
