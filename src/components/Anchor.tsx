import { ButtonVariant, getButtonVariantStyle } from '@/utils/buttonVariants'
import Link from 'next/link'
import { ReactNode, ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

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
    <Link
      className={twMerge(
        'flex justify-center border border-transparent items-center gap-2  py-2 px-3 rounded-sm font-bold transition-all focus:shadow-primary hover:brightness-90',
        getButtonVariantStyle(variant),
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
