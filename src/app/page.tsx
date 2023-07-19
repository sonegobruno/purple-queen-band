'use client'
import { Guitar } from '@phosphor-icons/react'
import Link from 'next/link'
import { Button } from './components/Button'

export default function Home() {
  return (
    <main className="md:h-[calc(100vh-80px)] max-w-5xl mx-auto">
      <section className="flex w-full h-full">
        <div className="w-full h-full p-4 md:p-8">
          <h1 className="text-3xl font-bold leading-9 mt-4 md:mt-[25vh]">
            Conheceça <br />
            nossa banda
          </h1>
          <p className="text-md mt-3">
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
    </main>
  )
}
