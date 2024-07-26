import {
  forwardRef,
  useState,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react'
import ReactDOM from 'react-dom'

import { BottomSheetContextProvider } from '../context/bottomsheet'
import { BottomSheetProps, BottomSheetRef } from '../types'

import { Container } from './Container'

const BottomSheet: ForwardRefRenderFunction<
  BottomSheetRef,
  BottomSheetProps
> = (props, ref) => {
  const {
    children,
    size = 'md',
    withOverlay = true,
    onCloseWhenPressOverlay = true,
    isDarkMode = false,
  } = props

  const [isActive, setIsActive] = useState(false)

  function show() {
    setIsActive(true)
  }

  function close() {
    setIsActive(false)
  }

  useImperativeHandle(ref, () => {
    return {
      close,
      show,
    }
  })

  const root = document.body

  return ReactDOM.createPortal(
    <BottomSheetContextProvider
      isActive={isActive}
      handleClose={close}
      handleOpen={show}
      size={size}
      onCloseWhenPressOverlay={onCloseWhenPressOverlay}
      withOverlay={withOverlay}
      isDarkMode={isDarkMode}
    >
      <Container>{children}</Container>
    </BottomSheetContextProvider>,
    root,
  )
}

export default forwardRef(BottomSheet)
