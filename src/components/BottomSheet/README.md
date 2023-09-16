# Component [BottomSheet]


## 🚀 How to use
- You can use with High Order Component too.

### BottomSheet [1]
```jsx
   import { FunctionComponent, useRef } from 'react';
   import BottomSheet, { BottomSheetRef } from './components/BottomSheet';

   const Example: FunctionComponent = () => {
      const bottomSheetRef = useRef<BottomSheetRef>(null)

      return(
         <div>
            {/* Your Code */}
            <BottomSheet.Root ref={bottomSheetRef}>   
               <BottomSheet.PanGestureBar />
               <BottomSheet.Content>
                  {/* BottomSheetContent */}
               </<BottomSheet.Content>
            </BottomSheet.Root>
         <div>
      );
   };
```
### BottomSheet [2] - Provider
```jsx
   import { FunctionComponent, useRef } from 'react';
   import { BottomSheetProvider, useBottomSheet } from './components/BottomSheet';

   const Example: FunctionComponent = () => {
      const { showBottomSheet } = useBottomSheet()

      function onClick() {
         showBottomSheet({
            Component: () => <p>Text</p>,
         })
      }

      return(
         <BottomSheetProvider>
            <div>
               {/* Your Code */}
               <button onClick={onClick}>Open BottomSheet</button>
            <div>
         </BottomSheetProvider>
      );
   };
```
### BottomSheet [3] - HOC
```jsx
   import { FunctionComponent, useRef } from 'react';
   import { withBottomSheet, useBottomSheet } from './components/BottomSheet';

   function Component() {
      const { showBottomSheet } = useBottomSheet()

      function onClick() {
         showBottomSheet({
            Component: () => <p>Text</p>,
         })
      }
      return <button onClick={onClick}>Open BottomSheet</button>
   }

   const Button = withBottomSheet(Component)

   const Example: FunctionComponent = () => {
      return(
         <div>
            {/* Your Code */}
            <Button />
         <div>
      );
   };
```

## 💻 Documentation

### BottomSheet props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `ref`  | `BottomSheetRef` | BottomSheet actions | `Ref` |
| `size`  | `BottomSheetSize` | BottomSheet size | `md` |
| `withOverlay`  | `boolean` | With black background | `true` |
| `onCloseWhenPressOverlay`  | `boolean` | Close bottom sheet when click on overlay | `true` |
| `isDarkMode`  | `boolean` | Dark mode style | `false` |

### useBottomSheet

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `closeBottomSheet`  | `() => void` | Close BottomSheet | `-` |
| `showBottomSheet`  | `(params: ModalShowParams) => void` | Open BottomSheet | `-` |


```ts
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

type BottomSheetSize = 'lg' | 'md' | 'sm'
```


## 👨🏻‍💻 Developers
- Raphael Capeto


