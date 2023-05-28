import { createContext, useEffect, useReducer } from "react"
import reducer from "./Reducer";

const INITIAL_STATE = {
    User : null,
    isFetching : false,
    error : false
}

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children})=>{
const [state,dispatch] = useReducer(reducer,INITIAL_STATE);

useEffect(()=>{
localStorage.setItem("User",JSON.stringify(state.User))
},[state.User])
return (
    <Context.Provider value={{User : state.User,
    isFetching : state.isFetching,
    error:state.error,
    dispatch}}>
        {children}
    </Context.Provider>
)


}