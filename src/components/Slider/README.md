# Component [Slider]


## 🚀 How to use

### Slider
```jsx
   import { FunctionComponent } from 'react';
   import { Slider } from '/slider';

   const items = [
      { title: 'Slide 1' },
      { title: 'Slide 2' },
      { title: 'Slide 3' },
      { title: 'Slide 4' },
   ];


   const Example: FunctionComponent = () => {
      return(
         <Slider onChangeSlide={index => console.log('indexslide', index)}>
            {
               items.map((item, index) => (
                  <div key={index} style={{ backgroundColor: '#cecece', width: '100%', height: '100%' }}>
                     <h1>{item.title}</h1>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, ipsum sequi eius dolore ?</p>
                  </div>
               ))
            }
         </Slider>
      )
   };
```

## 💻 Documentation

### Slider props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `onChangeSlide`  | `func` | Callback function dispatched when slide was changed | `true` |
| `config`  | `ConfigType` | Slider config. | `{ showDots: true, showArrows: true }` |

## 🔖 Layout

<p align="center">

</p>

## New features 
[] Change Slide with touch

## 👨🏻‍💻 Developers
- Raphael Capeto


