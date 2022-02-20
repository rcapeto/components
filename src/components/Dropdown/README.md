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
 <img width="275" alt="Dropdown Closed" src="https://user-images.githubusercontent.com/61842405/154832037-6071f87d-a3f0-4507-9cb9-bc8108b40561.png">
<img width="292" alt="Dropdown Opened" src="https://user-images.githubusercontent.com/61842405/154832044-ed2b6c65-c498-4888-a4e0-094da7172457.png">

</p>

## 👨🏻‍💻 Developers
- Raphael Capeto


