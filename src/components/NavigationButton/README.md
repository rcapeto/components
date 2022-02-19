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
| `sectionId`  | `string` | Has overlay background `required`| `true` |
| `text`  | `string` | Button text | `Navigation Button`|
| `color`  | `string` | Content of Modal | `#fff`|
| `backgroundColor`  | `string` | Content of Modal | `#5965e0`|

## 🔖 Layout

<p align="center">
https://user-images.githubusercontent.com/61842405/154787331-77cafaf1-b0d6-41e7-a401-6081416d1ea8.mov
</p>

## 👨🏻‍💻 Developers
- Raphael Capeto


