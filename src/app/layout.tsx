import './globals.css'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Roboto_Slab } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home | Banda Purple Queen',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          robotoSlab.className,
          'bg-dark text-light h-screen max-w-[100vw]',
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
