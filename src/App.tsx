import { FunctionComponent } from 'react';
import CounterInfo from './components/CounterInfo';
import { WhatsappChat } from './components/WhatsappChat';

   const App: FunctionComponent = () => {
      return(
         <div className="container">
            <WhatsappChat phone='5516991476318' visible position='center'/>
         </div>
      );
   };

export default App;