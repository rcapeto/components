import { useEffect, useRef } from 'react'

export default function useDidMount(callback: CallableFunction) {
  const didMount = useRef(false)

  useEffect(() => {
    if (callback && !didMount.current) {
      didMount.current = true
      return callback()
    }
  })
}
