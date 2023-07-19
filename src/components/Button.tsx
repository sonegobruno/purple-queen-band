import { ReactNode, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, className, ...rest }: Props) {
  return (
    <button
      className={twMerge(
        'flex justify-center items-center gap-2 bg-primary py-2 px-3 rounded-sm font-bold transition-all focus:shadow-primary hover:brightness-90',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
