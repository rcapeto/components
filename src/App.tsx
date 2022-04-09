import { FunctionComponent } from 'react';
import CounterInfo from './components/CounterInfo';
import { WhatsappChat } from './components/WhatsappChat';

   const App: FunctionComponent = () => {
      return(
         <div className="container">
            <CounterInfo 
               dataInitial='04/04/2022'
               counterType='banner'
               dataFinal='09/04/2022 22:17' 
            />
         </div>
      );
   };

export default App;