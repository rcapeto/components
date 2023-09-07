# Component [Select]


## 🚀 How to use

 - [React-Icons](https://react-icons.github.io/react-icons/) is required.

### Input
```jsx
   import { FunctionComponent } from 'react';
   import { Select } from './components/Select';

   const Example: FunctionComponent = () => {
      return(
         <Select 
            label="Category"
            emptyValueLabel="Select category"
            name="category"
            options={[]}
            onChangeOption={option => {}}
         />
      );
   };

```

## 💻 Documentation

### Input props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `label`  | `string` | Render label text | `Select Label` |
| `emptyValueLabel`  | `string` | If an options is not selected render this text | `Select an option` |
| `name`  | `string` | Option name | `categoty` |
| `options`  | `SelectOption[]` | Options to render | `[]` |
| `onChangeOption`  | `(option: SelectOption) => void | undefined` | Callback triggered when an option is selected | `undefined` |


```ts
import type { IconType } from 'react-icons'

export interface SelectOption {
  label: string
  value: string
  icon: IconType
  iconColor?: string
}
```

## 🔖 Layout
![Captura de Tela 2023-09-07 às 19 00 34](https://github.com/rcapeto/components/assets/61842405/35c54f5e-9ca2-4863-aba4-794d08f36ebe)
![Captura de Tela 2023-09-07 às 19 01 36](https://github.com/rcapeto/components/assets/61842405/c78bf5bf-c21e-4845-a4c6-ee55487c8491)


## 👨🏻‍💻 Developers
- Raphael Capeto


