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

### DefaultModal props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `props`  | `object<ToastProps>` | Toast Position `!required' | `{ positionY: top, positionX: right }` |


### ToastProps

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `positionX`  | `string` | Position on the X axis `left`- `right`| `top` |
| `positionY`  | `string` | Position on the Y axis `bottom`- `top` | `bottom` |


| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `positionX`  | `string` | Position on the X axis `left`- `right`| `top` |
| `positionY`  | `string` | Position on the Y axis `bottom`- `top` | `bottom` |

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
| `positionX`  | `string` | Position on the X axis `left`- `right`| - |
| `positionY`  | `string` | Position on the Y axis `bottom`- `top` | - |
| `handleRemoveToast`  | `function` | Function that closes the Toast | - |
| `active`  | `boolean` | Toast active state  | - |
| `message`  | `string` | Toast message | - |
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
<p align="center">
  
</p>

<h5>Error Toast</h5>
<br/>
<p align="center">
  
</p>


<h5>Info Toast</h5>
<br/>
<p align="center">
  
</p>

<h5>Warning Toast</h5>
<br/>
<p align="center">
  
</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


