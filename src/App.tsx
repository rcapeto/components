import { FunctionComponent } from 'react';

import { AnimatedNumber } from './components/AnimatedNumbers';

const App: FunctionComponent = () => {
  return(
    <div className="container">
      <div style={{ height: '150vh' }}/>
      <AnimatedNumber number={12412030}/>
      <div style={{ height: '150vh' }}/>
      <AnimatedNumber number={12412030} delay={100}/>
      <div style={{ height: '150vh' }}/>
    </div>
  );
};

export default App;