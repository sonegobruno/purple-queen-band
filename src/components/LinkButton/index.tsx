'use client'

import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { useLinkButton } from './hooks/useLinkButton'

interface Props {
  href: string
  children: React.ReactNode
}

export function LinkButton({ href, children }: Props) {
  const { statusStyle } = useLinkButton(href)

  return (
    <Link
      href={href}
      className={twMerge(
        'transition-all text-center leading-tight shadow-md p-1 rounded-t-md border-b border-transparent focus:shadow-primary hover:text-primary hover:border-primary',
        statusStyle,
      )}
    >
      {children}
    </Link>
  )
}
