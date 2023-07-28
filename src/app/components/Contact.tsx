import { Button } from '@/components/Button'
import { Form } from '@/components/Form'

export function Contact() {
  return (
    <section className="h-screen w-full p-8">
      <div className="container mx-auto">
        <form className="bg-dark/25 backdrop-blur-sm border border-dark/25 shadow-dark max-w-lg mx-auto mt-6 rounded-2xl p-5">
          <h2 className="text-3xl text-center">Contato</h2>
          <Form.Root className="mt-5 w-full">
            <Form.Label>Nome</Form.Label>
            <Form.Input
              className="w-full"
              placeholder="Digite o nome"
            ></Form.Input>
            <Form.Footer></Form.Footer>
          </Form.Root>

          <Form.Root className="mt-5  w-full">
            <Form.Label>Email</Form.Label>
            <Form.Input
              className="w-full"
              placeholder="Digite o E-mail"
            ></Form.Input>
            <Form.Footer></Form.Footer>
          </Form.Root>

          <Form.Root className="mt-5  w-full">
            <Form.Label>Mensagem</Form.Label>
            <Form.Input
              className="w-full"
              placeholder="Digite a mensagem"
            ></Form.Input>
            <Form.Footer></Form.Footer>
          </Form.Root>

          <Button className="mt-5 mx-auto max-w-[17rem]">Enviar</Button>
        </form>
      </div>
    </section>
  )
}
