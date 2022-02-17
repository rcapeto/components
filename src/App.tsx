import { FunctionComponent } from 'react';

import { useToast } from './components/ToastProvider';

const App: FunctionComponent = () => {
  const { showToast } = useToast();

  const buttonClick = () => {
    showToast('Show message here', 'info');
  };

  return(
    <button onClick={buttonClick}>
      Show Toast
    </button>
  );
};

export default App;