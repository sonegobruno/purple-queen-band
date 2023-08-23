import { useMemo, useCallback, useReducer } from 'react'
/* eslint-disable no-case-declarations */
import { api } from '@/services/api'

enum ActionType {
  READY,
  LOADING,
  ERROR,
  DEFAULT,
}

enum HttpStatus {
  LOADING = 'loading',
  READY = 'ready',
  ERROR = 'error',
  DEFAULT = 'default',
}

type HttpState<T, A extends ActionType> = A extends ActionType.READY
  ? {
      data: T
      status: HttpStatus.READY
      error?: undefined
    }
  : A extends ActionType.ERROR
  ? {
      data?: undefined
      status: HttpStatus.ERROR
      error: unknown
    }
  : A extends ActionType.LOADING
  ? {
      data?: undefined
      status: HttpStatus.LOADING
      error?: undefined
    }
  : {
      data?: undefined
      status: HttpStatus.DEFAULT
      error?: undefined
    }

type Action<T, A extends ActionType> = A extends ActionType.READY
  ? {
      type: ActionType.READY
      data: T
      error?: undefined
    }
  : A extends ActionType.ERROR
  ? {
      type: ActionType.ERROR
      data?: undefined
      error: unknown
    }
  : A extends ActionType.LOADING
  ? {
      type: ActionType.LOADING
      data?: undefined
      error?: undefined
    }
  : {
      type: ActionType.DEFAULT
      data?: undefined
      error?: undefined
    }

const DEFAULT_STATE: HttpState<undefined, ActionType.DEFAULT> = {
  status: HttpStatus.DEFAULT,
}

function reducer<T, A extends ActionType>(
  state: HttpState<T, A>,
  action: Action<T, A>,
): HttpState<T, A> {
  switch (action.type) {
    case ActionType.LOADING:
      const loadingResponse: HttpState<T, ActionType.LOADING> = {
        status: HttpStatus.LOADING,
      }

      return loadingResponse as HttpState<T, A>
    case ActionType.ERROR:
      const errorResponse: HttpState<T, ActionType.ERROR> = {
        status: HttpStatus.ERROR,
        error: action.error,
      }

      return errorResponse as HttpState<T, A>
    case ActionType.READY:
      const readyResponse: HttpState<T, ActionType.READY> = {
        data: action.data,
        status: HttpStatus.READY,
      }

      return readyResponse as HttpState<T, A>
    default:
      return state
  }
}

export function usePost() {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE)

  const handler = useCallback(async <T>(url: string, data = {}) => {
    dispatch({
      type: ActionType.LOADING,
    })

    try {
      const response = await api.post<T>(url, data)

      dispatch({
        type: ActionType.READY,
        data: response.data,
      })
    } catch (error) {
      dispatch({
        type: ActionType.ERROR,
        error,
      })

      throw error
    }
  }, [])

  const isLoading = useMemo(() => {
    return state.status === HttpStatus.LOADING
  }, [state.status])

  const isError = useMemo(() => {
    return state.status === HttpStatus.ERROR
  }, [state.status])

  const isReady = useMemo(() => {
    return state.status === HttpStatus.READY
  }, [state.status])

  return {
    handler,
    state,
    isLoading,
    isError,
    isReady,
  }
}
