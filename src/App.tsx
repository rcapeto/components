import { FunctionComponent } from 'react';
import CounterInfo from './components/CounterInfo';

   const App: FunctionComponent = () => {
      return(
         <div className="container">
            <CounterInfo/>
         </div>
      );
   };

export default App;