# Component [MagicScrollCallback]

- With this component you can manipulate the document, with callback param.

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

### MagicScroll props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `size`  | `number` | Container height  | `4000` |
| `contentPosition`  | `string` | Content position:  `top`, `between-top-middle`, `middle` and `bottom` | `middle` |
| `children`  | `(progress: number) => ReactNode | ReactNode` |  Component Children `required` | `-` |

## 🔖 Layout

<p align="center">
   <video src="" alt="Demo video"/>
</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


