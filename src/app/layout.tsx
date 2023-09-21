import '@/styles/globals.css'
// eslint-disable-next-line camelcase
import { Roboto_Slab } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { Header, Footer } from '@/components'
import { AppProviders } from '@/contexts'
import { Suspense } from 'react'
import Loading from './loading'
import { generateMetadata } from '@/utils'

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export const metadata = generateMetadata('Início')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={twMerge(
          robotoSlab.className,
          'text-light h-screen max-w-[100vw] bg-dark',
        )}
      >
        <Suspense fallback={<Loading />} />
        <AppProviders>
          <Header />
          {children}
          <Footer />
          <div className="background-image"></div>
        </AppProviders>
      </body>
    </html>
  )
}
