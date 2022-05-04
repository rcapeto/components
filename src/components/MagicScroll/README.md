# Component [MagicScroll]


## 🚀 How to use

### Slider
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

## 🔖 Layout

<p align="center">

</p>

## 👨🏻‍💻 Developers
- Raphael Capeto


