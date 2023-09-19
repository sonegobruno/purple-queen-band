'use client'
import {
  EnvelopeSimple,
  InstagramLogo,
  Phone,
  WhatsappLogo,
} from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { LinkIcon, SidebarMenu, LinkButton } from '@/components'

export function Header() {
  return (
    <header className="h-[80px] p-4 space-x-12 flex justify-between md:justify-center items-center">
      <SidebarMenu />

      <Link
        href="/"
        tabIndex={-1}
        className="relative w-[56px] h-[40px] md:w-[72px] md:h-[56px]"
      >
        <Image src="/logo.svg" alt="Logo da banda Purple Queen" fill />
      </Link>

      <nav className="hidden md:flex gap-3 items-center">
        <LinkButton href="/">Início</LinkButton>
        <LinkButton href="/about">Sobre a banda</LinkButton>
        <LinkButton href="/galery">Galeria</LinkButton>
        <LinkButton href="contact">Contato para shows</LinkButton>
      </nav>

      <nav className="hidden md:flex gap items-center">
        <LinkIcon
          href="https://www.instagram.com/purplequeenband"
          icon={InstagramLogo}
          iconConfig={{
            weight: 'bold',
          }}
        />
        <LinkIcon
          href="https://wa.me/5535984396313"
          icon={WhatsappLogo}
          iconConfig={{
            weight: 'bold',
          }}
        />
        <LinkIcon
          href="mailto:purplequeenband@gmail.com"
          icon={EnvelopeSimple}
          iconConfig={{
            weight: 'bold',
          }}
        />
        <LinkIcon href="tel:35984396313" icon={Phone} />
      </nav>
    </header>
  )
}
