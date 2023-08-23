import { z } from 'zod'

export const schema = z
  .object({
    name: z.string().nonempty('Nome é obrigatório'),
    email: z
      .string()
      .email({ message: 'Email inválido' })
      .nonempty('Email é obrigatório'),
    message: z.string().nonempty('Mensagem é obrigatório'),
  })
  .required()
