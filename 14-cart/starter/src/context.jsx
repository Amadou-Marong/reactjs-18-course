import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

import { 
    CLEAR_CART, 
    REMOVE_ITEM, 
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

    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM, payload: {id}})
    }

    const increase = (id) => {
        dispatch({type: INCREASE, payload: {id}})
    }

    const decrease = (id) => {
        dispatch({type: DECREASE, payload: {id}})
    }

    return (
        <AppContext.Provider value={{...state, clearCart, removeItem, increase, decrease}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

