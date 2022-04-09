# Hook [useDocumentTitle]

- Hook that returns site title.

## 🚀 How to use

```jsx
   import {useDocumentTitle} from "setDocumentTitle"

   export default function Exemple() {
   const [documentTitle, setDoucmentTitle] = useDocumentTitle("Home page");
      return (
         <div className="App">
            <h1>Hello React App</h1>
            <button onClick={() => setDoucmentTitle("About page")}>  
            Change document title     
            </button>   
         </div>
      );
   }
```

## 💻 Documentation

### Props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `documentTitle`  | string |  Get site title | `` |
| `setDoucmentTitle`  | string |  Change site title | `` |




## 👨🏻‍💻 Developers
- [Gabriel Cintra](https://github.com/gblcintra)


