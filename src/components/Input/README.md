# Component [Input]


## 🚀 How to use

 - [React-Icons](https://react-icons.github.io/react-icons/) is required.

### Input
```jsx
   import { FunctionComponent } from 'react';
   import { InputCustom } from './components/Input';

   const Example: FunctionComponent = () => {
      return(
         <div className="container">
            <InputCustom />
         </div>
      );
   };

```

## 💻 Documentation

### Input props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `inputType`  | `string` | Input type `with-button` - `normal` - `password` | `with-button` |
| `icon`  | `IconType` | Icon inside Button | `IoMdSend` |
| `buttonClick`  | `function` | Button click function | `() => {}`| 


## 🔖 Layout

<p align="left">
  <img width="393" alt="Input with Icon" src="https://user-images.githubusercontent.com/61842405/154762399-8b2ec9d2-2d3e-49cc-aba5-bceffdc2c6d7.png">
<br/>
 <img width="386" alt="Input Password" src="https://user-images.githubusercontent.com/61842405/154762446-e0d115bc-d500-4867-867f-207a9a9c83aa.png">
</p>

## 👨🏻‍💻 Developers
- Raphael Capeto


