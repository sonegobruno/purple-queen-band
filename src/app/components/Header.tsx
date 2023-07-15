import { Instagram, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { LinkButton } from './LinkButton'
import { LinkIcon } from './LinkIcon'

export function Header() {
  return (
    <header className="p-4 space-x-12 flex justify-center items-center">
      <Link href="/" tabIndex={-1}>
        <Image
          src="/logo.svg"
          alt="Logo da banda Purple Queen"
          width={72}
          height={56}
        />
      </Link>

      <nav className="space-x-3 flex items-center">
        <LinkButton href="/">Início</LinkButton>
        <LinkButton href="/about">Sobre a banda</LinkButton>
        <LinkButton href="/schedule">Agenda</LinkButton>
        <LinkButton href="contact">Contato para shows</LinkButton>
      </nav>

      <nav className="space-x-2 flex items-center">
        <LinkIcon
          href="https://www.instagram.com/purplequeenband"
          icon={Instagram}
        />

        <LinkIcon href="mailto:purplequeenband@gmail.com" icon={Mail} />
        <LinkIcon href="tel:35984396313" icon={Phone} />
      </nav>
    </header>
  )
}
