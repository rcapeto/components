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
         <h1>teste</h1>
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
| `overlayRatio`  | `number` | Overlay Background Ratio `1-10`] | `6` |
| `isOpen`  | `boolean` | Show or Hide the Modal | `false` |
| `closeModal`  | `function` | Function to close Modal. | `required` |
| `children`  | `ReactNode` | Content of Modal | `undefined`|

### ModalRef props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `overlay`  | `boolean` | Has overlay background | `true` |
| `overlayClick`  | `boolean` | Close Modal when overlay click. | `true` |
| `animation`  | `boolean` | Has animation | `true` |
| `overlayRatio`  | `number` | Overlay Background Ratio `1-10`] | `6` |
| `onCloseModal`  | `function` | Callback function, dispatch when close Modal | `undefined` |
| `onOpenModal`  | `function` | Callback function, dispatch when open Modal | `undefined` |
| `children`  | `ReactNode` | Content of Modal | `undefined`|


## 🔖 Layout

<p align="center">
 <img src=".github/default-modal-desk.png" alt="Modal Desktop" />
 <br/>
 <img src=".github/default-modal-mobile.png" alt="Modal Mobile" />
</p>

## 👨🏻‍💻 Developers
- Raphael Capeto


