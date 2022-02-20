import { FunctionComponent } from 'react';
import { BarPercentual } from './components/PercentualBar';

const App: FunctionComponent = () => {
  return(
    <div className="container">
      <div style={{ height: '200vh' }}/>
      <div style={{ height: '200vh' }}/>
      <div style={{ height: '200vh' }}/>
      <div style={{ height: '200vh' }}/>
      <div style={{ height: '200vh' }}/>
      <div style={{ height: '200vh' }}/>
      <BarPercentual />
    </div>
  );
};

export default App;