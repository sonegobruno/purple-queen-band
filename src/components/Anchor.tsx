import Link from 'next/link'
import { ReactNode, useMemo, ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends ComponentProps<typeof Link> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Anchor({
  children,
  variant = 'primary',
  className,
  ...rest
}: Props) {
  const typeStyle: string = useMemo(() => {
    let style = ''

    if (variant === 'primary') {
      style += ' bg-primary'
    }

    if (variant === 'secondary') {
      style += ' border-primary text-primary'
    }

    if (variant === 'ghost') {
      style += ' text-primary hover:bg-primary/5'
    }

    return style
  }, [variant])

  return (
    <Link
      className={twMerge(
        'flex justify-center border border-transparent items-center gap-2  py-2 px-3 rounded-sm font-bold transition-all focus:shadow-primary hover:brightness-90',
        typeStyle,
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
