'use client'
import { Button, Form } from '@/components'
import { useContact } from '../hooks/useContact'

export function ContactForm() {
  const { register, errors, handleSubmit, onSubmit, isLoading } = useContact()

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-dark/60 backdrop-blur-sm border border-dark/25 shadow-dark max-w-lg mx-auto mt-6 rounded-2xl p-5"
    >
      <h2 className="text-3xl text-center">Contato</h2>
      <Form.Root className="mt-5 w-full">
        <Form.Label>Nome</Form.Label>
        <Form.Input
          className="w-full"
          placeholder="Digite o nome"
          error={errors.name?.message}
          {...register('name')}
        ></Form.Input>
        <Form.Footer message={errors.name?.message}></Form.Footer>
      </Form.Root>

      <Form.Root className="mt-5  w-full">
        <Form.Label>Email</Form.Label>
        <Form.Input
          className="w-full"
          placeholder="Digite o E-mail"
          error={errors.email?.message}
          {...register('email')}
        ></Form.Input>
        <Form.Footer message={errors.email?.message}></Form.Footer>
      </Form.Root>

      <Form.Root className="mt-5  w-full">
        <Form.Label>Mensagem</Form.Label>
        <Form.Input
          className="w-full"
          placeholder="Digite a mensagem"
          error={errors.message?.message}
          {...register('message')}
        ></Form.Input>
        <Form.Footer message={errors.message?.message}></Form.Footer>
      </Form.Root>

      <Button
        isLoading={isLoading}
        className="mt-5 mx-auto w-full max-w-[17rem]"
      >
        Enviar
      </Button>
    </form>
  )
}
