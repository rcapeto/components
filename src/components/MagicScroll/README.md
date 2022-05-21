# Component [MagicScroll]


## 🚀 How to use

### MagicScroll
```jsx
   import { FunctionComponent } from 'react';
   import { MagicScroll } from '/MagicScroll';

   const items = [
      { title: 'Scroll to Begin', text: 'start like this' }, 
      { title: 'Step 1', text: 'Here is step 1' },
      { title: 'Step 2', text: 'Here is step 2' },
      { title: 'Step 3', text: 'Here is step 3' },
      { title: 'Step 4', text: 'Here is step 4' },
   ];


   const Example: FunctionComponent = () => {
      return(
          <MagicScroll>
            {
               items.map((item, index) => (
                  <div key={String(index)} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                     <h1>{item.title}</h1>
                     <p>{item.text}</p>
                  </div>
               ))
            }
         </MagicScroll>
      )
   };
```

## 💻 Documentation

### MagicScroll props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `size`  | `string` | Scroll size: `sm`, `md`, `lg`, `xl` | `md` |
| `position`  | `string` | Content position:  `top`, `middle`, `bottom`, `between-top-middle`, `between-bottom-middle` | `between-top-middle` |
| `animated`  | `boolean` | If section will be animtated | `true` |

## 🔖 Layout

<p align="center">
   <video src="https://user-images.githubusercontent.com/61842405/166746961-bd6ee5ec-1a51-45d2-8998-c5fff022b2bb.mov" alt="Demo video"/>
</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


