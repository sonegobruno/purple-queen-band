import { buttonVariants } from '@/constants'
import { ButtonVariant } from '@/types'
import Link from 'next/link'
import { ReactNode, ComponentProps } from 'react'

interface Props extends ComponentProps<typeof Link> {
  children: ReactNode
  variant?: ButtonVariant
}

export function Anchor({
  children,
  variant = 'primary',
  className,
  ...rest
}: Props) {
  return (
    <Link className={buttonVariants({ variant, className })} {...rest}>
      {children}
    </Link>
  )
}
