import { RefObject, useEffect } from 'react'

export function useInViewPort(
  element: RefObject<HTMLElement>,
  callback: () => void,
) {
  function startObserver() {
    if (element.current) {
      const elementTop = element.current.offsetTop
      const elementBottom = element.current.getBoundingClientRect().bottom
      const scrollTop = window.scrollY
      const windowBottomPosition = scrollTop + window.innerHeight

      const isInViewport =
        windowBottomPosition > elementTop && elementBottom >= 0

      if (isInViewport) {
        callback()
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', startObserver)

    return () => {
      window.removeEventListener('scroll', startObserver)
    }
  }, [])
}
