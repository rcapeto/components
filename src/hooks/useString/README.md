# Hook [useString]

- Hook that manipulate the string.

## 🚀 How to use useDelay

```jsx
  
   const Example: React.FunctionComponent = () => {
      const { formatAllFirstLetters } = useString();

      const handleClick = () => {
         const formatedText = formatAllFirstLetters('text example');
         console.log(formatedText); //Text Example
      };

      return(
         <div>
            <button onClick={handleClick}>Click here</button>
         </div>
      );
   };
```

## 💻 Documentation

### Returned values

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `formatAllFirstLetters`  | `func` | Function that format all words in text  | - |
| `formatStringArray`  | `func` | Function that format a array of string  | - |
| `uppercaseFirstLetter`  | `func` | Function tha format a word | - |


## 👨🏻‍💻 Developers
- [Raphael Capeto](https://github.com/rcapeto)


