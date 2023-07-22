import { Input } from '@/components/Input'

export function Contact() {
  return (
    <section className="h-screen w-full p-8 bg-dark-tiny">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center">Contato</h2>
        <Input.Root className="mt-5">
          <Input.Label>Nome</Input.Label>
          <Input.Input placeholder="Digite o nome"></Input.Input>
          <Input.Footer></Input.Footer>
        </Input.Root>
      </div>
    </section>
  )
}
