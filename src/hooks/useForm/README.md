# Hook [useForm]

- Hook that validate an object data.

## 🚀 How to use

```jsx
   const Example: React.FunctionComponent = () => {
      const { checkEmptyFields } = useForm();

      const handleCheck = () => {
         const { hasEmptyField } = checkEmptyFields({ name: 'Raphael' });
         if(!hasEmptyField) console.log('Pass the validation');
      };

      return (
         <div>
            <button onClick={handleCheck}>Check</button>
         </div>
      );
   };
```

## 💻 Documentation

### Returned values

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `checkEmptyFields`  | `func` | Function that checks for empty values  | - |

#### checkEmptyFields params

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `data`  | `{[key: string] : string}` | Data I want to check  | - |
| `fieldsDontVerify`  | `Array<string>` | Key's that I don't want to check | - |


#### Data Example 
```jsx
const dataExample = {
   name: 'Raphael',
   lastName: 'Capeto'
}
```

#### checkEmptyFields returned values


| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `hasEmptyField`  | `boolean` | Has or not an empty field  | - |
| `fields`  | `{}` | Fields passed in first param | - |
| `emptyFields`  | `Array<{ key: string }>` | List of empty key fields | - |


## 👨🏻‍💻 Developers
- [Raphael Capeto](https://github.com/rcapeto)


