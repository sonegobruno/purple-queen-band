import { isFalsy } from '@/types'

export function isEmpty(value: string | null): boolean {
  return isFalsy(value) || value.length === 0
}
