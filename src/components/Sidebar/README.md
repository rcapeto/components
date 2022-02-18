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
| `closeWithOverlayClick`  | `boolean` | Close Sidebar when click in Overlay | `true` |
| `closeWithESC`  | `boolean` | Close Sidebar when click press Escape Key | `true` |
| `buttonTitle`  | `string` | Categories | `Menu` |
| `iconColor`  | `string` | Button icon color | `'#000'` |
| `iconSize`  | `number` | Button icon size | `20` |

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
 <img width="425" alt="Sidebar Button" src="https://user-images.githubusercontent.com/61842405/154613351-8ea0d89f-66d2-4529-b51e-44b0d507a3f6.png">
 <br />
 <img width="425" alt="Sidebar Open" src="https://user-images.githubusercontent.com/61842405/154613401-00cc7843-8456-4758-8ae3-1bdc84d81d5f.png">
</p>


<h5>Mobile</h5>
<br/>
<p align="left">
<img width="378" alt="Captura de Tela 2022-02-18 às 00 43 36" src="https://user-images.githubusercontent.com/61842405/154613471-1d62f131-3b5d-426b-8874-b9f002d51df7.png">

</p>


## 👨🏻‍💻 Developers
- Raphael Capeto


