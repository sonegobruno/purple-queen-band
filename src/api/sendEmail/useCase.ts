import { SendEmailDTO } from './dto'
import { isEmpty } from '@/utils'
import { InvalidInputException } from '@/errors'
import { sendEmail } from '../services/sendEmail'

export async function sendMailUseCase(data: SendEmailDTO) {
  if (isEmpty(data.name)) {
    throw new InvalidInputException('Campo nome é obrigatório')
  }

  if (isEmpty(data.email)) {
    throw new InvalidInputException('Campo email é obrigatório')
  }

  if (isEmpty(data.message)) {
    throw new InvalidInputException('Campo mensagem é obrigatório')
  }

  await sendEmail(data)
}
