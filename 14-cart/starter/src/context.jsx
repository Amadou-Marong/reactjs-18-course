import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

import { 
    CLEAR_CART, 
    REMOVE, 
    INCREASE, 
    DECREASE, 
    LOADING, 
    DISPLAY_ITEMS 
} from "./actions";

export const AppContext = createContext()


const defaultValue = {
    loading: false,
    cart: []
}

export const AppProvider = ({children}) => {
    const greeting = "Hello"
    const [state, dispatch] = useReducer(reducer, defaultValue)
    return (
        <AppContext.Provider value={{greeting}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

