import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Providers} from './providers'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Reballing Games',
  description:
    'Welcome to Reballing Games, the best technical service in for your consoles in Nicaragua',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} red-dark`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
