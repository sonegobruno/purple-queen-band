import Image from 'next/image'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = HTMLAttributes<HTMLElement>

/* eslint-disable react/no-unescaped-entities */
export function About({ className, ...rest }: Props) {
  return (
    <section className={twMerge('w-full p-8', className)} {...rest}>
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl text-center">Sobre nós</h2>

        <article className="flex flex-col items-center gap-5 mt-12 md:items-start md:flex-row md:justify-between">
          <Image
            width={280}
            height={280}
            src="/about-us-01.jpg"
            alt="Logo da banda Purple Queen"
            className="rounded-full shadow-green"
          />

          <p className="md:w-[50%] leading-loose md:text-lg text-justify">
            O tempo passa e a forma de nos interagir com o mundo e com as
            pessoas também muda. Muitas coisas sobrevivem a tais variações e é
            isso que a Purple Queen busca nesse projeto. Partindo de uma amizade
            de longa data a ideia é prolongar o amor a música e ao Rock N' Roll
            de forma energética e forte como de costume do estilo.
          </p>
        </article>

        <article className="flex flex-col-reverse items-center gap-5 mt-12 md:items-start md:flex-row md:justify-between">
          <p className="md:w-[50%] leading-loose md:text-lg text-justify">
            O projeto conta com um repertório que navega por diversas e variadas
            fases do Rock, relembrando grandes clássicos dos anos 70, 80 e 90
            que continuam a fazer sucesso até os dias de hoje.
          </p>
          <Image
            width={280}
            height={280}
            src="/about-us-02.jpeg"
            alt="Logo da banda Purple Queen"
            className="rounded-full shadow-primary-sm"
          />
        </article>
      </div>
    </section>
  )
}
