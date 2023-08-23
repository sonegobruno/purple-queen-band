export const isTruthy = <T>(
  input: T | null | undefined,
): input is NonNullable<T> => input !== undefined && input !== null

export const assertType = (type: never): type is never => {
  throw new Error(`Input ${type} is invalid`)
}
