import Breadcrumbs from '#/components/Breadcrumbs'
import {ContactFormSection} from '#/sections/get-in-touch'

export default function GetInTouchPage() {
  return (
    <section className="flex min-h-[80vh] w-full flex-col items-center justify-center bg-[#11111B] pb-32">
      <Breadcrumbs
        pageTitle="Contáctanos"
        paths={[
          {label: 'Inicio', href: '/'},
          {label: 'Contáctanos', href: '/get-in-touch'},
        ]}
      />
      <ContactFormSection />
    </section>
  )
}
