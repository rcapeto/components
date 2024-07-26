import { useEffect } from 'react'
import { TestLayout } from './components/TestLayout'
import { useProxy } from './hooks/useProxy'
import { subscribe } from './hooks/useProxy/utils/subscription'
import { useEventSubject } from './hooks/useEventSubject'
import { buildProvidersTree } from './utils/buildProvidersTree'

const Providers = buildProvidersTree([[TestLayout, { isDarkMode: true }]])

export default function App() {
  const state = useProxy({ count: 0 })
  const eventSubject = useEventSubject(1)
  const observable = eventSubject.asObservable()

  function increment() {
    state.count += 1
    eventSubject.next(state.count)
  }

  useEffect(() => {
    const cancel = subscribe(state, (oldValue, newValue) => {
      console.log('Subscribe middleware', { oldValue, newValue })
    })

    return () => {
      cancel()
    }
  }, [state])

  useEffect(() => {
    observable.subscribe((number) => {
      console.log('use-effect data', number)
    })
  }, [])

  return (
    <Providers>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <h1 style={{ color: 'white' }}>Master</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </Providers>
  )
}
