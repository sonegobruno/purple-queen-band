import { ExpectedError } from './ExpectedError'

export class InvalidInputExeption extends ExpectedError {
  constructor(message: string) {
    const status = 400
    super(message, status)
  }
}
