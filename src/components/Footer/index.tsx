'use client'
import {
  InstagramLogo,
  EnvelopeSimple,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { LinkIcon } from '@/components'
import { INSTALGRAM_URL, MAIL_URL, WHATSAPP_URL } from '@/constants'

export function Footer() {
  return (
    <footer className="flex bg-dark items-center flex-col py-8 px-4">
      <div className="social-media">
        <h2 className="text-center text-lg md:text-xl font-bold">
          Agendamento
        </h2>
        <p className="text-center text-xs mt-1">purplequeenband@gmail.com</p>
        <p className="text-center text-xs">Tel: (35) 98439-6313</p>
        <nav className="flex items-center justify-center gap-2 mt-2">
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
      </div>
      <div className="made-by mt-8">
        <p className="text-center text-xs">
          2023 - Desenvolvido por
          <a
            className="font-bold ml-1 transition-all hover:underline focus:underline"
            href="https://github.com/sonegobruno"
            target="_blank"
            rel="noreferrer"
          >
            Bruno Sônego
          </a>
        </p>
      </div>
    </footer>
  )
}
