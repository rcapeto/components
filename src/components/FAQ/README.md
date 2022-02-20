# Component [FAQ]

## 🚀 How to use

### Accordion
```jsx
   import { FunctionComponent } from 'react';
   import { Accordion } from './components/Accordion';

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
| `insertInHeadTag`  | `boolean` | Insert meta SEO in <script></script> | `true` |

### Item props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `question`  | `string` | FAQ question text `required`| `''` |
| `answer`  | `string` | FAQ answer text `required` | `''` |


## 🔖 Layout

<p align="left">
   
</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


