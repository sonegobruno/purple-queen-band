import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { Article } from './components/Article'

type Props = HTMLAttributes<HTMLElement>

export function About({ className, ...rest }: Props) {
  return (
    <section className={twMerge('w-full p-8', className)} {...rest}>
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl text-center">Sobre nós</h2>

        <Article
          urlImage="/about-us-01.webp"
          description={`O tempo passa e a forma de nos interagir com o mundo e com as
            pessoas também muda. Muitas coisas sobrevivem a tais variações e é
            isso que a Purple Queen busca nesse projeto. Partindo de uma amizade
            de longa data a ideia é prolongar o amor a música e ao Rock N' Roll
            de forma energética e forte como de costume do estilo.`}
          imageShadow="shadow-green"
        />

        <Article
          urlImage="/about-us-02.webp"
          description={`O projeto conta com um repertório que navega por diversas e variadas
          fases do Rock, relembrando grandes clássicos dos anos 70, 80 e 90
          que continuam a fazer sucesso até os dias de hoje.`}
          imageShadow="shadow-primary-sm"
          className="md:flex-row-reverse"
        />
      </div>
    </section>
  )
}
