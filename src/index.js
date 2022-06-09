import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SeasonDisplay from './seasonDisplay';


const root =
   ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
    <SeasonDisplay   />
  </React.StrictMode>
  
);


