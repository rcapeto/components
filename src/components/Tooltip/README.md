# Component [Tooltip]


## 🚀 How to use

### TooltipWrapper
```jsx
  import { FunctionComponent } from 'react';

   import { TooltipWrapper } from './components/Tooltip';

   const Example: FunctionComponent = () => {
      return(
         <div>
            <TooltipWrapper label="Tooltip Message">
               <h1>Tooltip Example</h1>
            </TooltipWrapper>
         </div>
      );
   };
```

## 💻 Documentation

### TooltipWrapper props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `backgroundColor`  | `string` | Tooltip Background Color | `'#3f3f40'` |
| `textColor`  | `string` | Tooltip Text Color | `'#fff'` |
| `label`  | `string` | Tootip pop-up text `required`| `-` |
| `delay`  | `number` | Delay to show and hide the tooltip (ms) | `200` |


## 🔖 Layout

<p align="center">
   
</p>

## 👨🏻‍💻 Developers
- Raphael Capeto


