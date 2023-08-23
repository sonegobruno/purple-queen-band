import { ReactNode, HTMLAttributes } from 'react'
import { Spinner } from '@/components'
import { buttonVariants } from '@/constants'
import { ButtonVariant } from '@/types'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  isLoading?: boolean
}

export function Button({
  children,
  variant = 'primary',
  isLoading = false,
  className,
  ...rest
}: Props) {
  return (
    <button
      disabled={isLoading}
      className={buttonVariants({ variant, className })}
      {...rest}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}
