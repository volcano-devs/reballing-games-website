import {ContactFormSection} from '#/sections/get-in-touch'

export interface GetInTouchPageProps {}

export default function GetInTouchPage(props: GetInTouchPageProps) {
  return (
    <section className="flex min-h-[80vh] w-full flex-col items-center justify-center bg-[#11111B] py-32">
      <ContactFormSection />
    </section>
  )
}
