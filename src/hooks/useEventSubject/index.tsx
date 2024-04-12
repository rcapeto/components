import { useMemo } from 'react'
import { EventSubject } from './event-subject'

export function useEventSubject<Type>(initialData: Type) {
  return useMemo(() => new EventSubject<Type>(initialData), [])
}
