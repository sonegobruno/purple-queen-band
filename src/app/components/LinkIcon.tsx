import Link from 'next/link'
import { ElementType } from 'react'

interface Props {
  href: string
  icon: ElementType
}

export function LinkIcon({ href, icon: Icon }: Props) {
  return (
    <Link
      href={href}
      className="transition-all p-1 rounded-full focus:shadow-primary hover:shadow-primary"
    >
      <Icon size={18} />
    </Link>
  )
}
