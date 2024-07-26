# Hook [useDelay]

- Hook that create a delay.

## 🚀 How to use useDelay

```jsx
  
   const Example: React.FunctionComponent = () => {
      const { startDelay } = useDelay();

      const handleClick = () => {
         startDelay();
         console.log('Button was clicked!');
      };

      return(
         <div>
            <button onClick={handleClick}>Click here</button>
         </div>
      );
   };
```

## 💻 Documentation

### Hook params 

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `config`  | `HookConfig` | Object that configure the hook | `null` |

- HookConfig

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `time`  | `number` | Time delay `in seconds` | `2` |


### Returned values

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `startDelay`  | `func` | Function that start delay  | - |
| `changeDelayTime`  | `func` | Function that changes delay time  | - |
| `delayTime`  | `number` | Delay in seconds | - |


## 👨🏻‍💻 Developers
- [Raphael Capeto](https://github.com/rcapeto)


