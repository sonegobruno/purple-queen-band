import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

export function InputRoot({ children, className, ...rest }: Props) {
  return (
    <label className={twMerge('space-y-2 inline-block', className)} {...rest}>
      {children}
    </label>
  )
}
