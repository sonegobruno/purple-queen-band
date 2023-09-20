'use client'
import {
  InstagramLogo,
  Phone,
  EnvelopeSimple,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { LinkIcon } from '@/components'

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
          <LinkIcon
            href="tel:35984396313"
            icon={Phone}
            iconConfig={{
              weight: 'bold',
            }}
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
