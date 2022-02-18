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

const App: FunctionComponent = () => {
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

export default App;