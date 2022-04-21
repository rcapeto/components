import React from 'react';
import { useEventsV2 } from './hooks/useEvents';

interface Detail {
  logged: boolean;
}

const App = () => {
  const { dispatchEvent, listenEvent, dispatchedEvents } = useEventsV2();

  console.log(dispatchedEvents);

  React.useEffect(() => {
    listenEvent<Detail>('@app_test', event => {
    });
  }, []);

  const handleConnect = () => {
    dispatchEvent<Detail>('@app_test', { logged: true });
  };

 return(
    <div>
       <button onClick={handleConnect}>Sign in</button>
    </div>
 );
};

export default App;