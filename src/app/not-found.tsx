'use client'
import { Anchor } from '@/components'
import { House } from '@phosphor-icons/react'

export default function NotFound() {
  return (
    <main className="w-full h-screen bg-dark-tiny flex flex-col items-center justify-center">
      <strong className="text-light text-lg text-center">
        Não encontramos a página solicitada,
        <br />
        por favor acesse abaixo para retornar a página principal!
      </strong>
      <Anchor href="./" className="text-light w-[280px] mt-8">
        <House size={18} />
        Início
      </Anchor>
    </main>
  )
}
