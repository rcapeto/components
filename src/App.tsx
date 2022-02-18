import { FunctionComponent } from 'react';

import { AutoCompleteInput } from './components/InputAutoComplete';

const items = [
  {
     label: 'React',
     value: { tech: 'react'}
  },
  {
    label: 'Typescript',
    value: { tech: 'Typescript'}
  },
]; 

const App: FunctionComponent = () => {
  return(
    <div className="container">
      <AutoCompleteInput 
        items={items}
      />
    </div>
  );
};

export default App;