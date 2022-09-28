import React, { useReducer,useEffect, useContext} from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Checkout from './Components/Checkout/Checkout';
import { auth } from './Components/firebase';
import Header from './Components/Header/Header';

import Home from './Components/Home/Home';
import Signin from './Components/SignInPage/Signin';

import { initialState, reducer } from './Context/Reducer';




function App() {
  
  const[state,dispatch]=useReducer(reducer,initialState);
  // const[{cart},dispatched]=useContext(UserContext);

  // useEffect(() => {
  //   const unsubscribe= auth.onAuthStateChanged((authuser)=>{
  //     if(authuser){
  //       dispatch({
  //         type:"SET_USER",
  //         user:authuser
  //       })
  //     }
  //     else{
  //       dispatch({
  //         type:"SET_USER",
  //         user:null,
  //       })
  //     }
  //   })
  
  //   return()=>{
  //     unsubscribe()
  //   }
    
  // }, [])
  

  return (
    
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
    
  );
}

export default App;
