import { FunctionComponent } from 'react';

import { TooltipWrapper } from './components/Tooltip';

const App: FunctionComponent = () => {
  return(
    <div>
      <TooltipWrapper label='Tooltip Message'>
        <h1>Tooltip Example</h1>
      </TooltipWrapper>
    </div>
  );
};

export default App;