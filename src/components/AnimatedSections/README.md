# Component [AnimatedSections]


## 🚀 How to use

### AnimatedProvider
```jsx
   import { FunctionComponent, useState } from 'react';

   import { AnimatedProvider } from './components/AnimatedSections';

   const App: FunctionComponent = () => {
      return(
         //Wrap the entire Application with AnimatedProvider
         <AnimatedProvider>
            <div/>
         </AnimatedProvider>
      );
   };
```

### Example 
```jsx
   import { FunctionComponent } from 'react';
   
   import { AnimatedSection  } from './components/AnimatedSections';

   const App: FunctionComponent = () => {
      return(
         <div className="container">
            <div style={{ height: '150vh' }}/>
            
            <AnimatedSection sectionTitle="First Content">
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam deserunt veniam 
                  illo obcaecati? Fuga, commodi dignissimos dolorum ratione dolor quae animi eum 
                  tempora! Quas et impedit non. Exercitationem, perspiciatis architecto.
               </p>
            </AnimatedSection>
         </div>
      );
   };
```


## 💻 Documentation

### AnimatedSection props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `sectionID`  | `string` | Section Container ID |`-` |
| `sectionTitle`  | `string` | Section Title | `-`|


### useAnimatedSection 
- Hook that return Animated Sections values. 

```jsx
   import { FunctionComponent } from 'react';

   import { useAnimatedSection  } from './components/AnimatedSections';

   const App: FunctionComponent = () => {
      const { 
         sectionsActivated, 
         animatedSections, 
         currentPositionY, 
         handleAddActivedSection 
      } = useAnimatedSection();

      return(
         <div className="container">
           
         </div>
      );
   };

```

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `sectionsActivated`  | `HTMLElement[]` | Sections has been activated | `[]` |
| `animatedSections`  | `HTMLElement[]` |  Sections in all Application | `[]` | 
| `currentPositionY`  | `number` | Current window position | - |
| `handleAddActivedSection`  | `function<Params>` | Toast active state  | `false` |

### Params

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `section`  | `HTMLElement` | HTML Element to push in `sectionsActivated` |`-` |


## 🔖 Layout

<h5>Video</h5>
<br/>
<p align="left">

[Usage](https://user-images.githubusercontent.com/61842405/154737082-e02b4aca-47a1-40e1-8c41-43fa09684154.mov)

</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


