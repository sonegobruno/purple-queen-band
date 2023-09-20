import { IconProps } from '@phosphor-icons/react'
import Link from 'next/link'
import { ComponentProps, ElementType } from 'react'

interface Props extends ComponentProps<typeof Link> {
  icon: ElementType
  iconConfig?: IconProps
}

export function LinkIcon({ icon: Icon, iconConfig, ...rest }: Props) {
  return (
    <Link
      className="transition-all p-1 rounded-full focus:shadow-primary hover:shadow-primary"
      {...rest}
    >
      <Icon size={18} {...iconConfig} />
    </Link>
  )
}
