import { Contact } from '@/templates/Contact'
import { generateMetadata } from '@/utils'

export const metadata = generateMetadata('Contato')

export default function ContactPage() {
  return <Contact />
}
