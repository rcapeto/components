# Component [Modal]


## 🚀 How to use

### DefaultModal
```jsx
  import { FunctionComponent, useState } from 'react';

   import { DefaultModal } from './components/Modal';

   const App: FunctionComponent = () => {
   const [isOpen, setIsOpen] = useState(true);

   return(
      <div>
         <DefaultModal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
            <div>Content</div>
         </DefaultModal>
      </div>
   );
   };

   export default App;
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

## 🔖 Layout

### DefaultModal

<p align="center">
 <img src=".github/default-modal-desk.png" alt="Modal Desktop" />
 <br/>
 <img src=".github/default-modal-mobile.png" alt="Modal Mobile" />
</p>

## 👨🏻‍💻 Developers
- Raphael Capeto


