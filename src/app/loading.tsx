import { Spinner } from '@/components'

export default function Loading() {
  return (
    <div className="absolute inset-0 bg-dark flex items-center justify-center">
      <Spinner />
      <p>Carregando</p>
    </div>
  )
}
