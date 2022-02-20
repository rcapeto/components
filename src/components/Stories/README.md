# Component [Stories]


## 🚀 How to use

### Stories
```jsx
   import { FunctionComponent } from 'react';

   import { Stories } from './components/Stories';

   const items = [
   {
      stories: [
         {
            altImage: 'Image 1',
            image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
            title: 'Image 1',
         },
         {
            altImage: 'Image 2',
            image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
            title: 'Image 2',
         }
      ],
      title: 'Story 1',
      mainImage: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
   },
   {
      stories: [
         {
            altImage: 'Image 1',
            image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
            title: 'Image 1',
         },
         {
            altImage: 'Image 2',
            image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
            title: 'Image 2',
         },
         {
            altImage: 'Image 3',
            image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
            title: 'Image 3',
         }
      ],
      title: 'Story 2',
      mainImage: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
   },
   {
      stories: [
         {
            altImage: 'Image 1',
            image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
            title: 'Image 1',
         },
         {
            altImage: 'Image 2',
            image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
            title: 'Image 2',
         },
         {
            altImage: 'Image 3',
            image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
            title: 'Image 3',
         },
         {
            altImage: 'Image 4',
            image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
            title: 'Image 4',
         }
      ],
         title: 'Story 3',
         mainImage: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      }
   ];

   const Example: FunctionComponent = () => {
      return(
         <div className="container">
         <Stories 
            storyItems={items}
         />
         </div>
      );
   };
```

## 💻 Documentation

### Stories props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `storyItems`  | `array<StoryItem>` | Stories items `required`| `[]` |
| `autoStories`  | `boolean` | Change stories automatic | `true` |
| `storiesDelay`  | `number` | Delay to change Story `in ms` | `4775` |


### StoryItem

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `mainImage`  | `string` | Main item image | `-` |
| `title`  | `string` | Item title | `-` |
| `stories`  | `array<Story>` | Item stories | `[]` |

### Story

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `image`  | `string` | Story image | `-` |
| `title`  | `string` | Story title | `-` |
| `altImage`  | `string` | Story text alternative | `-` |

## 🔖 Layout

<br/>
<p align="left">
   

https://user-images.githubusercontent.com/61842405/154864497-d5c5072e-681c-4e4e-a1a0-056208c0d5e5.mov

 <br/>
<img width="384" alt="Stories in Mobile" src="https://user-images.githubusercontent.com/61842405/154864511-6543b087-f7bd-4615-b402-515c213bcf69.png">

</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


