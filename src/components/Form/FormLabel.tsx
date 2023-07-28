import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function FormLabel({ children }: Props) {
  return <p className="text-sm mb-2">{children}</p>
}
