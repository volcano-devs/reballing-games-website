export interface ServicePageProps {
  params: Promise<{
    order_id: string
  }>
}

export default async function ServicePage(props: ServicePageProps) {
  const {order_id} = await props.params

  return (
    <div>
      <h1>Service Order ID: {order_id ? order_id : 'No Order ID Provided'}</h1>
    </div>
  )
}
