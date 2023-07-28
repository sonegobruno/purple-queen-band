import { ReactNode, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { ButtonVariant, getButtonVariantStyle } from '@/utils/buttonVariants'

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
    <button
      className={twMerge(
        'w-full flex justify-center border border-transparent items-center gap-2  py-2 px-3 rounded-sm font-bold transition-all focus:shadow-primary hover:brightness-90',
        getButtonVariantStyle(variant),
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
