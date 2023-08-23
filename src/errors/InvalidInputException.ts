import { ExpectedError } from './ExpectedError'

export class InvalidInputException extends ExpectedError {
  constructor(message: string) {
    const status = 400
    super(message, status)
  }
}
