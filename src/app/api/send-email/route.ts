import {
  UNEXPECT_ERROR_MESSAGE,
  errorResponse,
  HttpResponseStatus,
  successResponse,
} from '@/constants'
import { SendEmailDTO } from '@/api/sendEmail/dto'
import { sendMailUseCase } from '@/api/sendEmail/useCase'
import { ExpectedError } from '@/errors'

export async function POST(request: Request) {
  const body: SendEmailDTO = await request.json()

  try {
    await sendMailUseCase(body)

    return successResponse({ message: 'Email enviado com sucesso' })
  } catch (error) {
    console.error(
      `Error /api/send-email method POST. PARAMS -> ${JSON.stringify(body)}`,
      error,
    )

    if (error instanceof ExpectedError) {
      return errorResponse({ message: error.message }, error.status)
    }

    return errorResponse(
      { message: UNEXPECT_ERROR_MESSAGE },
      HttpResponseStatus.INTERNAL_SERVER_ERROR,
    )
  }
}
