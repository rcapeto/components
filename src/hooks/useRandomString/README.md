# Hook [useRandomString]

- Hook that returns random string.
- Perfect to use in password's

## 🚀 How to use

```jsx
   const Example: React.FunctionComponent = () => {
      const { randomString } = useRandomString();

      return(
         <div className="container">
           <h1>Random string: {randomString}</h1>
         </div>
      );
   };
```

## 💻 Documentation

### Props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `config`  | UseRandomStringConfig |  Hook config | { length: 16, numbers: false, symbols: true, upper: false } |


### UseRandomStringConfig

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `length`  | number |  String quantity |  16 |
| `numbers`  | boolean |  To set numbers into string | false |
| `symbols`  | boolean |  To set symbols into string | true |
| `upper`  | boolean |  To set upper chars into string |  false |



### Returned values

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `randomString`  | `string` | Created string  | - |


## 👨🏻‍💻 Developers
- [Raphael Capeto](https://github.com/rcapeto)


