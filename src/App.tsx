import { FunctionComponent } from 'react';

import { TabNavigation } from './components/TabNav';

const items = [
  {
     tabId: 'first-content',
     tabTitle: 'First Content',
     content: {
        heading: 'First Content Title',
        paragraph: 'This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. Its repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.'
     },
  },
  {
     tabId: 'second-content',
     tabTitle: 'Second Content',
     content: {
        heading: 'Second Content Title',
        paragraph: 'This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. Its repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.'
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

export default App;