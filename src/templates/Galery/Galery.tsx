'use client'

import { Anchor, ImageGalery } from '@/components'
import { ImageGaleryProperty } from '@/types'
import { Images } from '@phosphor-icons/react'

interface Props {
  images: ImageGaleryProperty[]
  isPreview?: boolean
}

export function Galery({ images, isPreview = false }: Props) {
  return (
    <section className="min-h-screen w-full py-8 pl-8 md:p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl text-center">Galeria</h2>
        <h3 className="text-xl mt-4">Fotos</h3>
        <ImageGalery images={images} className="mt-3" />
        {/* TODO: Waiting have videos
        <h3 className="text-xl mt-4">Videos</h3>
        <VideoGalery videos={videoGalery} className="mt-3" /> */}
        {isPreview && (
          <Anchor href="galery" className="mt-8 max-w-[300px] mx-auto">
            <Images size={24} />
            Acessar galeria
          </Anchor>
        )}
      </div>
    </section>
  )
}
