# Component [Modal]


## 🚀 How to use

### DefaultModal
```jsx
  import { FunctionComponent, useState } from 'react';

   import { DefaultModal } from './components/Modal';

   const Example: FunctionComponent = () => {

   const [isOpen, setIsOpen] = useState(true);

      return(
         <div>
            <DefaultModal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
               <div>Content</div>
            </DefaultModal>
         </div>
      );
   };
```

### ModalWithRef 
```jsx
   import { FunctionComponent, useState } from 'react';

   import { ModalWithRef, ModalRef } from './components/Modal';

   const Example: FunctionComponent = () => {
   const modalRef = useRef<ModalRef>(null);

   const onClick = () => {
      modalRef.current && 
      modalRef.current.openModal();
   };

      return(
         <div>
            <button onClick={onClick}>Open Modal</button>
            <ModalWithRef ref={modalRef}>
              <div>Content</div>
            </ModalWithRef>
         </div>
      );
   };

```


## 💻 Documentation

### DefaultModal props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `overlay`  | `boolean` | Has overlay background | `true` |
| `overlayClick`  | `boolean` | Close Modal when overlay click. | `true` |
| `animation`  | `boolean` | Has animation | `true` |
| `overlayRatio`  | `number` | Overlay Background Ratio `1-10` | `6` |
| `isOpen`  | `boolean` | Show or Hide the Modal | `false` |
| `closeModal`  | `function` | Function to close Modal. | `required` |
| `children`  | `ReactNode` | Content of Modal | `undefined`|

### ModalRef props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `overlay`  | `boolean` | Has overlay background | `true` |
| `overlayClick`  | `boolean` | Close Modal when overlay click. | `true` |
| `animation`  | `boolean` | Has animation | `true` |
| `overlayRatio`  | `number` | Overlay Background Ratio `1-10` | `6` |
| `onCloseModal`  | `function` | Callback function, dispatch when close Modal | `undefined` |
| `onOpenModal`  | `function` | Callback function, dispatch when open Modal | `undefined` |
| `children`  | `ReactNode` | Content of Modal | `undefined`|


## 🔖 Layout

<p align="center">
  <img width="1287" alt="Modal Desktop" src="https://user-images.githubusercontent.com/61842405/154547719-097638f7-ea13-4100-a16a-7edafaa44c34.png">
  <br/>
  <img width="378" alt="Modal Mobile" src="https://user-images.githubusercontent.com/61842405/154547820-712bdaa1-be50-4d59-9e0f-ae853f84b331.png">

</p>

## 👨🏻‍💻 Developers
- Raphael Capeto


