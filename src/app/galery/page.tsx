import { imageGaleryList } from '@/constants'
import { Galery } from '@/templates/Galery'

export default function GaleryPage() {
  return <Galery images={imageGaleryList} />
}
