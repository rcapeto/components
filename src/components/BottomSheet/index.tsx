import { BottomSheetRef, BottomSheetSize } from './types'

import { BottomSheetCloseButton } from './components/BottomSheetCloseButton'
import { Content } from './components/Content'
import { PanGestureBar } from './components/PanGestureBar'
import BottomSheet from './components/BottomSheet'
import { withBottomSheet } from './hoc'

import { BottomSheetProvider, useBottomSheet } from './context/application'

import './styles.scss'

export default {
  Root: BottomSheet,
  CloseButton: BottomSheetCloseButton,
  Content,
  PanGestureBar,
}

export type { BottomSheetRef, BottomSheetSize }
export { useBottomSheet, BottomSheetProvider, withBottomSheet }
