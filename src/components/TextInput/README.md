# Component [TextInput]

## 🚀 How to use

### TextInput
```jsx
  import React from 'react';
  import { TextInput } from './TextInput';
  import { FaPhone } from 'react-icons/fa'; 

  function Example() {
      const [errorInput, setErrorInput] = React.useState<boolean>(false);

      return(
         <form style={{ flex: 1, maxWidth: '360px' }}>
            <TextInput.Wrapper inputHasError={errorInput}>
               <TextInput.Icon>
                  <FaPhone />
               </TextInput.Icon>

               <TextInput.Input 
                  validation={phoneCheck}
                  errorMessage="Invalid phone"
                  type="email"
                  mask={maskPhone}
                  placeholder='(XX) XXXXX-XXXX'
                  inlineValidation
                  onErrorValidation={error => setErrorInput(error)}
               />
            </TextInput.Wrapper>
         </form>
      );
  }
```

- Validation and Mask Function

```js
function maskPhone(phone: string) {
   const regexRemoveChar = /\D/g;

   value = value.replace(regexRemoveChar, '');
   value = value.replace(/(\d{2})(\d)/, '($1) $2');
   value = value.replace(/(\d{5})(\d)/, '$1-$2');
   if(value.length > 15) value = value.slice(0, -1);

   return value;

}

function phoneCheck(phone: string) {
   const regex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/;
   const isValid = regex.test(phone);
   const phoneWithoutChar = phone.replace(/(\s|\D)/g, '');
   return isValid && phoneWithoutChar.length === 11;
}
```

## 💻 Documentation

- What comes with this component?
- We can use `Icon`, `Wrapper`, `Input`;

### TextInput.Wrapper props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `inputHasError`  | `Boolean` | If the value is true, the border going to be `red` | `-` |

### TextInput.Icon props

- You can use any icon lib, only use with `children`;
- Does not have props.

### TextInput.Input props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `inlineValidation`  | `Boolean` | Validate text when writing  | `false` |
| `validation`  | `Fnc: (value: string) => void` | Validation Function  | `-` |
| `mask`  | `Fnc: (value: string) => string` | Mask Function  | `-` |
| `errorMessage`  | `string` | Error message that appears if there is an error  | `Invalid field` |
| `onChangeText`  | `Fnc: (value: string) => void` | Callback function that returns input value | `-` |
| `onErrorValidation`  | `Fnc: (error: boolean, errorMessage: string) => void` | Callback that returns if there is an error and the errorMessage | `-` |

## 🔖 Layout

## 👨🏻‍💻 Developers
- Raphael Capeto


