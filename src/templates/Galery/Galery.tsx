import { ImageGalery } from '@/components'
import { ImageGaleryProperty } from '@/types'

interface Props {
  images: ImageGaleryProperty[]
}

export function Galery({ images }: Props) {
  return (
    <section className="min-h-screen w-full py-8 pl-8 md:p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl">Galeria</h2>

        <h3 className="text-1xl mt-4">Fotos</h3>
        <ImageGalery images={images} className="mt-3" />
      </div>
    </section>
  )
}
