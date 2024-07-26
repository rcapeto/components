import { createContext, useContext, useMemo } from 'react'
import { BottomSheetContextValues, BottomSheetProvider } from '../types'

const BottomSheetContext = createContext({} as BottomSheetContextValues)

export function BottomSheetContextProvider(props: BottomSheetProvider) {
  const {
    children,
    size,
    withOverlay,
    handleClose,
    handleOpen,
    isActive,
    onCloseWhenPressOverlay,
    isDarkMode,
  } = props

  const contentClass = useMemo<string>(() => {
    const contentSizeClass = `size-${size}`
    const contentActiveClass = isActive ? 'inScreen' : ''
    const theme = isDarkMode ? 'dark' : ''

    const allClasses: string[] = [
      'bottomSheetContent',
      contentSizeClass,
      contentActiveClass,
      theme,
    ]

    return allClasses.join(' ')
  }, [size, isActive, isDarkMode])

  const overlayClass = useMemo<string>(() => {
    const activeClass = isActive ? 'inScreen' : ''
    const overlay = withOverlay ? 'withOverlay' : ''

    const allClasses: string[] = ['bottomSheetOverlay', activeClass, overlay]

    return allClasses.join(' ')
  }, [withOverlay, isActive])

  return (
    <BottomSheetContext.Provider
      value={{
        contentClass,
        overlayClass,
        onCloseWhenPressOverlay,
        size,
        withOverlay,
        handleOpen,
        handleClose,
        isDarkMode,
        isActive,
      }}
    >
      {children}
    </BottomSheetContext.Provider>
  )
}

export function useBottomSheet() {
  return useContext(BottomSheetContext)
}
