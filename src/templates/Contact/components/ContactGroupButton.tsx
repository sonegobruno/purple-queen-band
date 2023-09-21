'use client'
import { Anchor } from '@/components'
import { INSTALGRAM_URL, MAIL_URL, WHATSAPP_URL } from '@/constants'
import {
  EnvelopeSimple,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'

export function ContactGroupButton() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-4">
      <Anchor
        className="w-full sm:w-auto"
        variant="secondary"
        href={INSTALGRAM_URL}
        target="_blank"
      >
        <InstagramLogo size={24} />
        Instagram
      </Anchor>

      <Anchor
        className="w-full sm:w-auto"
        variant="secondary"
        href={WHATSAPP_URL}
        target="_blank"
      >
        <WhatsappLogo size={24} />
        Whatsapp
      </Anchor>

      <Anchor
        className="w-full sm:w-auto"
        variant="secondary"
        href={MAIL_URL}
        target="_blank"
      >
        <EnvelopeSimple size={24} />
        Email
      </Anchor>
    </div>
  )
}
