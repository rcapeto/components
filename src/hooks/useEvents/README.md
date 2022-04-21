# Hook [useEvents]

- Hook that dispatch events in application.

## 🚀 How to use v.1
- Dispatch and listen in window object.

```jsx
   interface Detail {
      logged: boolean;
   }

   const Example: React.FunctionComponent = () => {
      const { dispatchEvent, listenEvent } = useEvents<Detail>('@app_logged', event => {
         console.log('Logged', event.detail?.logged);
      });

      const handleConnect = () => {
         dispatchEvent({ logged: true });
      };

      React.useEffect(() => {
         listenEvent();
      }, []);

      return(
         <div>
            <button onClick={handleConnect}>Sign in</button>
         </div>
      );
   };
```

## 💻 Documentation

### Hook params 

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `eventName`  | `string` | Event name  | - |
| `callback`  | `func` | Function callback, dispatch when event was dispatched  | - |

### Returned values

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `listenEvent`  | `func` | Function that listen to the dispatches  | - |
| `dispatchEvent`  | `func` | Function that dispatches detail event  | - |


## 🚀 How to use v.2
- Dispatch and listen in EventTarget class.

### EventContextProvider

```jsx
   const Application: FunctionComponent = () => {
      return(
         //Wrap the entire Application with EventContextProvider
         <EventContextProvider>
            <App/>
         </EventContextProvider>
      );
   };
```

### useEventsV2

```jsx
const Example = () => {
   interface Detail {
      logged: boolean;
   }

   const { dispatchEvent, listenEvent } = useEventsV2();

   React.useEffect(() => {
      listenEvent<Detail>('@app_test', event => {
         console.log('Logged: ', event.detail?.logged);
      });
   }, []);

   const handleConnect = () => {
      dispatchEvent<Detail>('@app_test', { logged: true });
   };


   return(
      <div>
         <button onClick={handleConnect}>Sign in</button>
      </div>
   );
};
```

### useEventsV2 returned values

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `listenEvent`  | `func` | Function that listen to the dispatches  | - |
| `dispatchEvent`  | `func` | Function that dispatches detail event  | - |
| `timeDispatched`  | `string` | Last time that was dispatched  | - |
| `quantityEventsDispatched`  | `number` | Quantity events dispatched  | - |
| `dispatchedPages`  | `Array<string>` | URL paths  | - |
| `dispatchedEvents`  | `{[key: eventName = string]: Array<DispatchedEvent>}` | Events informations  | - |


#### DispatchedEvent

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `data`  | `CustomEventInit<>` | Data was passed in dispatched function  | - |
| `location`  | `string` | Location where event was dispatched (URL)  | - |
| `time`  | `string` | Time where event was dispatched  | - |


#### listenEvent params 

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `eventName`  | `string` | Event name  | - |
| `callback`  | `func` | Function that dispatches when event was dispatched  | - |


#### dispatchEvent params 

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `eventName`  | `string` | Event name  | - |
| `detail`  | `<Generic>` | Value to dispatch  | - |



## 👨🏻‍💻 Developers
- [Raphael Capeto](https://github.com/rcapeto)


