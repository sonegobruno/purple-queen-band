import Image from 'next/image'
import Link from 'next/link'
import { LinkButton } from './LinkButton'

export function Header() {
  return (
    <header className="p-4 flex justify-evenly align-middle">
      <Link href="/" tabIndex={-1}>
        <Image
          src="/logo.svg"
          alt="Logo da banda Purple Queen"
          width={72}
          height={56}
        />
      </Link>

      <nav className="space-x-5 flex items-center">
        <LinkButton href="/">Início</LinkButton>
        <LinkButton href="/">Sobre a banda</LinkButton>
        <LinkButton href="/">Agenda</LinkButton>
        <LinkButton href="contact">Contato para shows</LinkButton>
      </nav>

      <div></div>
    </header>
  )
}
