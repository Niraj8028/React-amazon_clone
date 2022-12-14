import { createContext,useContext, useReducer} from "react";

 export const UserContext=createContext();

export const ContextProvider=({reducer,initialState,children})=>(
    <UserContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </UserContext.Provider>
)

 export const useStateValue=()=>{
    useContext(UserContext)
}