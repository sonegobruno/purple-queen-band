export class ExpectedError {
  message = ''
  status = 0

  constructor(message: string, status: number) {
    this.message = message
    this.status = status
  }
}
