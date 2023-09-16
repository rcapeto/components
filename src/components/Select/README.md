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

### Select props

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

## 👨🏻‍💻 Developers
- Raphael Capeto


