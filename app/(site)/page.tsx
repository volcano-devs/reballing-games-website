import {Button} from '@nextui-org/button'
import Image from 'next/image'
import Link from 'next/link'
import consolesGroup from 'public/consolas-group.png'

export default function Home() {
  return (
    <>
      <div className="text-white bg-hero static top-0">
        <div
          className="container mx-auto flex w-full flex-col
      justify-center gap-20 xl:flex-row min-h-screen lg:min-h-[1080px]"
        >
          <div className="flex max-w-2xl flex-col self-center px-6 text-center md:px-8 md:text-left lg:px-0">
            <h1 className=" text-4xl font-bold  tracking-tight sm:text-6xl">
              Servicio técnico especializado
            </h1>
            <p className="mt-6 text-lg leading-8">
              Damos soporte técnico a tus consolas y mandos de videojuegos.
            </p>

            <div className="mt-10 flex w-full flex-col gap-x-4 gap-y-4 md:flex-row md:items-center">
              <Link href="#">
                <Button color="primary" className="w-full md:w-auto">
                  Consultar
                </Button>
              </Link>
            </div>
          </div>
          <div className="self-center md:w-[440px] md:self-end lg:w-[540px] xl:w-[760px]">
            <Image className="w-full" src={consolesGroup} alt="consoles" />
          </div>
        </div>
      </div>
      <div className="min-h-screen "></div>
    </>
  )
}
