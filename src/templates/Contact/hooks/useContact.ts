import { useToast } from '@/contexts/toast'
import { errorHandler } from '@/errors/errorHandler'
import { usePost } from '@/services/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schema } from '../schemas'
import { FormValues } from '../types'

export function useContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const { handler, isLoading } = usePost()

  const { showToast } = useToast()

  async function onSubmit(data: FormValues) {
    try {
      await handler('send-email', data)

      showToast({
        type: 'success',
        description:
          'Recebemos a sua mensagem, agora aguarde que logo entraremos em contato',
      })
      reset()
    } catch (error) {
      const message = errorHandler(error, 'send a email')

      showToast({
        type: 'error',
        description: message.message,
      })
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isLoading,
  }
}
