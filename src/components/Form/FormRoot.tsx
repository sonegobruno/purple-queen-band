import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

export function FormRoot({ children, className, ...rest }: Props) {
  return (
    <label className={twMerge('inline-block', className)} {...rest}>
      {children}
    </label>
  )
}
