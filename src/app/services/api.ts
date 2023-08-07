import { FriendlyError } from '@/errors/FriendlyError'
import axios, { AxiosError } from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500
    ) {
      return Promise.reject(
        new FriendlyError(
          error.response?.data?.message ??
            'Houve um error inesperado. Por favor, entre em contato para estarmos verificando!',
          error.response?.status,
          JSON.stringify(error),
        ),
      )
    } else {
      return Promise.reject(
        new FriendlyError(
          'Houve um error inesperado. Por favor, entre em contato para estarmos verificando!',
          500,
          JSON.stringify(error),
        ),
      )
    }
  },
)
