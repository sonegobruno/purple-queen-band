'use client'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import * as ToastRadix from '@radix-ui/react-toast'
import { assertType, isTruthy } from '@/utils/type'
import { tv } from 'tailwind-variants'
import {
  CheckCircle,
  Info,
  Warning,
  WarningCircle,
} from '@phosphor-icons/react'

type ToastType = 'success' | 'error' | 'info' | 'warning'

type ToastConfig = {
  type: ToastType
  description: string
  time?: number
}

const DEFAULT_TOAST_TIME = 3000

const variants = tv({
  base: '',
  variants: {
    variant: {
      success: 'bg-success',
      error: 'bg-alert',
      warning: 'bg-warning',
      info: 'bg-info',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
})

interface ToastContextState {
  showToast: (config: ToastConfig) => void
}

const ToastContext = createContext<ToastContextState>({} as ToastContextState)

interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [toastConfig, setToastConfig] = useState<ToastConfig | null>(null)
  const timerRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const showToast = useCallback((config: ToastConfig) => {
    setIsOpen(true)
    setToastConfig(config)

    clearTimeout(timerRef.current)

    timerRef.current = setTimeout(() => {
      setIsOpen(() => false)
      setToastConfig(() => null)
    }, config.time ?? DEFAULT_TOAST_TIME)
  }, [])

  const title = useMemo(() => {
    const type = toastConfig?.type
    if (!isTruthy(type)) return ''

    switch (type) {
      case 'success':
        return 'Sucesso!'
      case 'error':
        return 'Erro!'
      case 'warning':
        return 'Atenção!'
      case 'info':
        return 'Informação!'
      default:
        assertType(type)
    }

    return ''
  }, [toastConfig])

  const dataProvider = useMemo(() => {
    return {
      showToast,
    }
  }, [showToast])

  return (
    <ToastContext.Provider value={dataProvider}>
      <ToastRadix.Provider swipeDirection="right">
        {children}
        <ToastRadix.Root
          className={variants({
            variant: toastConfig?.type,
            className: 'rounded-md p-3',
          })}
          open={isOpen}
        >
          <ToastRadix.Title className="font-bold text-sm text-light flex items-center gap-2">
            {toastConfig?.type === 'success' ? (
              <CheckCircle />
            ) : toastConfig?.type === 'error' ? (
              <WarningCircle />
            ) : toastConfig?.type === 'warning' ? (
              <Warning />
            ) : toastConfig?.type === 'info' ? (
              <Info />
            ) : (
              <></>
            )}
            {title}
          </ToastRadix.Title>
          <ToastRadix.Description className="font-normal text-xs text-light">
            {toastConfig?.description}
          </ToastRadix.Description>
        </ToastRadix.Root>

        <ToastRadix.Viewport className="fixed top-0 right-0 flex flex-col gap-1 p-4 w-96 max-w-full m-0 outline-none" />
      </ToastRadix.Provider>
    </ToastContext.Provider>
  )
}

export function useToast(): ToastContextState {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used whithin an AuthProvider')
  }

  return context
}
