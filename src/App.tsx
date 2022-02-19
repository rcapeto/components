import { FunctionComponent } from 'react';

import { NavigationButton } from './components/NavigationButton';

const App: FunctionComponent = () => {
  return(
    <div className="container">
      <NavigationButton 
        sectionId="content"
      />

      <div style={{ height: '150vh' }}/>
      
      <div id={'content'}>
        <h1>Content</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Deleniti nisi, in, excepturi culpa esse architecto quia unde libero doloremque 
          assumenda ipsa fugit dolore repellat! Reiciendis quo magni eligendi sequi doloremque.
        </p>
      </div>

      <div style={{ height: '150vh' }}/>

    </div>
  );
};

export default App;