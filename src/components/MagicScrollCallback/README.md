# Component [MagicScrollCallback]

- With this component you can manipulate the document, with callback param.
- When you use without callback, the default magicscroll will be start.

## 🚀 How to use

### MagicScrollCallback
```jsx
   import { FunctionComponent } from 'react';
   import { MagicScrollCallback } from '/MagicScrollCallback';

   const texts = [
      'Step 1',
      'Step 2',
      'Step 3',
   ];

   const Spacer = () => <div style={{ height: '200vh' }} />

   const Example: FunctionComponent = () => {
      const getActiveDescription = (progress: number, index: number): boolean => {
         const partProgress = 1 / texts.length;
         const inital = partProgress * index;
         const final = partProgress * (index + 1);

         return progress >= inital && progress <= final;
      };

      return(
         <>
            <Spacer />
               <MagicScrollCallback>
                  {
                     (progress) => (
                        <div className="magic-test-container" 
                           data-progress={progress}
                        >
                           <img src="https://fakeimg.pl/350x400/" alt="Fake" />

                           <div className="descriptions">
                              {
                              texts.map((text, index) => (
                                 <p 
                                    key={String(index)}
                                    className={`
                                       ${getActiveDescription(progress, index) ? 'hasActive' : ''}
                                    `}
                                 >
                                    {text}
                                 </p>
                              ))
                              }
                           </div>
                        </div>
                     )
                  }  
               </MagicScrollCallback>
            <Spacer />
         </>
      )
   };
```

```scss
.magic-test-container {
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #000;
   gap: 100px;
};

.descriptions {
   display: flex;
   max-width: 300px;
   flex-direction: column;
   gap: 20px;

   p {
      color: #fff;
      transition: all ease .7s;
      transform: translateY(100px);
      opacity: 0;
      visibility: hidden;
      position: absolute;

      &.hasActive {
         opacity: 1;
         transform: translateY(0px);
         visibility: visible;
      }
   }
};
```

## 💻 Documentation

### MagicScrollCallback props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `size`  | `number` | Container height  | `4000` |
| `contentPosition`  | `string` | Content position:  `top`, `between-top-middle`, `middle` and `bottom` | `middle` |
| `children`  | `(progress: number) => ReactNode or ReactNode` |  Component Children `required` | `-` |
| `magicScrollWithoutCallbackConfig`  | `MagicScrollProps` |  Config traditional Magic Scroll | `{ size: 'md', position: 'between-top-middle', animated: true }` |

### MagicScroll props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `size`  | `string` | Scroll size: `sm`, `md`, `lg`, `xl` | `md` |
| `position`  | `string` | Content position:  `top`, `middle`, `bottom`, `between-top-middle`, `between-bottom-middle` | `between-top-middle` |
| `animated`  | `boolean` | If section will be animtated | `true` |


## 🔖 Layout

<p align="center">
   <video src="https://user-images.githubusercontent.com/61842405/169635936-a0902174-a8db-4403-839d-5062fce422b9.mov" alt="Demo video"/>
</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


