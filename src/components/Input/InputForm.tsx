import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLInputElement>

export function InputForm({ ...rest }: Props) {
  return (
    <input
      type="text"
      className="transition-all bg-dark h-8 rounded-sm p-2 border border-transparent text-sm focus:shadow-primary hover:border-primary"
      {...rest}
    />
  )
}
