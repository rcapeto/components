# Component [NavigationButton]


## 🚀 How to use

### NavigationButton
```jsx
   import { FunctionComponent } from 'react';

   import { NavigationButton } from './components/NavigationButton';

   const Example: FunctionComponent = () => {
      return(
         <div className="container">
            <NavigationButton 
               sectionId="content"
            />

            <div style={{ height: '150vh' }}/>
            
            <div id={'content'}>
            <h1>Content</h1>
            <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Deleniti nisi, in, excepturi culpa esse architecto quia unde libero doloremque 
               assumenda ipsa fugit dolore repellat! Reiciendis quo magni eligendi sequi doloremque.
            </p>
            </div>

            <div style={{ height: '150vh' }}/>
         </div>
      );
   };

```

## 💻 Documentation

### NavigationButton props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `sectionId`  | `string` | Has overlay background `required`| `-` |
| `text`  | `string` | Button text | `Navigation Button`|
| `color`  | `string` | Content of Modal | `#fff`|
| `backgroundColor`  | `string` | Content of Modal | `#5965e0`|

## 🔖 Layout

<p align="center">
   

https://user-images.githubusercontent.com/61842405/154787355-960ffc0d-f9cc-4307-ab7a-37f0d827c682.mov


</p>

## 👨🏻‍💻 Developers
- Raphael Capeto


