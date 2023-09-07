'use client'
import { useState } from 'react'
import Lightbox, { SlideImage } from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/counter.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

const images: SlideImage[] = [
  {
    src: '/galery/image-01.jpeg',
    width: 300,
  },
  {
    src: '/galery/image-02.jpg',
    width: 300,
  },
  {
    src: '/galery/image-03.jpg',
    width: 300,
  },
  {
    src: '/galery/image-04.jpg',
    width: 300,
  },
  {
    src: '/galery/image-05.jpg',
    width: 300,
  },
  {
    src: '/galery/image-06.jpg',
    width: 300,
  },
]

const CLOSED_LIGHTHOUSE_VALUE = -1

export function ImageGalery() {
  const [index, setIndex] = useState(CLOSED_LIGHTHOUSE_VALUE)

  return (
    <div className="mt-4 flex items-center justify-center gap-2 overflow-auto p-x-4">
      {images.map((image, index) => (
        <button
          key={image.src}
          type="button"
          onClick={() => setIndex(index)}
          className="min-w-[200px]"
        >
          <img src={image.src} alt="" />
        </button>
      ))}

      <Lightbox
        index={index}
        open={index !== CLOSED_LIGHTHOUSE_VALUE}
        close={() => setIndex(CLOSED_LIGHTHOUSE_VALUE)}
        slides={images}
        styles={{
          icon: {
            color: '#F4F4EF',
            width: 24,
          },
          container: {
            background: '#0c0014c7',
            fontSize: '14px',
          },
          thumbnailsContainer: { background: '#0c0014c7' },
          thumbnail: { background: '#1A0F21' },
        }}
        plugins={[Counter, Thumbnails]}
        counter={{
          container: {
            style: { top: 'unset', bottom: 0, right: 0, textAlign: 'right' },
          },
        }}
        thumbnails={{
          position: 'bottom',
          width: 120,
          height: 80,
          border: 0,
          borderRadius: 4,
          gap: 8,
          showToggle: false,
          imageFit: 'cover',
        }}
      />
    </div>
  )
}
