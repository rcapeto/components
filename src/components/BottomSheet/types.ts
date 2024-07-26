import { ReactNode } from 'react'

export type BottomSheetSize = 'lg' | 'md' | 'sm'

export interface BottomSheetRef {
  show: () => void
  close: () => void
}

export interface BottomSheetProps {
  children: ReactNode
  size?: BottomSheetSize
  withOverlay?: boolean
  onCloseWhenPressOverlay?: boolean
  isDarkMode?: boolean
}

export type BottomSheetContextValues = Omit<BottomSheetProps, 'children'> & {
  contentClass: string
  overlayClass: string
  isActive: boolean
  handleClose: () => void
  handleOpen: () => void
}
export type BottomSheetProvider = BottomSheetProps & {
  handleClose: () => void
  handleOpen: () => void
  isActive: boolean
}
