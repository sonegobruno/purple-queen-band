import { Instagram, Mail, Phone } from 'lucide-react'
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
            icon={Instagram}
          />

          <LinkIcon href="mailto:purplequeenband@gmail.com" icon={Mail} />
          <LinkIcon href="tel:35984396313" icon={Phone} />
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
