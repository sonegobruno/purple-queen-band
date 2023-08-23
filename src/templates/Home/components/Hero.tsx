'use client'
import { Anchor } from '@/components'
import { Guitar } from '@phosphor-icons/react'

export function Hero() {
  return (
    <section className="flex w-full h-[calc(100vh-80px)] container mx-auto">
      <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
        <h1 className="text-2xl md:text-4xl font-bold leading-10 mt-4 text-center">
          Conheça <br />
          nossa banda
        </h1>
        <p className="text-sm  md:text-lg  mt-3 text-center">
          Uma experiência Rock n&apos; Roll única
        </p>
        <Anchor href="contact" className="mt-4">
          Nos chame para seu evento <Guitar weight="fill" />
        </Anchor>
      </div>
    </section>
  )
}
