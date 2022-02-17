import { FunctionComponent, useState } from 'react';

import { DefaultModal } from './components/Modal';

const App: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(true);

  return(
    <div>
      <DefaultModal 
        isOpen={isOpen} 
        closeModal={() => setIsOpen(false)}
      >
        <h1>teste</h1>
      </DefaultModal>
    </div>
  );
};

export default App;