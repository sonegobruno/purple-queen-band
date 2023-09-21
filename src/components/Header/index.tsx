'use client'
import {
  EnvelopeSimple,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { LinkIcon, SidebarMenu, LinkButton } from '@/components'
import { INSTALGRAM_URL, MAIL_URL, WHATSAPP_URL } from '@/constants'

export function Header() {
  return (
    <header className="h-[80px] p-4 space-x-12 flex justify-between md:justify-center items-center">
      <SidebarMenu />

      <Link
        aria-label="Acessar páginar inicial"
        href="/"
        tabIndex={-1}
        className="relative w-[72px] h-[56px] md:w-[88px] md:h-[72px]"
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
          aria-label="Acessar instagram da banda"
          href={INSTALGRAM_URL}
          icon={InstagramLogo}
          iconConfig={{
            weight: 'bold',
          }}
          target="_blank"
        />
        <LinkIcon
          aria-label="Acessar whatsapp da banda"
          href={WHATSAPP_URL}
          icon={WhatsappLogo}
          iconConfig={{
            weight: 'bold',
          }}
          target="_blank"
        />
        <LinkIcon
          aria-label="Enviar email para a banda"
          href={MAIL_URL}
          icon={EnvelopeSimple}
          iconConfig={{
            weight: 'bold',
          }}
          target="_blank"
        />
      </nav>
    </header>
  )
}
