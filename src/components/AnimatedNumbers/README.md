# Component [AnimatedNumbers]

## 🚀 How to use

### AnimatedNumbers
```jsx
   import { FunctionComponent } from 'react';

   import { AnimatedNumber } from './components/AnimatedNumbers';

   const Example: FunctionComponent = () => {
      return(
         <div className="container">
            <div style={{ height: '150vh' }}/>
            <AnimatedNumber number={12412030}/>
            <div style={{ height: '150vh' }}/>
            <AnimatedNumber number={12412030} delay={100}/>
            <div style={{ height: '150vh' }}/>
         </div>
      );
   };

```

## 💻 Documentation

### AnimatedNumber props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `number`  | `number` | Number for animation `required`| `-` |
| `delay`  | `number` | Increment delay | `60`|

## 🔖 Layout

<p align="center">
   

https://user-images.githubusercontent.com/61842405/154788293-725be855-8819-4e25-92dd-d6b0dfd98b70.mov


</p>

## 👨🏻‍💻 Developers
- Raphael Capeto


