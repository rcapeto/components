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

<h5>Success Toast</h5>
<br/>
<p align="left">
  <img width="375" alt="Success Toast Message" src="https://user-images.githubusercontent.com/61842405/154569835-86ba73e9-548d-4683-9413-c3be0040a644.png">
</p>

<h5>Error Toast</h5>
<br/>
<p align="left">
  <img width="375" alt="Error Toast Message" src="https://user-images.githubusercontent.com/61842405/154569958-a830d29b-7318-407a-9320-11ccde3610db.png">
</p>


<h5>Info Toast</h5>
<br/>
<p align="left">
  <img width="375" alt="Info Toast Message" src="https://user-images.githubusercontent.com/61842405/154569716-b3ddc66e-96be-4902-a36b-5f7cb092f950.png">
</p>

<h5>Warning Toast</h5>
<br/>
<p align="left">
  <img width="375" alt="Warning Toast Message" src="https://user-images.githubusercontent.com/61842405/154569913-03e8a06f-9dc2-45b4-8500-3bfb1b69285e.png">
</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


