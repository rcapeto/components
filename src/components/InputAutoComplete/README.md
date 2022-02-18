# Component [AutoCompleteInput]


## 🚀 How to use

### AutoCompleteInput
```jsx
   import { FunctionComponent } from 'react';

   import { AutoCompleteInput } from './components/InputAutoComplete';

   const items = [
      {
         label: 'React',
         value: { tech: 'react'}
      },
      {
         label: 'Typescript',
         value: { tech: 'Typescript'}
      },
   ]; 

   const Example: FunctionComponent = () => {
      return(
         <div className="container">
            <AutoCompleteInput 
               items={items}
            />
         </div>
      );
   };

```

## 💻 Documentation

### AutoCompleteInput props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `inputAttr`  | `InputHTMLAttributes<HTMLInputElement>` | Input Attributes | `{}` |
| `items`  | `Item[]` | Items for use in autocomplete `required`| `[]` |
| `onSelectedItem`  | `function<Params>` | Callback function, dispatch when select an item | `null` |
| `onRemoveItem`  | `function<Params>` | Callback function, dispatch when remove an item | `null` |

### Params props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `item`  | `Item` | Array item | `{}` |


### Item props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `label`  | `string` | Item label text | `''` |
| `value`  | `any` | Item value | `{}` |



## 🔖 Layout

<p align="left">
  
<img width="444" alt="Autoinput without selected itens" src="https://user-images.githubusercontent.com/61842405/154755924-9c89ea9f-195b-4e73-ab8b-8cf867e2d17f.png">
  
<br/>
<img width="467" alt="Autoinput with selected itens" src="https://user-images.githubusercontent.com/61842405/154755954-c095ed16-685b-448e-b02b-0433c866e603.png">
   
</p>

## 👨🏻‍💻 Developers
- Raphael Capeto


