# Lib [Form]

## 🚀 How to use

### Form
```jsx
  import React from 'react';
  import { TextInput } from './TextInput';
  import { FaPhone } from 'react-icons/fa'; 

  function Example() {
      const [errorInput, setErrorInput] = React.useState<boolean>(false);

      return(
         <div style={{ width: '100%', maxWidth: 420 }}>
         <Form.Wrapper>
            <Form.Title>Register User</Form.Title>

            <Form.Field>
               <Form.Label htmlFor="phone">Phone</Form.Label>
               <Form.InputWrapper>
               <Form.InputIcon>
                  <FaPhone/>
               </Form.InputIcon>
               <Form.Input 
                  inputName="phone" 
                  placeholder="Your phone" 
                  inlineValidation 
                  mask={maskPhone}
                  validation={phoneCheck}
               />
               </Form.InputWrapper>
            </Form.Field>

            <Form.Field>
               <Form.Label htmlFor="name">Name</Form.Label>
               <Form.InputWrapper>
               <Form.InputIcon>
                  <FaUser/>
               </Form.InputIcon>
               <Form.Input inputName="name" placeholder="Your name" required />
               </Form.InputWrapper>
            </Form.Field>

            <Form.ErrorMessage message="Can not send this Form"/>

            <Form.Button buttonText="Create account"/>
         </Form.Wrapper>
         </div>
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

- What comes with this Lib?
- We can use `Wrapper`, `Title`, `Field`, `Label`, `InputWrapper`, `Input`, `InputIcon`, `Button`, `ErrorMessage`;

### Form.Wrapper props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `onHandleSubmit`  | `(inputs: Input[], error: boolean)` | Callback function that dispatches when submit form | `-` |


#### Input 

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `name`  | `string` | Input name | `-` |
| `value`  | `string` | Input value | `-` |
| `hasError`  | `boolean` | If this input has error | `-` |
| `errorMessage`  | `string` | Input error message | `-` |


### Form.Title 

- Only `style`;
- Use text in `children`.

### Form.Field 

- Separate fields in `Form`, only `style`.

### Form.Icon props

- You can use any icon lib, only use with `children`;
- Does not have props.


### Form.Label

- Use text in `children`.

### Form.InputWrapper

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `inputHasError`  | `Boolean` | If the value is true, the border going to be `red` | `-` |


### Form.Input props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `inputName`  | `String` | That is `name` and `id` from input.  | `false` |
| `inlineValidation`  | `Boolean` | Validate text when writing  | `false` |
| `validation`  | `Fnc: (value: string) => void` | Validation Function  | `-` |
| `mask`  | `Fnc: (value: string) => string` | Mask Function  | `-` |
| `errorMessage`  | `string` | Error message that appears if there is an error  | `Invalid field` |
| `onChangeText`  | `Fnc: (value: string) => void` | Callback function that returns input value | `-` |
| `onErrorValidation`  | `Fnc: (error: boolean, errorMessage: string) => void` | Callback that returns if there is an error and the errorMessage | `-` |


### Form.Button props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `size`  | `String` | You can use: `sm`, `md`, `lg`  | `md` |
| `onClick`  | `Function` | Function that dispatch when the button was clicked  | `false` |
| `buttonText`  | `String` | Text that render in button  | `Click here` |


### Form.ErrorMessage 

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `message`  | `String` | Message that will be rendered when there is an error   | `Has an error in form` |
| 


## 🔖 Layout

## 👨🏻‍💻 Developers
- Raphael Capeto


