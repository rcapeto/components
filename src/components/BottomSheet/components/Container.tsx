import { MouseEvent, ReactNode, TouchEvent, useMemo, useState } from 'react'
import { useBottomSheet } from '../context/bottomsheet'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  const [isDrawing, setIsDrawing] = useState(false)
  const [translateY, setTranslateY] = useState(0)

  const {
    contentClass,
    overlayClass,
    onCloseWhenPressOverlay,
    isActive,
    handleClose,
  } = useBottomSheet()

  function onPressOverlay(event: MouseEvent<HTMLDivElement>) {
    const element = event.target as HTMLElement
    const content = element.closest('.bottomSheetContent')

    if (!content) {
      if (onCloseWhenPressOverlay) {
        handleClose()
      }
    }
  }

  function onEndEvent() {
    setIsDrawing(false)
    setTranslateY(0)
  }

  function onStartEvent() {
    setIsDrawing(true)
  }

  function onMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (isDrawing) {
      const { clientY } = event
      const bottomSheetContent = event.currentTarget as HTMLDivElement

      onDragChange(clientY, bottomSheetContent)
    }
  }

  function onTouchMove(event: TouchEvent<HTMLDivElement>) {
    event.preventDefault()

    if (isDrawing) {
      const { touches } = event
      const { clientY } = touches.item(0)
      const bottomSheetContent = event.currentTarget as HTMLDivElement

      onDragChange(clientY, bottomSheetContent)
    }
  }

  function onDragChange(clientY: number, bottomSheetContent: HTMLDivElement) {
    const windowHeight = window.innerHeight
    const bottomSheetContentHeight = bottomSheetContent.clientHeight
    const startElementTop = windowHeight - bottomSheetContentHeight
    const bottomSheetContentOffsetTop = clientY - startElementTop
    const maxHeightToClose = bottomSheetContentHeight * 0.8

    const isAfterMaxHeight = bottomSheetContentOffsetTop > maxHeightToClose

    if (isAfterMaxHeight) {
      setTranslateY(bottomSheetContentHeight)
      handleClose()
    }

    setTranslateY(bottomSheetContentOffsetTop)
  }

  const transform = useMemo(() => {
    return isDrawing && isActive ? `translateY(${translateY}px)` : ''
  }, [isDrawing, isActive, translateY])

  return (
    <div className={overlayClass} onClick={onPressOverlay}>
      <div
        className={[contentClass, isDrawing ? 'drawing' : ''].join('')}
        onMouseDown={onStartEvent}
        onMouseUp={onEndEvent}
        onMouseMove={onMouseMove}
        onTouchStart={onStartEvent}
        onTouchEnd={onEndEvent}
        onTouchMove={onTouchMove}
        style={{ transform }}
      >
        {children}
      </div>
    </div>
  )
}
