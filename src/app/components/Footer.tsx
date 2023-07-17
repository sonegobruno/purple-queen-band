'use client'
import {
  InstagramLogo,
  Phone,
  EnvelopeSimple,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { LinkIcon } from './LinkIcon'

export function Footer() {
  return (
    <footer className="flex items-center flex-col py-8">
      <div className="schedule">
        <h2 className="text-center text-xl font-bold">Agendamento</h2>
        <p className="text-center text-xs mt-1">purplequeenband@gmail.com</p>
        <p className="text-center text-xs">Tel: (35) 98439-6313</p>
      </div>
      <div className="social-medial mt-8">
        <h2 className="text-center text-xl font-bold">Siga-nos:</h2>
        <nav className="flex items-center gap-2 mt-1">
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
          @2023 Orgulhosamento criado por Bruno Sônego
        </p>
      </div>
    </footer>
  )
}
