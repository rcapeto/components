# Component [TabNavigation]


## 🚀 How to use

### TabNavigation
```jsx
  import { FunctionComponent } from 'react';

   import { TabNavigation } from './components/TabNav';

   const items = [
      {
         tabId: 'first-content',
         tabTitle: 'First Content',
         content: {
            heading: 'First Content Title',
            paragraph: 'This is some placeholder content for the TabNavigation component.'
         },
      },
      {
         tabId: 'second-content',
         tabTitle: 'Second Content',
         content: {
            heading: 'Second Content Title',
            paragraph: 'This is some placeholder content for the TabNavigation component.'
         },
      },
   ];


   const App: FunctionComponent = () => {
      return(
         <div className="container">
            <TabNavigation 
               items={items} 
            />
         </div>
      );
   };
```

## 💻 Documentation

### TabNavigation props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `items`  | `array<NavigationItem>` | Categories items `required` | `[]` |
| `navigationType`  | `string` | Navigation Type `buttons` - `tabs` | `buttons` |
| `navigationPosition`  | `string` | Navigation items position `center` - `left` - `right` | `center` |
| `onTabSelect`  | `function` | Callback Function dispatch when item was clicked | `-` |

### NavigationItem Props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `tabTitle`  | `string` | Navigation (button/tab) title `required` | `-` |
| `tabId`  | `string` | Navigation tab IDt Category icon `required` | `-` |
| `content`  | `Object<Content>` | Content data  `required` | `-` |


### Content Props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `heading`  | `string` | Content title `required` | `-` |
| `paragraph`  | `string` | Content paragraph, HTML tags are accepted `required` | `-` |

## 🔖 Layout

<h5>Buttons</h5>
<br/>
<p align="left">
 <img width="1439" alt="Navigation with buttons" src="https://user-images.githubusercontent.com/61842405/154717270-19ee8f82-0f0e-4047-8cc7-e3b4186e26fc.png">
</p>

<h5>Tabs</h5>
<br/>
<p align="left">
<br/>
<img width="1399" alt="Navigation with Tabs" src="https://user-images.githubusercontent.com/61842405/154717426-19bb84dc-9727-4c05-b0ce-f81fabe8003d.png">

</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


