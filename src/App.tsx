import { FunctionComponent, useState } from 'react';

import { DefaultModal } from './components/Modal';

const App: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div>
      <DefaultModal 
        isOpen={isOpen} 
        closeModal={() => setIsOpen(false)}
        overlay={true}
        animation={true}
      />
    </div>
  );
};

export default App;