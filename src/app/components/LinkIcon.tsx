import { IconProps } from '@phosphor-icons/react'
import Link from 'next/link'
import { ElementType } from 'react'

interface Props {
  href: string
  icon: ElementType
  iconConfig?: IconProps
}

export function LinkIcon({ href, icon: Icon, iconConfig }: Props) {
  return (
    <Link
      href={href}
      className="transition-all p-1 rounded-full focus:shadow-primary hover:shadow-primary"
    >
      <Icon size={18} {...iconConfig} />
    </Link>
  )
}
