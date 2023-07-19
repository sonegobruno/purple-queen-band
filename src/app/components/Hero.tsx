'use client'
import { Guitar } from '@phosphor-icons/react'
import Link from 'next/link'
import { Button } from '../../components/Button'

export function Hero() {
  return (
    <section className="flex w-full h-full">
      <div className="w-full h-full flex flex-col items-center md:items-start p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold leading-9 mt-4 md:mt-[25vh]">
          Conheceça <br />
          nossa banda
        </h1>
        <p className="text-sm  md:text-md  mt-3">
          Uma experiência Rock n&apos; Roll única
        </p>
        <Link href="contact" tabIndex={-1}>
          <Button className="mt-4">
            Nos chame para seu evento <Guitar weight="fill" />
          </Button>
        </Link>
      </div>
      <div className="w-full h-full hidden md:block"></div>
    </section>
  )
}
