import { RefObject, useEffect } from 'react'

export function useEntryViewport(
  element: RefObject<HTMLElement>,
  callback: () => void,
) {
  function startObserver() {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries

      if (entry.isIntersecting) {
        callback()
        observer.unobserve(entry.target)
      }
    })

    if (element.current) {
      observer.observe(element.current)
    }

    return observer
  }

  useEffect(() => {
    const observer = startObserver()

    return () => {
      observer.disconnect()
    }
  }, [])
}
