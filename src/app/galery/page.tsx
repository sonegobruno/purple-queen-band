import { imageGaleryList } from '@/constants'
import { Galery } from '@/templates/Galery'
import { generateMetadata } from '@/utils'

export const metadata = generateMetadata('Galeria')

export default function GaleryPage() {
  return <Galery images={imageGaleryList} />
}
