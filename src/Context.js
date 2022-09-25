import { createContext, useContext, useReducer } from "react";

export const userContext=createContext();

export const StateProvider=({reducer,initialState,children})=>{
    <userContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </userContext.Provider>
}
