# Hook [useRange]

- Hook that create range.

## 🚀 How to use useDelay

```jsx
  
   const Example: React.FunctionComponent = () => {
      const { createRange, createRangeWithStep } = useRange();

      const r1 = createRange(3); 
      const r2 = createRangeWithStep(10, 0, 5); 

      console.log(r1); //[1, 2, 3]
      console.log(r1); //[0, 5, 10]
         
      return(
         <h1>Example</h1>
      )
   };
```

## 💻 Documentation

### Returned values

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `createRange`  | `func` | Function that create range, with step = 1  | - |
| `createRangeWithStep`  | `func` | Function that create range, with custom step | - |

## 👨🏻‍💻 Developers
- [Raphael Capeto](https://github.com/rcapeto)


