import React, { useReducer } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Checkout from './Components/Checkout';
import Header from './Components/Header/Header';

import Home from './Components/Home/Home';

import { initialState, reducer } from './Context/Reducer';
import { UserContext } from './Context/UserContext';

function App() {
  
  const[state,dispatch]=useReducer(reducer,initialState);

  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>
          
            <Header />
          
          <Home />
          </div>} />
        <Route path="/signin" element={<div>signin</div>} />
        <Route path="/signup" element={<div>signup</div>} />
        <Route path="/Cart" element={<Checkout />} />
      </Routes>
  

    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
