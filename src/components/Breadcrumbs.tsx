import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '#/components/ui/breadcrumb'
import {Fragment} from 'react/jsx-runtime'

export interface BreadcrumbsProps {
  pageTitle?: string
  paths?: Array<{label: string; href?: string}>
}

export default function Breadcrumbs({paths, pageTitle}: BreadcrumbsProps) {
  return (
    <section className="relative w-full bg-gray-900 lg:grid lg:h-[35vh] lg:place-content-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center contrast-125 filter"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1643489069237-3548135218c8?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/80" />

      <div className="z-20 mx-auto w-screen max-w-7xl px-6 py-16 sm:py-24 lg:px-12 lg:py-44">
        <div className="relative z-10 pt-20 lg:max-w-[40vw]">
          <h1 className="text-4xl font-bold text-white lg:text-5xl">
            {pageTitle}
          </h1>

          <div className="mt-4 text-base text-pretty text-gray-200 sm:text-lg/relaxed">
            <Breadcrumb>
              <BreadcrumbList>
                {paths?.map(({label, href}, index) => (
                  <Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href={href}
                        className="font-bold tracking-wide"
                      >
                        {label}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < paths.length - 1 && <BreadcrumbSeparator />}
                  </Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </section>
  )
}
