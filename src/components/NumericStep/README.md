# Component [NumericStep]


## 🚀 How to use

 - [React-Icons](https://react-icons.github.io/react-icons/) is required.

### NumericStep
```jsx
   import { FunctionComponent } from 'react';
   import { NumericStep } from './components/NumericStep';

   const Example: FunctionComponent = () => {
      return(
         <div className="container">
            <NumericStep />
         </div>
      );
   };

```

## 💻 Documentation

### NumericStep props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `size`  | `string` | Stepper size `small` - `medium` - `large` `required`| `small` |
| `limit`  | `number` | Stepper number limit  | `10` |
| `onChangeNumber`  | `function<Params>` | A callback function that fires when decremeting | `() => {}`| 

### Params

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `currentNumber`  | `number` | Current number in NumericStep | `0` |

## 🔖 Layout

<p align="left"> 
<img width="199" alt="Contador Numérico" src="https://user-images.githubusercontent.com/61842405/154809102-87d24ac9-eeb4-426c-a7e7-1de21516bf3e.png">
</p>

## 👨🏻‍💻 Developers
- Raphael Capeto


