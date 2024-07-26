import { FunctionComponent, PropsWithChildren } from 'react'
import { BottomSheetProvider } from '../context/application'

export function withBottomSheet<Props = object>(
  Component: FunctionComponent<Props>,
) {
  return function Comp(props: PropsWithChildren<Props>) {
    return (
      <BottomSheetProvider>
        <Component {...props} />
      </BottomSheetProvider>
    )
  }
}
