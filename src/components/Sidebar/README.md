# Component [Sidebar]


## 🚀 How to use

### Sidebar
 - [React-Icons](https://react-icons.github.io/react-icons/) is required.

```jsx
   import { FunctionComponent } from 'react';

   import { MdDashboard } from 'react-icons/md';
   import { AiFillSetting, AiOutlinePoweroff } from 'react-icons/ai';

   import { Sidebar, SidebarCategory } from './components/Sidebar';

   const categories: SidebarCategory[] = [
      {
         title: 'My profile',
         icon: MdDashboard,
         subcategories: [
            {
            icon:AiFillSetting,
            link: '/profile/settings',
            title: 'Settings' 
            },
            {
            icon:AiOutlinePoweroff,
            link: '/logout',
            title: 'Logout' 
            }
         ],
      },
   ];

   const Example: FunctionComponent = () => {
      return(
         <header
            style={{ height: 70, padding: 10, backgroundColor: '#000' }}
         >
            <Sidebar 
               categories={categories}
               iconColor="#fff"
               iconSize={20}
               buttonTitle="Menu"
            />
         </header>
      );
   };
```

## 💻 Documentation

### Sidebar props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `categories`  | `array<Category>` | Categories items `required` | `[]` |
| `closeWithOverlayClick`  | `boolean` | Close Sidebar when click in Overlay `!required` | `true` |
| `closeWithESC`  | `boolean` | Close Sidebar when click press Escape Key `!required` | `true` |
| `buttonTitle`  | `string` | Categories `!required` | `Menu` |
| `iconColor`  | `string` | Button icon color `!required` | `'#000'` |
| `iconSize`  | `number` | Button icon size `!required` | `'20'` |

### Category Props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `title`  | `string` | Category title `required` | `-` |
| `icon`  | `IconType` [react-icons](https://react-icons.github.io/react-icons/) type | Category icon `required` | `-` |
| `subcategories`  | `array<SubCategory>` | Subcategories items `required` | `[]` |

### SubCategory Props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `title`  | `string` | Subcategory title `required` | `-` |
| `icon`  | `IconType` [react-icons](https://react-icons.github.io/react-icons/) type| Subcategory icon `required` | `-` |
| `link`  | `string` | Link to navigate `required` | `[]` |


## 🔖 Layout

<h5>Desktop</h5>
<br/>
<p align="left">

</p>


<h5>Mobile</h5>
<br/>
<p align="left">

</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


