import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const ACTIVE_STYLE = 'text-primary border-primary'

export function useLinkButton(href: string) {
  const pathname = usePathname()

  const statusStyle = useMemo(() => {
    let styles = ''

    if (pathname === href) {
      styles += ` ${ACTIVE_STYLE}`
    }

    return styles
  }, [pathname, href])

  return { statusStyle }
}
