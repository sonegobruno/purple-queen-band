import { About } from '@/templates/About'
import { generateMetadata } from '@/utils'

export const metadata = generateMetadata('Sobre a banda')

export default function Aboutpage() {
  return <About />
}
