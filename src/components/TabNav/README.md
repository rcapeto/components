# Component [TabNavigation]


## 🚀 How to use

### TabNavigation
 - [React-Icons](https://react-icons.github.io/react-icons/) is required.

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
| `onTabSelect`  | `function` | Callback Function dispatch when item has clicked. | `-` |

### NavigationItem Props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `tabTitle`  | `string` | Navigation (button/tab) title. `required` | `-` |
| `tabId`  | `string` | Navigation tab IDt Category icon `required` | `-` |
| `content`  | `Object<Content>` | Content data  `required` | `-` |


### Content Props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `heading`  | `string` | Content title. `required` | `-` |
| `paragraph`  | `string` | Content paragraph. HTML tags are accepted `required` | `-` |

## 🔖 Layout

<h5>Buttons</h5>
<br/>
<p align="left">
 
</p>


<h5>Tabs</h5>
<br/>

</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


