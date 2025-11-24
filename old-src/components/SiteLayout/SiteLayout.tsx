'use client'

import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import {useState} from 'react'
import {Link} from '@nextui-org/link'
import {usePathname} from 'next/navigation'
import {Button} from '@nextui-org/button'
import {Badge} from '@nextui-org/badge'
import Logo from '@components/Logo'
import {ShoppingBagIcon} from '@components/icons'
import ShoppingCartMenu from './components/ShoppingCartMenu'

export interface SiteLayoutProps {
  children: React.ReactNode
}

const NAV_LINKS = [
  {href: '/', label: 'Inicio'},
  {
    href: '/services',
    label: 'Servicios',
  },
  {
    href: '/shop',
    label: 'Tienda',
  },
  {
    href: '/get-in-touch',
    label: 'Contacto',
  },
]

export default function SiteLayout({children}: SiteLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname()

  React.useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname, setIsMenuOpen])

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        isBlurred
        classNames={{
          base: `bg-background-600 h-20 z-10 fixed top-0 transition-all duration-800 px-0 ease-in-out ${
            pathname === '/'
              ? ' lg:animate-[header-blur_linear_both_1ms] lg:backdrop-blur-md lg:[animation-range:0_1000px] lg:[animation-timeline:scroll()]'
              : ''
          }`,
          wrapper: 'max-w-screen-2xl mx-auto',
          menu: 'top-20',
        }}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden"
          />
          <NavbarBrand>
            <Logo className="h-8 w-28 sm:h-10 md:h-12 md:w-32" />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="center">
          <div className="hidden gap-10 lg:flex">
            {NAV_LINKS.map(({href, label}) => {
              const isActive =
                href === '/'
                  ? pathname === href
                  : pathname.startsWith(href) || pathname === href

              return (
                <NavbarItem key={href} isActive={isActive}>
                  <Link
                    href={href}
                    className={`${isActive ? 'text-primary' : 'text-white'}`}
                  >
                    {label}
                  </Link>
                </NavbarItem>
              )
            })}
          </div>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <ShoppingCartMenu />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {NAV_LINKS.map(({href, label}) => {
            const isActive =
              href === '/'
                ? pathname === href
                : pathname.startsWith(href) || pathname === href
            return (
              <NavbarMenuItem
                key={href}
                isActive={pathname === href}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link
                  href={href}
                  className={`w-full bg-transparent px-2 py-10 text-center text-lg ${
                    isActive ? 'text-primary' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </NavbarMenuItem>
            )
          })}
        </NavbarMenu>
      </Navbar>
      <main
        className={`${
          pathname !== '/' && !NAV_LINKS.some(({href}) => pathname === href)
            ? 'lg:mt-[80px]'
            : ''
        } min-h-[calc(100vh-370px)]`}
      >
        {children}
      </main>

      <footer className="bg-background-600 relative pt-10 pb-6">
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full flex-col px-4 text-white md:container">
            <div className="flex flex-col">
              <div className="mt-24 mb-12 flex flex-row items-center justify-between px-4">
                <Logo className="h-8 w-28 sm:h-10 md:h-12" />

                <div className="flex gap-4 lg:gap-10">
                  {NAV_LINKS.map(({href, label}) => (
                    <Link
                      key={href}
                      href={href}
                      className="lg:text-md hidden cursor-pointer text-sm text-gray-400 uppercase hover:text-white md:block"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-row items-center justify-between space-x-8">
                  <a
                    href="https://www.facebook.com/ReballingGames"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <svg
                      width="6"
                      height="12"
                      viewBox="0 0 6 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.89782 12V6.53514H5.67481L5.93895 4.39547H3.89782V3.03259C3.89782 2.41516 4.06363 1.99243 4.91774 1.99243H6V0.0847928C5.47342 0.0262443 4.94412 -0.00202566 4.41453 0.000112795C2.84383 0.000112795 1.76542 0.994936 1.76542 2.82122V4.39147H0V6.53114H1.76928V12H3.89782Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/reballing.games"
                    className="cursor-pointer"
                  >
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.99536 2.91345C5.17815 2.91345 4.39441 3.23809 3.81655 3.81594C3.2387 4.3938 2.91406 5.17754 2.91406 5.99475C2.91406 6.81196 3.2387 7.5957 3.81655 8.17356C4.39441 8.75141 5.17815 9.07605 5.99536 9.07605C6.81257 9.07605 7.59631 8.75141 8.17417 8.17356C8.75202 7.5957 9.07666 6.81196 9.07666 5.99475C9.07666 5.17754 8.75202 4.3938 8.17417 3.81594C7.59631 3.23809 6.81257 2.91345 5.99536 2.91345ZM5.99536 7.99586C5.46446 7.99586 4.9553 7.78496 4.57989 7.40955C4.20448 7.03415 3.99358 6.52499 3.99358 5.99408C3.99358 5.46318 4.20448 4.95402 4.57989 4.57861C4.9553 4.20321 5.46446 3.99231 5.99536 3.99231C6.52626 3.99231 7.03542 4.20321 7.41083 4.57861C7.78624 4.95402 7.99714 5.46318 7.99714 5.99408C7.99714 6.52499 7.78624 7.03415 7.41083 7.40955C7.03542 7.78496 6.52626 7.99586 5.99536 7.99586Z"
                        fill="white"
                      />
                      <path
                        d="M9.19863 3.51848C9.59537 3.51848 9.91698 3.19687 9.91698 2.80013C9.91698 2.4034 9.59537 2.08179 9.19863 2.08179C8.8019 2.08179 8.48029 2.4034 8.48029 2.80013C8.48029 3.19687 8.8019 3.51848 9.19863 3.51848Z"
                        fill="white"
                      />
                      <path
                        d="M11.6821 2.06975C11.5279 1.67138 11.2921 1.30961 10.99 1.00759C10.6879 0.705576 10.326 0.469972 9.92759 0.31586C9.46135 0.140842 8.9688 0.0462069 8.4709 0.0359839C7.82919 0.00799638 7.62594 0 5.99867 0C4.37139 0 4.16282 -6.70254e-08 3.52643 0.0359839C3.02891 0.0456842 2.53671 0.140339 2.07108 0.31586C1.67255 0.469792 1.31059 0.705333 1.00844 1.00737C0.706289 1.30941 0.47061 1.67127 0.316526 2.06975C0.141474 2.53595 0.0470554 3.02855 0.0373167 3.52643C0.00866281 4.16748 0 4.37072 0 5.99867C0 7.62594 -4.96485e-09 7.83319 0.0373167 8.4709C0.0473123 8.96935 0.14127 9.46113 0.316526 9.92825C0.471042 10.3266 0.70695 10.6883 1.00918 10.9903C1.3114 11.2923 1.6733 11.5279 2.07175 11.6821C2.5365 11.8642 3.0289 11.9656 3.52777 11.982C4.16948 12.01 4.37272 12.0187 6 12.0187C7.62728 12.0187 7.83585 12.0187 8.47223 11.982C8.97008 11.9719 9.46262 11.8775 9.92892 11.7028C10.3272 11.5483 10.689 11.3125 10.9911 11.0104C11.2932 10.7083 11.529 10.3466 11.6835 9.94825C11.8587 9.48179 11.9527 8.99 11.9627 8.49156C11.9913 7.85051 12 7.64727 12 6.01932C12 4.39138 12 4.18481 11.9627 3.54709C11.9549 3.04216 11.86 2.54237 11.6821 2.06975ZM10.8705 8.42159C10.8662 8.80562 10.7961 9.18608 10.6633 9.54642C10.5632 9.80555 10.41 10.0409 10.2135 10.2372C10.017 10.4336 9.78162 10.5867 9.52243 10.6866C9.16608 10.8188 8.78967 10.8889 8.4096 10.8938C7.77654 10.9231 7.59796 10.9305 5.97468 10.9305C4.35007 10.9305 4.18414 10.9305 3.53909 10.8938C3.15921 10.8892 2.78298 10.8191 2.42692 10.6866C2.16683 10.5873 1.93048 10.4345 1.73316 10.2381C1.53584 10.0417 1.38194 9.80605 1.28143 9.54642C1.15045 9.18995 1.08039 8.81398 1.07419 8.43425C1.04554 7.8012 1.03887 7.62261 1.03887 5.99933C1.03887 4.37539 1.03887 4.20946 1.07419 3.56375C1.0785 3.17993 1.14859 2.7997 1.28143 2.43958C1.48467 1.91382 1.90116 1.5 2.42692 1.29876C2.78316 1.16691 3.15928 1.09682 3.53909 1.09151C4.17281 1.06286 4.35073 1.05486 5.97468 1.05486C7.59862 1.05486 7.76522 1.05486 8.4096 1.09151C8.7897 1.09609 9.16617 1.1662 9.52243 1.29876C9.7816 1.39889 10.017 1.55211 10.2134 1.74858C10.4099 1.94504 10.5631 2.18041 10.6633 2.43958C10.7942 2.79606 10.8643 3.17203 10.8705 3.55175C10.8992 4.18547 10.9065 4.36339 10.9065 5.98734C10.9065 7.61062 10.9065 7.78521 10.8778 8.42226H10.8705V8.42159Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <hr className="border-background-400" />
              <p className="my-12 w-full text-center text-gray-400">
                Copyright © 2024 Reballing Games
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
