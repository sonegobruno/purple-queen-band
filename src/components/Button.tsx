import { ReactNode, HTMLAttributes } from 'react'
import { ButtonVariant, buttonVariants } from '@/utils/buttonVariants'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
}

export function Button({
  children,
  variant = 'primary',
  className,
  ...rest
}: Props) {
  return (
    <button className={buttonVariants({ variant, className })} {...rest}>
      {children}
    </button>
  )
}
