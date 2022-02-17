# Component [ToastProvider]


## 🚀 How to use

### ToastProvider
```jsx
   import { FunctionComponent, useState } from 'react';

   import { ToastProvider } from './components/ToastProvider';

   const App: FunctionComponent = () => {
      return(
         //Wrap the entire Application with ToastProvider
         <ToastProvider>
            <div/>
         </ToastProvider>
      );
   };
```

### Example 
```jsx
   import { FunctionComponent } from 'react';

   import { useToast } from './components/ToastProvider';

   const Example: FunctionComponent = () => {
      const { showToast } = useToast();

      const buttonClick = () => {
         showToast('Show message here.', 'info');
      };

      return(
         <button onClick={buttonClick}>
            Show Toast
         </button>
      );
   };
```


## 💻 Documentation

### ToastProvider props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `props`  | `object<ToastProps>` | Toast Position `!required` | `{ positionY: top, positionX: right }` |


### ToastProps

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `positionX`  | `string` | Position on the X axis `left`- `right`| `right` |
| `positionY`  | `string` | Position on the Y axis `bottom`- `top` | `top` |

### useToast 
- Hook that return Toast values. 

```jsx
   import { useToast } from './components/ToastProvider';

   const Example: FunctionComponent = () => {
      const { 
         active, 
         handleRemoveToast, 
         message, 
         positionY, 
         positionX, 
         toastType, 
         showToast 
      } = useToast();

      return null;
   };
```

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `positionX`  | `string` | Position on the X axis `left`- `right`| `right` |
| `positionY`  | `string` | Position on the Y axis `bottom`- `top` | `top` |
| `handleRemoveToast`  | `function` | Function that closes the Toast | - |
| `active`  | `boolean` | Toast active state  | `false` |
| `message`  | `string` | Toast message | `Show Toast Message Here` |
| `toastType`  | `string` | Toast type `success` - `info` - `error` - `warning` | - |
| `showToast`  | `function<Params>` | Function that active the Toast | - |


## ShowToast Params 
| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `message`  | `string` | Toast message | - |
| `toastType`  | `string` | Toast type `success` - `info` - `error` - `warning` | - |

## 🔖 Layout

<h5>Success Toast</h5>
<br/>
<p align="left">
  <img width="375" alt="Success Toast Message" src="https://user-images.githubusercontent.com/61842405/154569835-86ba73e9-548d-4683-9413-c3be0040a644.png">
</p>

<h5>Error Toast</h5>
<br/>
<p align="left">
  <img width="375" alt="Error Toast Message" src="https://user-images.githubusercontent.com/61842405/154569958-a830d29b-7318-407a-9320-11ccde3610db.png">
</p>


<h5>Info Toast</h5>
<br/>
<p align="left">
  <img width="375" alt="Info Toast Message" src="https://user-images.githubusercontent.com/61842405/154569716-b3ddc66e-96be-4902-a36b-5f7cb092f950.png">
</p>

<h5>Warning Toast</h5>
<br/>
<p align="left">
  <img width="375" alt="Warning Toast Message" src="https://user-images.githubusercontent.com/61842405/154569913-03e8a06f-9dc2-45b4-8500-3bfb1b69285e.png">
</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


