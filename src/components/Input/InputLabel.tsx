import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function InputLabel({ children }: Props) {
  return <p className="text-sm">{children}</p>
}
