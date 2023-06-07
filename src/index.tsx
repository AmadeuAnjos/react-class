import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { App } from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode> Tirando o Strict Mode resolveu o problema de perguntar duas vezes
    <App />
  //</React.StrictMode>
);

reportWebVitals();
