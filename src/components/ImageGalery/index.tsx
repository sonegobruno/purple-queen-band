'use client'
import { HTMLAttributes, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/counter.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { lightboxStyles } from '@/constants'
import { twMerge } from 'tailwind-merge'
import { ImageGaleryProperty } from '@/types'

const CLOSED_LIGHTHOUSE_VALUE = -1

interface Props extends HTMLAttributes<HTMLDivElement> {
  images: ImageGaleryProperty[]
}

export function ImageGalery({ images, className, ...rest }: Props) {
  const [index, setIndex] = useState(CLOSED_LIGHTHOUSE_VALUE)

  return (
    <div
      className={twMerge(
        'carrousel md:grid-flow-row md:grid-cols-4 gap-3 pr-8 md:pr-0',
        className,
      )}
      {...rest}
    >
      {images.map((image, index) => (
        <button
          key={image.src}
          type="button"
          onClick={() => setIndex(index)}
          className="transition-all hover:opacity-75 min-w-[300px] snap-start"
        >
          <img src={image.src} alt="" className="rounded" />
        </button>
      ))}
      <Lightbox
        index={index}
        open={index !== CLOSED_LIGHTHOUSE_VALUE}
        close={() => setIndex(CLOSED_LIGHTHOUSE_VALUE)}
        slides={images}
        styles={{
          icon: lightboxStyles.icon,
          container: lightboxStyles.container,
          thumbnailsContainer: lightboxStyles.thumbnailContainer,
          thumbnail: lightboxStyles.thumbnailBackground,
        }}
        plugins={[Counter, Thumbnails]}
        counter={{
          container: {
            style: lightboxStyles.counterContainer,
          },
        }}
        thumbnails={lightboxStyles.thumbnails}
      />
    </div>
  )
}
