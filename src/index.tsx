import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.scss';

import { EventContextProvider } from './hooks/useEvents';

ReactDOM.render(
  <React.StrictMode>
    <EventContextProvider>
      <App />
    </EventContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);