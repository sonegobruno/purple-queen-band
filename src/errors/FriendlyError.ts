export class FriendlyError {
  message = ''
  status = 400
  metadata = ''

  constructor(message: string, status = 400, metadata = '') {
    this.message = message
    this.status = status
    this.metadata = metadata
  }
}
