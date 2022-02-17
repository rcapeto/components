import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.scss';

import { ToastProvider } from './components/ToastProvider';

ReactDOM.render(
  <ToastProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ToastProvider>,
  document.getElementById('root')
);