import { UNEXPECT_ERROR_MESSAGE } from '@/constants/errorMessage'
import { FriendlyError } from './FriendlyError'

type Error = {
  message: string
}

export function errorHandler(error: unknown, logErrorMessage = '...'): Error {
  console.error(`An error ocorrour to ${logErrorMessage} -> `, error)

  if (error instanceof FriendlyError) {
    return {
      message: error.message,
    }
  }

  return {
    message: UNEXPECT_ERROR_MESSAGE,
  }
}
