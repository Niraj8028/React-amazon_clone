import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './Context/UserContext';
import { initialState, reducer } from './Context/Reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(  
  
  <React.StrictMode>
    <ContextProvider initialState={initialState} reducer={reducer}>
      <App />
    </ContextProvider>
  </React.StrictMode>
);


reportWebVitals();
