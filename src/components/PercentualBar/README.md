# Component [BarPercentual]


## 🚀 How to use

### BarPercentual
```jsx
  import { FunctionComponent } from 'react';

   import { BarPercentual } from './components/BarPercentual';

   const Example: FunctionComponent = () => {
      return(
         <div className="container">
            {
            Array.from({ length: 6 }, (_, index) => (
               <div style={{ height: '200vh' }} key={String(index)}/>
            ))
            }
            <BarPercentual />
         </div>
      );
   };
```

## 🔖 Layout

<p align="left">

</p>

## 👨🏻‍💻 Developers
- Raphael Capeto


