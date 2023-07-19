'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  href: string
  children: React.ReactNode
}

const ACTIVE_STYLE = 'text-primary border-primary'

export function LinkButton({ href, children }: Props) {
  const pathname = usePathname()

  const statusStyle = useMemo(() => {
    let styles = ''

    if (pathname === href) {
      styles += ` ${ACTIVE_STYLE}`
    }

    return styles
  }, [pathname, href])

  return (
    <Link
      href={href}
      className={twMerge(
        'transition-all shadow-md p-1 rounded-t-md border-b border-transparent focus:shadow-primary hover:text-primary hover:border-primary',
        statusStyle,
      )}
    >
      {children}
    </Link>
  )
}
