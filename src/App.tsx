import { FunctionComponent } from 'react';
import { BarPercentual } from './components/PercentualBar';

const App: FunctionComponent = () => {
  return(
    <div className="container">
      {
        Array.from({ length: 6 }, (_, index) => (
          <div style={{ height: '200vh' }} key={String(index)}/>
        ))
      }
      <BarPercentual />
    </div>
  );
};

export default App;