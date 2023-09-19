'use client' // Error components must be Client Components

import { Button } from '@/components'
import { House } from '@phosphor-icons/react'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error('A error ocorrour', error)
  }, [error])

  return (
    <section className="h-screen w-full p-8 bg-dark flex items-center justify-center flex-col gap-8">
      <h2>Algo deu errado!</h2>
      <Button onClick={() => reset()}>
        <House size={18} />
        Início
      </Button>
    </section>
  )
}
