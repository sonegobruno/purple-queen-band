import Link from 'next/link'

interface Props {
  href: string
  children: React.ReactNode
}

export function LinkButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="transition-all shadow-md p-1 rounded-sm border-b focus:shadow-primary hover:text-primary hover:border-primary"
    >
      {children}
    </Link>
  )
}
