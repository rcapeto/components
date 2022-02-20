import { FunctionComponent } from 'react';
import { Dropdown } from './components/Dropdown';

const items = [
  {
    label: 'React',
    value: 'react'
  },
  {
    label: 'React Native',
    value: 'react-native',
  },
  {
    label: 'Javascript',
    value: 'javascript',
  },
  {
    label: 'Typescript',
    value: 'typescript',
  },
  {
    label: 'Jquery',
    value: 'jquery',
  },
];

const App: FunctionComponent = () => {
  return(
    <div className="container">
      <Dropdown items={items}/>
    </div>
  );
};

export default App;