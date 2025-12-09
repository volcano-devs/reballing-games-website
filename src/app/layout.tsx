import type {Metadata} from 'next'
import {Oxanium, Inter} from 'next/font/google'

import {ThemeProvider} from '#/components/layout/ThemeProvider'
import TheHeader from '#/components/layout/TheHeader'
import TheFooter from '#/components/layout/TheFooter'
import './globals.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

export const oxanium = Oxanium({
  variable: '--font-oxanium',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  display: 'auto',
})

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'auto',
})

export const metadata: Metadata = {
  title: 'Reballing Games',
  description: 'Technical Services and Consulting for the Video Game Industry',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{colorScheme: 'dark'}}>
      <body className={`${oxanium.variable} ${inter.variable} dark font-sans`}>
        <ThemeProvider>
          <TheHeader />
          <main>{children}</main>
          <TheFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
