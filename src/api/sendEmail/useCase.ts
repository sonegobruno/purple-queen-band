import { InvalidInputExeption } from './../../errors/InvalidInputException'
import { sendEmail } from '@/services/sendMail'
import { SendEmailDTO } from './dto'
import { isEmpty } from '@/utils/isEmpy'

export async function sendMailUseCase(data: SendEmailDTO) {
  if (isEmpty(data.name)) {
    throw new InvalidInputExeption('Campo nome é obrigatório')
  }

  if (isEmpty(data.email)) {
    throw new InvalidInputExeption('Campo email é obrigatório')
  }

  if (isEmpty(data.message)) {
    throw new InvalidInputExeption('Campo mensagem é obrigatório')
  }

  await sendEmail(data)
}
