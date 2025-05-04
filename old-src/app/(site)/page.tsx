import React from 'react'
import {Button} from '@nextui-org/button'
import Image from 'next/image'
import Link from 'next/link'
import consolesGroup from 'public/assets/images/consolas-group.png'
import chip from 'public/assets/images/chip.png'
import {ChevronRightIcon} from '@components/icons'

export default function Home() {
  return (
    <div className="relative">
      <div className="text-white bg-hero static top-0 mt-10 md:mt-0">
        <div
          className="container mx-auto flex w-full flex-col
      justify-center gap-20 xl:flex-row min-h-screen lg:min-h-[1080px]"
        >
          <div className="flex max-w-2xl flex-col self-center px-6 text-center md:px-8 md:text-left lg:px-0 tracking-tight leading-2">
            <h1 className=" text-4xl font-bold  tracking-tight sm:text-6xl">
              Servicio técnico especializado
            </h1>
            <p className="mt-6 text-lg leading-8">
              Damos soporte técnico a tus consolas y mandos de videojuegos.
            </p>

            <div className="mt-10 flex w-full flex-col gap-x-4 gap-y-4 md:flex-row md:items-center">
              <Link href="/get-in-touch">
                <Button
                  color="primary"
                  className="w-full md:w-auto py-6 rounded-2xl"
                >
                  Realizar una consulta
                </Button>
              </Link>

              <Link href="/shop">
                <Button
                  color="primary"
                  className="w-full md:w-auto py-6 rounded-2xl"
                  variant="ghost"
                >
                  Ver Productos <ChevronRightIcon />
                </Button>
              </Link>
            </div>
          </div>
          <div className="self-center w-[340px]  md:w-[440px] lg:w-[540px] xl:w-[760px]">
            <Image className="w-full" src={consolesGroup} alt="consoles" />
          </div>
        </div>
      </div>
      <div></div>
      {/* features section about reballing games technical service */}
      <div className="-mt-20 container mx-auto pb-20  px-6 sm:px-10 md:px-12">
        <section>
          <div>
            <div className="grid grid-cols-1 gap-8 xl:gap-10 xl:grid-cols-3">
              <div className="space-y-3 bg-white rounded-2xl px-6 py-10 border border-gray-200 shadow-lg shadow-gray-100">
                <span className="inline-block p-3 text-red-500 bg-red-100 rounded-full dark:text-white dark:bg-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Calidad y garantía
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  trabajamos con altos estándares de calidad en todas nuestras
                  reparaciones y herramientas ae trabajos en manos de
                  profesionales
                </p>
              </div>

              <div className="space-y-3 bg-white rounded-2xl px-6 py-10 border border-gray-200 shadow-lg shadow-gray-100">
                <span className="inline-block p-3 text-red-500 bg-red-100 rounded-full dark:text-white dark:bg-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z" />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Compromiso y responsabilidad
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Trabajamos de manera limpia v honesta, comunicando todos los
                  procesos necesarios. ofreciendo resultados positivos
                </p>
              </div>

              <div className="space-y-3 bg-white rounded-2xl px-6 py-10 border border-gray-200 shadow-lg shadow-gray-100">
                <span className="inline-block p-3 text-red-500 bg-red-100 rounded-full dark:text-white dark:bg-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Profesionalismo
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Nuestro equipo esta formado por profesionales con más de 5
                  años de experiencia dedicados a la reparación de hardware y
                  software de consolas de videojuegos
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* products section */}
      <section id="services" className="container mx-auto py-20  px-6">
        <div className="mt-4 md:mt-0 text-center max-w-xl mx-auto">
          <h1 className="text-2xl font-semibold tracking-tight xl:text-3xl text-red-600 capitalize dark:text-white">
            Nuestros productos
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-300">
            Contamos con una amplia gama de productos para tu consola, desde
            controles hasta repuestos para tu consola de videojuegos.
          </p>
        </div>

        <div className=" mt-10 flex flex-col sm:grid grid-cols-3 lg:max-w-5xl mx-auto gap-10 sm:divide-x">
          <div className="flex items-center justify-center ">
            <svg
              className="filter grayscale hover:grayscale-0 h-6 lg:h-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-3.734 0 1004.5267543546614 181.25623795219727"
            >
              <path
                fill="#016FD0"
                d="M82.286 0v158.53l35.895 11.372V36.977c0-6.264 2.793-10.423 7.272-8.992 5.856 1.624 6.994 7.394 6.994 13.588V94.66c22.343 10.814 39.934-.006 39.934-28.539 0-29.156-10.313-42.145-40.66-52.589C119.753 9.548 97.57 2.823 82.287 0"
              />
              <path
                fill="#016FD0"
                d="M125.008 146.726l57.65-20.52c6.522-2.417 7.519-5.701 2.24-7.427-5.36-1.758-14.93-1.255-21.52 1.112l-38.37 13.535v-21.597l2.197-.725s11.107-3.935 26.728-5.629c15.591-1.709 34.712.223 49.74 5.887 16.929 5.378 18.826 13.222 14.543 18.681-4.345 5.403-14.88 9.311-14.88 9.311l-78.328 28.137M16.518 144.542C-.84 139.707-3.734 129.49 4.185 123.588c7.303-5.39 19.742-9.447 19.742-9.447l51.419-18.333v20.866l-36.968 13.25c-6.548 2.343-7.53 5.639-2.255 7.363 5.368 1.794 14.895 1.312 21.447-1.106l17.776-6.409V148.4c-1.146.192-2.42.386-3.583.584-17.722 2.942-36.603 1.734-55.245-4.441M209.058 159.09c0 .529-.126.873-.396 1.047-.31.21-.718.316-1.23.316h-2.578v-2.63h2.728c.387 0 .675.066.907.156.377.185.569.556.569 1.112m1.864 6.032c-.13-.038-.22-.166-.296-.383a4.273 4.273 0 0 1-.066-.71l-.042-1.193c-.019-.552-.124-.982-.356-1.238-.115-.202-.32-.33-.516-.47.256-.233.492-.472.691-.734.23-.371.364-.874.364-1.411 0-1.095-.471-1.874-1.389-2.305-.458-.194-1.055-.32-1.765-.32h-4.353v9.363h1.66v-3.812h2.53c.472 0 .788.06 1.02.137.313.2.482.502.503 1.02l.081 1.46c.025.373.05.596.07.765l.124.323.034.107h1.822v-.533m-11.255-3.937c0-1.912.716-3.667 2.024-4.967a7.057 7.057 0 0 1 4.986-2.044c1.86 0 3.603.716 4.91 2.044 1.32 1.3 2.032 3.055 2.032 4.967a6.95 6.95 0 0 1-6.942 6.944 7.106 7.106 0 0 1-4.986-2.02 6.937 6.937 0 0 1-2.024-4.924m7.01 8.38c2.244 0 4.328-.886 5.917-2.453 1.57-1.596 2.455-3.68 2.455-5.927a8.365 8.365 0 0 0-2.455-5.952 8.232 8.232 0 0 0-5.917-2.46c-4.658 0-8.425 3.76-8.425 8.412 0 2.246.869 4.33 2.438 5.927a8.533 8.533 0 0 0 5.987 2.453M337.063 41.603l-43.348-.019a.316.316 0 0 0-.322.305v101.383c0 .162.143.314.322.314h17.568l.309-.314.02-90.378.104-.15 20.116-.038c7.324 0 11.347 7.38 11.347 20.756 0 13.383-4.023 20.78-11.347 20.78l-12.107-.013c-.181 0-.304.138-.304.311v10.519c0 .205.123.33.304.33h17.338c6.116 0 12.107-2.835 16.43-7.706 5.121-5.78 7.818-14.127 7.818-24.129 0-19.382-9.467-31.951-24.248-31.951M390.043 41.584h-17.579c-.2 0-.343.141-.343.305v101.383c0 .164.143.314.343.314h17.58l.322-.314V41.889zM466.71 66.262c0-.18-.158-.315-.331-.315h-31.305c-28.071 0-31.66 20.605-31.66 38.714l.022 15.661c0 13.477 8.381 23.263 19.904 23.263h17.08l.309-.313v-10.508c0-.171-.145-.324-.309-.324l-12.2.021c-2.81-.058-6.595-1.247-6.595-10.91v-16.909c-.013-11.236 1.033-18.42 3.366-22.507 2.527-4.51 6.505-5.116 10.083-5.116h13.343l.113.159-.017 66.094c0 .16.136.313.323.313h17.547c.173 0 .328-.153.328-.313M593.164 84.01l-8.656-.66c-6.492-.559-11.32-4.154-11.32-14.791 0-12.42 5.57-15.818 13.006-15.818h23.96l.318-.309V41.89l-.318-.303h-.501l-25.957.006c-16.353 0-27.981 9.604-27.981 28.745v.833c0 15.104 9.293 26.005 23.143 27.064l8.616.638c6.572.498 10.665 6.375 10.665 15.294v2.508c0 5.576-1.394 15.778-13.352 15.778h-24.895a.322.322 0 0 0-.313.324v10.494l.313.314H590.8c9.523 0 25.47-3.853 25.47-29.774 0-9.392-2.133-16.794-6.457-22.143-3.686-4.595-9.147-7.08-16.649-7.657M737.131 66.262a.316.316 0 0 0-.314-.315h-31.375c-28.01 0-31.636 20.605-31.636 38.714l.022 15.661c0 13.477 8.374 23.263 19.957 23.263h17.033l.317-.313v-10.508a.33.33 0 0 0-.317-.324l-12.207.021c-2.8-.058-6.55-1.247-6.561-10.91v-16.909c0-11.236 1.057-18.42 3.335-22.507 2.53-4.51 6.533-5.116 10.051-5.116h13.404l.132.159-.032 66.094c0 .16.145.313.32.313h17.572c.173 0 .3-.153.3-.313M666.507 65.949h-19.07l-.1-.117V53.056c0-.17-.13-.313-.306-.313h-17.563c-.179 0-.335.143-.335.313v67.275c0 13.476 8.4 23.255 19.967 23.255h12.578c.18 0 .32-.152.32-.314v-10.496c0-.172-.14-.334-.32-.334h-7.722c-1.979-.03-6.618-.13-6.637-10.058V77.093l.107-.102c5.842.03 19.081 0 19.081 0l.31-.288v-10.44a.314.314 0 0 0-.31-.314M789.155 65.949h-18.962l-.128-.117V53.056l-.29-.313h-17.599a.324.324 0 0 0-.324.313v67.275c0 13.476 8.386 23.255 19.944 23.255h12.575a.31.31 0 0 0 .31-.314v-10.496c0-.172-.122-.334-.31-.334h-7.72c-1.985-.03-6.586-.13-6.586-10.058V77.093l.105-.102c5.796.03 18.985 0 18.985 0l.313-.288v-10.44a.324.324 0 0 0-.313-.314M818.195 65.949h-17.56a.324.324 0 0 0-.32.314v77.009l.32.314h17.56a.319.319 0 0 0 .324-.314V66.263a.31.31 0 0 0-.324-.314M818.195 41.584h-17.56l-.32.305v14.723c0 .179.156.31.32.31h17.56c.192 0 .324-.131.324-.31V41.889c0-.164-.132-.305-.324-.305M939.7 65.949h-31.342a.314.314 0 0 0-.31.314l-.009 77.009.294.314h17.593l.297-.314-.024-66.113.122-.128 13.364-.01c3.614 0 7.579.583 10.115 4.762 2.32 3.776 3.372 10.415 3.372 20.834.015.45-.014 40.655-.014 40.655 0 .162.14.314.313.314h17.517c.19 0 .33-.152.33-.314v-38.62c0-18.1-3.616-38.703-31.618-38.703M874.443 127.343c-2.764 4.553-7.153 5.161-11.135 5.161-3.942 0-8.344-.608-11.138-5.16-2.52-4.097-3.686-11.275-3.686-22.592v-.09c0-13.357 1.643-20.946 5.32-24.56 2.199-2.193 5.05-3.083 9.504-3.083 4.52 0 7.342.89 9.54 3.083 3.643 3.614 5.29 11.235 5.29 24.65 0 11.332-1.17 18.515-3.695 22.591M863.308 65.95c-29.335 0-33.085 20.701-33.085 38.803 0 18.121 3.75 38.89 33.085 38.89 29.338 0 33.079-20.769 33.079-38.89 0-18.102-3.74-38.803-33.079-38.803M476.622 65.949l-.203.305 26.057 76.304c.043.171.043.435-.012.603l-14.671 37.78c-.062.178.019.31.192.31h15.278a.494.494 0 0 0 .449-.31l45.74-114.687c.065-.183-.016-.305-.195-.305h-16.67a.48.48 0 0 0-.427.305l-19.365 50.141h-.217l-17.097-50.14c-.04-.184-.236-.306-.41-.306M993.906 133.064c0 .509-.141.84-.41 1.038-.3.215-.711.306-1.214.306h-2.576v-2.621h2.72c.389 0 .683.06.901.162.372.182.579.548.579 1.115m1.85 6.028c-.12-.047-.216-.175-.294-.388a5.719 5.719 0 0 1-.054-.71l-.042-1.178c-.024-.577-.126-1.008-.369-1.244-.115-.207-.315-.348-.503-.493.243-.227.486-.458.684-.726.235-.371.362-.854.362-1.39 0-1.116-.47-1.889-1.382-2.317-.474-.192-1.05-.32-1.769-.32h-4.342v9.36h1.659v-3.818h2.523c.465 0 .799.066 1.01.141.313.2.484.507.512 1.02l.083 1.468c.021.362.042.595.072.742l.111.334.036.113h1.824v-.543m-11.252-3.927c0-1.918.717-3.66 2.036-4.978a7.081 7.081 0 0 1 4.965-2.034c1.865 0 3.605.72 4.914 2.034 1.325 1.319 2.045 3.06 2.045 4.978 0 3.833-3.128 6.946-6.96 6.946a7.079 7.079 0 0 1-4.964-2.022 6.892 6.892 0 0 1-2.036-4.924m7 8.37c2.253 0 4.346-.885 5.938-2.442a8.446 8.446 0 0 0 2.437-5.928 8.42 8.42 0 0 0-2.437-5.956 8.308 8.308 0 0 0-5.937-2.456 8.405 8.405 0 0 0-8.404 8.412c0 2.237.86 4.34 2.436 5.928a8.54 8.54 0 0 0 5.968 2.442"
              />
            </svg>
          </div>

          <div className="flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 62.59 19.022"
              className="filter grayscale hover:grayscale-0 h-6 lg:h-12"
            >
              <path
                fill="#0F7C10"
                d="M61.091 15.366l-3.645-4.947-3.641 4.947h-1.5l4.382-5.977-4.002-5.433h1.5l3.261 4.431 3.261-4.431h1.499l-3.999 5.432 4.383 5.978zM32.688 15.364l-4.387-5.976 4.002-5.432h-1.5l-3.262 4.432-3.259-4.432h-1.496l4 5.432-4.386 5.976h1.502l3.641-4.945 3.644 4.945z"
              />
              <path
                fill="#0F7C10"
                d="M41.028 9.82a3.197 3.197 0 0 0-.748-.476 2.585 2.585 0 0 0 1.372-2.285c0-.73-.269-3.104-3.709-3.104H33.31v4.919h-1.543c-.2.261-.655.888-.828 1.145h2.371v5.345l4.634.001c2.51 0 4.069-1.274 4.069-3.331 0-.898-.339-1.661-.985-2.214m-6.437-4.674h3.353c.907 0 2.427.226 2.427 1.813 0 1.2-.885 1.915-2.427 1.915h-3.353V5.146zm3.352 9.029H34.59v-4.153h3.353c1.271 0 2.792.351 2.792 1.987 0 1.884-1.749 2.166-2.792 2.166M48.04 3.693c-3.205 0-5.445 2.451-5.445 5.961 0 3.515 2.24 5.964 5.445 5.964 3.202 0 5.436-2.449 5.436-5.964 0-3.51-2.234-5.961-5.436-5.961m0 10.718c-2.442 0-4.153-1.957-4.153-4.757s1.711-4.756 4.153-4.756c2.438 0 4.139 1.956 4.139 4.756s-1.701 4.757-4.139 4.757M2.838 2.735l-.009.008v.001A9.48 9.48 0 0 0 0 9.511a9.47 9.47 0 0 0 1.944 5.761c.013.016.033.025.051.016.017-.01.018-.031.011-.049-.725-2.242 2.981-7.676 4.896-9.954.006-.008.014-.017.014-.028 0-.013-.009-.023-.018-.031C3.677 2.02 2.817 2.753 2.829 2.743M16.184 2.735l.009.008v.001a9.478 9.478 0 0 1 2.828 6.767 9.47 9.47 0 0 1-1.944 5.761c-.012.016-.033.025-.051.016-.016-.01-.017-.031-.011-.049.725-2.242-2.978-7.68-4.892-9.959-.007-.008-.014-.017-.014-.027 0-.014.008-.024.018-.032 3.222-3.206 4.076-2.468 4.065-2.478M9.511 0c1.919 0 3.498.526 4.954 1.392.018.009.023.029.016.047-.007.017-.027.021-.046.016-1.841-.398-4.64 1.193-4.904 1.352-.006.004-.012.008-.02.008-.009 0-.015-.004-.021-.008-.702-.403-3.289-1.759-4.918-1.342-.018.004-.038.001-.046-.017a.038.038 0 0 1 .016-.047C5.998.526 7.597 0 9.511 0M9.511 7.628c.011 0 .023.009.03.015 2.846 2.164 7.717 7.514 6.23 9.027l.002-.002-.001.002h-.002a9.471 9.471 0 0 1-6.26 2.353 9.476 9.476 0 0 1-6.261-2.353l-.002-.002.002.002c-1.484-1.513 3.386-6.863 6.229-9.027.008-.006.021-.015.033-.015"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="filter grayscale hover:grayscale-0 h-20 lg:h-32"
              viewBox="0 0 192.756 192.756"
            >
              <g fillRule="evenodd" clip-rule="evenodd">
                <path
                  fill="#EF4444"
                  d="M184.346 79.738a18.93 18.93 0 0 0-13.463-5.567H21.873c-10.498 0-19.039 8.526-19.039 19.008v6.399c0 5.076 1.98 9.85 5.576 13.439a18.926 18.926 0 0 0 13.462 5.567h149.01a18.93 18.93 0 0 0 13.463-5.567 18.866 18.866 0 0 0 5.576-13.439v-6.399a18.868 18.868 0 0 0-5.575-13.441zm3.381 19.844c0 9.131-7.455 16.561-16.617 16.561H21.646c-4.438 0-8.61-1.723-11.749-4.851s-4.867-7.286-4.867-11.71v-6.408c0-4.423 1.729-8.583 4.867-11.71a16.536 16.536 0 0 1 11.749-4.851h149.463c4.438 0 8.611 1.723 11.75 4.851a16.421 16.421 0 0 1 4.867 11.71v6.408h.001z"
                />
                <path
                  fill="#EF4444"
                  d="M52.62 88.394V84.28h-5.766v4.114h5.766zM52.623 105.455V91.054h-5.771v14.401h5.771zM36.208 97.49V84.256h5.787v21.217h-5.219L27.114 90.95c-.775-1.082-1.602-.566-1.653.412v14.11h-5.787V84.256h6.304l9.146 13.853c.36.514 1.032.412 1.084-.619zM57.542 91.062v14.384h5.755v-8.733c0-5.137 7.194-5.034 7.194.205v8.528h5.755V94.967c0-2.466-2.878-4.83-5.96-4.83-2.364 0-6.063 1.335-6.988 2.363v-1.438h-5.756zM113.373 91.045v14.421h5.789V96.71c0-5.15 7.236-5.047 7.236.206v8.55h5.789V94.959c0-2.472-2.895-4.841-5.996-4.841-2.377 0-6.098 1.339-7.029 2.37v-1.442h-5.789v-.001zM81.564 105.473V91.047h-4.24v-1.649h4.24V87.44h5.794v1.958h4.241v1.649h-4.241v14.426h-5.794zM175.99 85.253c-1.346 0-2.426 1.062-2.426 2.368 0 1.327 1.08 2.388 2.426 2.388 1.338 0 2.418-1.061 2.418-2.388 0-1.307-1.08-2.368-2.418-2.368zm0 4.389a1.997 1.997 0 0 1-2.004-2.021c0-1.1.877-2.001 2.004-2.001s1.996.901 1.996 2.001c0 1.12-.869 2.021-1.996 2.021z"
                />
                <path
                  fill="#EF4444"
                  d="M176.977 88.714c-.236-.357-.473-.709-.689-1.08.383-.08.627-.325.627-.702 0-.397-.279-.629-.766-.629h-1.035v2.657c.09-.007.18-.02.271-.02.09 0 .18.013.27.02v-1.246h.127l.723 1.246c.104-.007.207-.02.312-.02.104 0 .209.013.312.02l-.152-.246zm-1.321-1.122v-1.041h.215c.223 0 .445.02.445.484 0 .405-.207.59-.66.557zM166.031 90.186c-5.324 0-9.641 3.52-9.641 7.863s4.316 7.863 9.641 7.863 9.641-3.521 9.641-7.863-4.317-7.863-9.641-7.863zm2.883 11.358c0 1.591-1.291 2.879-2.883 2.879s-2.881-1.288-2.881-2.879v-6.785c0-1.59 1.289-2.879 2.881-2.879s2.883 1.289 2.883 2.879v6.785zM110.291 98.201c.002-.051.002-.102.002-.152 0-4.335-4.299-7.849-9.6-7.849-5.302 0-9.601 3.514-9.601 7.849s4.298 7.85 9.601 7.85c4.312 0 7.963-2.327 9.174-5.529l-6.295-.008v1.182a2.879 2.879 0 0 1-5.76 0v-3.342h12.479v-.001zm-12.475-3.44a2.876 2.876 0 1 1 5.754 0v1.285h-5.754v-1.285zM147.561 84.251v7.831c-1.654-1.185-3.826-1.648-4.758-1.545-1.441.16-7.445-.206-7.445 7.521 0 7.109 3.723 7.934 7.445 7.934 1.76 0 3.311-.618 4.758-1.545v1.029h5.791V84.251h-5.791zm0 18.021c-3.828 3.4-5.793.206-5.793-2.267v-3.709c0-3.916 4.24-4.225 5.793-1.855v7.831z"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>
      {/* //services section */}
      <section className="container mx-auto bg-hero sm:rounded-3xl mt-16">
        <div className="container px-12 py-12 mx-auto">
          <div className="lg:-mx-6 flex flex-col lg:flex-row items-center justify-center gap-16">
            <div className="mt-8 lg:w-1/3 lg:px-6 lg:mt-0">
              <p className="mt-6 text-lg font-medium text-red-500">Servicio</p>

              <h2 className="text-2xl font-semibold text-white lg:text-3xl lg:w-96">
                {services[0].title}
              </h2>

              <p className="max-w-lg mt-6 t©®©ext-gray-400 ">
                {services[0].description}
              </p>

              <div className="flex items-center justify-between mt-12 lg:justify-start">
                <button
                  title="left arrow"
                  className="p-2  transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-gray-700 text-gray-200  hover:bg-gray-100 hover:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  title="right arrow"
                  className="p-2  transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-gray-700 text-gray-200  lg:mx-6 hover:bg-gray-100 hover:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-56">
              <Image
                className="object-cover w-full h-full"
                src={chip.src}
                alt="chip"
                width={chip.width}
                height={chip.height}
              />
            </div>
          </div>
        </div>
      </section>
      {/* //contact call to action */}
      <section className="bg-white dark:bg-gray-900 py-20 mt-16">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            ¿Tienes alguna duda o consulta?{' '}
            <span className="text-red-500">
              ¡Conéctate con nosotros ahora mismo!
            </span>
          </h2>

          <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
            Si tienes alguna duda o consulta sobre nuestros servicios, no dudes
            en contactarnos a través de nuestro formulario de contacto o en
            nuestras redes sociales.
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <Link
              href="/get-in-touch"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-red-600 rounded-lg hover:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80"
            >
              ¡Contáctenos!
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
