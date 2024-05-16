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
import cartItems from "./data";

export const AppContext = createContext()


const defaultValue = {
    loading: false,
    cart: new Map(cartItems.map(item => [item.id, item])),
}

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultValue)

    const clearCart = () => {
        dispatch({type: CLEAR_CART})
    }

    return (
        <AppContext.Provider value={{...state, clearCart}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

