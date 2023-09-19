import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = HTMLAttributes<HTMLDivElement> & {
  videos: string[]
}

export function VideoGalery({ videos, className, ...rest }: Props) {
  return (
    <div
      className={twMerge(
        'carrousel md:grid-flow-row md:grid-cols-4 gap-3 pr-8 md:pr-0',
        className,
      )}
      {...rest}
    >
      {videos.map((videoUrl) => (
        <iframe
          key={videoUrl}
          width="300"
          height="300"
          src={`https://www.youtube.com/embed/${videoUrl}`}
        ></iframe>
      ))}
    </div>
  )
}
