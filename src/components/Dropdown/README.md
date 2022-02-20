# Component [Dropdown]


## 🚀 How to use

 - [React-Icons](https://react-icons.github.io/react-icons/) is required.

### Dropdown
```jsx
   import { FunctionComponent } from 'react';
   import { Dropdown } from './components/Dropdown';

   const items = [
      {
         label: 'React',
         value: 'react'
      },
      {
         label: 'React Native',
         value: 'react-native',
      },
      {
         label: 'Javascript',
         value: 'javascript',
      },
      {
         label: 'Typescript',
         value: 'typescript',
      },
      {
         label: 'Jquery',
         value: 'jquery',
      },
   ];

   const Example: FunctionComponent = () => {
      return(
         <div className="container">
            <Dropdown items={items}/>
         </div>
      );
   };

```

## 💻 Documentation

### Dropdown props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `items`  | `Item[]` | Dropdown items `required`| `-` |
| `onChangeValue`  | `function<Item>` | A callback function that fires when selected an item  | `() => {}` |

### Item

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `label`  | `string` | Text to show in dropdown | `''` |
| `value`  | `string` | Option value | `''` |

## 🔖 Layout

<p align="left"> 
</p>

## 👨🏻‍💻 Developers
- Raphael Capeto


