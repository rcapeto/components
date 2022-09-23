# Component [Form]

## 🚀 How to use

### Form
```jsx
   import { Form, PhoneCheck } from './Form';

   const App = () => {
      return(
         <>
            <h1>Register Form</h1>

            <Form 
               style={{ padding: '10px 30px'}}
               handleSubmitForm={(fields, event) => {
                  console.log({ fields, event })
               }}
            >
            
            <Form.Input 
               label='Name'
               inputName='name'
            />

            <Form.Input 
               label='Last Name'
               inputName='last_name'
            />

            <Form.Input 
               label='Phone'
               inputName='phone'
               validation={PhoneCheck}
               inlineValidation
               mask='cellphone'
               errorMessage='Invalid Phone'
            />

            <Form.SubmitButton btnText="Register" />
            </Form>
         </>
      );
   }
```

## 💻 Documentation

### Form props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `children`  | `ReactNode` | Children to render | `` |
| `inputs`  | `FormInputProps[]` | Inputs to render | `[]` |
| `className`  | `string` | Your own class to customize form | `` |
| `style`  | `CSSProperties` | React CSSProperties  | `` |
| `handleSubmitForm`  | `callback` | Callback function that returns fields `{[key]: value }` | `` |


### FormInput props

onChangeText?: (value: string) => void;

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `onValidationError`  | `Callback` | Callback that returns message error, it has an error | `''` |
| `errorMessage`  | `string` | Error message to render | `'Invalid Field'` |
| `label`  | `string` | Input label `required` | `''` |
| `inputName`  | `string` | To use in input ID and NAME `required` | `''` |
| `inlineValidation`  | `boolean` | To check it has an error when user update input text | `''` |
| `validation`  | `Func` | A function that recive value and return it was correct or not | `''` |
| `onChangeText`  | `Callback` | Callback that returns input text | `''` |
| `mask`  | `string | Callback` | `String` to use default mask or Callback to use own mask, the callback params is a `string` and returns `string`| `''` |
| `...reset`  | `React.InputHTMLAttributes<HTMLInputElement>` | Other props | `` |

### FormSubmitButton props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `btnText`  | `string` | Button text | `''` |
| `...rest`  | `React.ButtonHTMLAttributes<HTMLButtonElement>` | Other props | `` |


## 🔖 Layout

<p align="left">
   <img width="665" alt="Form" src="https://user-images.githubusercontent.com/61842405/154866102-877ebef8-e8ce-4f81-8576-736f26f2c73d.png">

</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


