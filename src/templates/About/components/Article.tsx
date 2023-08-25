import Image from 'next/image'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLAttributes<HTMLElement> {
  urlImage: string
  description: string
  imageShadow?: string
}

export function Article({
  urlImage,
  description,
  imageShadow = '',
  className,
  ...rest
}: Props) {
  return (
    <article
      className={twMerge(
        'flex flex-col items-center gap-5 mt-12 md:items-start md:flex-row md:justify-between',
        className,
      )}
      {...rest}
    >
      <Image
        width={280}
        height={280}
        src={urlImage}
        alt=""
        className={twMerge('rounded-full', imageShadow)}
      />

      <p className="md:w-[50%] leading-loose md:text-lg text-justify">
        {description}
      </p>
    </article>
  )
}
