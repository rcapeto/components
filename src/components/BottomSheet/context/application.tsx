import {
  useContext,
  createContext,
  FunctionComponent,
  useState,
  useRef,
  ReactNode,
} from 'react'
import BottomSheet, {
  BottomSheetRef,
  BottomSheetSize,
} from '~/components/BottomSheet'

interface ModalShowParams {
  Component: FunctionComponent<any>
  passProps?: Record<string, any>
  withPanBar?: boolean
  withOverlay?: boolean
  withCloseButton?: boolean
  size?: BottomSheetSize
  theme?: 'dark' | 'light'
  closeWhenPressOverlay?: boolean
}

interface Provider {
  children: ReactNode
}

interface Values {
  showBottomSheet: (params: ModalShowParams) => void
  closeBottomSheet: () => void
}

const BottomSheetContext = createContext({} as Values)

export function BottomSheetProvider({ children }: Provider) {
  const bottomSheet = useRef<BottomSheetRef>(null)

  const [state, setState] = useState<ModalShowParams>()

  function showBottomSheet(params: ModalShowParams) {
    setState({
      size: 'md',
      withCloseButton: false,
      withOverlay: true,
      withPanBar: true,
      closeWhenPressOverlay: true,
      ...params,
    })
    bottomSheet.current?.show()
  }

  function closeBottomSheet() {
    bottomSheet.current?.close()
  }

  return (
    <BottomSheetContext.Provider value={{ showBottomSheet, closeBottomSheet }}>
      <BottomSheet.Root
        ref={bottomSheet}
        size={state?.size}
        isDarkMode={state?.theme === 'dark'}
        withOverlay={state?.withOverlay}
        onCloseWhenPressOverlay={state?.closeWhenPressOverlay}
      >
        {state?.withPanBar && <BottomSheet.PanGestureBar />}
        {state?.withCloseButton && <BottomSheet.CloseButton />}

        <BottomSheet.Content>
          {state?.Component && (
            <state.Component {...(state?.passProps ?? {})} />
          )}
        </BottomSheet.Content>
      </BottomSheet.Root>

      {children}
    </BottomSheetContext.Provider>
  )
}

export function useBottomSheet() {
  return useContext(BottomSheetContext)
}
