import ServiceFormSection from '#/sections/services/ServiceForm'

export interface ServicePageProps {
  searchParams: Promise<{[key: string]: string | undefined}>
}

async function getData(searchParams: SearchParams) {
  console.log('Fetching data for order_id:', searchParams.order_id)

  if (!searchParams.order_id) {
    return {
      data: {
        order_id: '',
        status: null,
      },
    }
  }

  const res = await fetch(
    `${process.env.NEXT_URL}/api/services/${searchParams.order_id}`,
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

export default async function ServicePage(props: ServicePageProps) {
  const {order_id} = await props.searchParams
  const response = await getData({order_id})

  console.log('ServicePage fetched data:', response)

  return <ServiceFormSection orderId={order_id} service={response.data} />
}
