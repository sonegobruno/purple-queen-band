import { ImageGalery } from '@/components'

const images = [
  {
    src: '/galery/image-01.jpeg',
    width: 500,
  },
  {
    src: '/galery/image-02.jpg',
    width: 500,
  },
  {
    src: '/galery/image-03.jpg',
    width: 500,
  },
  {
    src: '/galery/image-04.jpg',
    width: 500,
  },
  {
    src: '/galery/image-05.jpg',
    width: 500,
  },
  {
    src: '/galery/image-06.jpg',
    width: 500,
  },
]

export function Galery() {
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
