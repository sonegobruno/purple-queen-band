'use client'
import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { api } from '@/services/api'
import { errorHandler } from '@/errors/errorHandler'
import { useState } from 'react'

const schema = z
  .object({
    name: z.string().nonempty('Nome é obrigatório'),
    email: z
      .string()
      .email({ message: 'Email inválido' })
      .nonempty('Email é obrigatório'),
    message: z.string().nonempty('Mensagem é obrigatório'),
  })
  .required()

type FormValues = z.infer<typeof schema>

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(data: FormValues) {
    setIsLoading(true)
    try {
      await api.post('send-email', data)
    } catch (error) {
      errorHandler(error, 'send a email')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="h-screen w-full p-8">
      <div className="container mx-auto">
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
      </div>
    </section>
  )
}
