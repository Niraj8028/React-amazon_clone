import React, { useReducer } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Checkout from './Components/Checkout/Checkout';

import Header from './Components/Header/Header';

import Home from './Components/Home/Home';
import Signin from './Components/SignInPage/Signin';

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
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<div>signup</div>} />
        <Route path="/checkout" element={<div>   
            <Header />     
            <Checkout />
        </div>} />
      </Routes>
  

    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
