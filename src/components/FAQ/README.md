# Component [FAQ]

## 🚀 How to use

### FAQ
```jsx
   import { FunctionComponent } from 'react';
   import { FAQ } from './components/FAQ';

   const Example: FunctionComponent = () => {
      const items = [
         {
            question: 'How many stars this repo deserves?',
            answer: 'All stars!'
         }
      ];
      return(
         <div className="container">
         <FAQ items={items} />
         </div>
      );
   };
```

## 💻 Documentation

### FAQ props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `items`  | `Item[]` | Accordion title `required`| `''` |
| `insertInHeadTag`  | `boolean` | Insert script SEO in <head></head> | `true` |

### Item props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `question`  | `string` | FAQ question text `required`| `''` |
| `answer`  | `string` | FAQ answer text `required` | `''` |


## 🔖 Layout

<p align="left">
   <img width="665" alt="Accordion Active" src="https://user-images.githubusercontent.com/61842405/154866102-877ebef8-e8ce-4f81-8576-736f26f2c73d.png">
   
   <h5>With insertInHeadTag actived</h5>
   <img width="585" alt="With insertInHeadTag actived" src="https://user-images.githubusercontent.com/61842405/154866152-cd70c39d-8abb-4d41-81e5-85c600ed4338.png">
</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


