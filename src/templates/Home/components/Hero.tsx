'use client'
import { Anchor } from '@/components'
import { Guitar } from '@phosphor-icons/react'

export function Hero() {
  return (
    <section className="flex w-full h-[calc(100vh-80px)] container mx-auto">
      <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold leading-10 text-center">
          Banda Purple Queen
        </h1>
        <p className="text-xs md:text-md mt-2 text-center">
          Banda de Rock localizada no sul de Minas Gerais <br />
          que irá te trazer uma experiência Rock n&apos; Roll única.
        </p>
        <Anchor href="contact" className="mt-4">
          Agende o seu show <Guitar weight="fill" />
        </Anchor>
      </div>
    </section>
  )
}
