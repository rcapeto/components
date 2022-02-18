import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.scss';

import { AnimatedProvider } from './components/AnimatedSections'

ReactDOM.render(
  <AnimatedProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AnimatedProvider>
  ,
  document.getElementById('root')
);