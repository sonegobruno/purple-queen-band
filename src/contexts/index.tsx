import { ReactNode } from 'react'
import { ToastProvider } from './toast'

interface Props {
  children: ReactNode
}

export function AppProviders({ children }: Props) {
  return <ToastProvider>{children}</ToastProvider>
}
