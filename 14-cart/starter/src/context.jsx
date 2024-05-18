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
import { getTotals } from "./utils";

const url = 'https://www.course-api.com/react-useReducer-cart-project'

export const AppContext = createContext()


const defaultValue = {
    loading: false,
    // cart: new Map(cartItems.map(item => [item.id, item])),
    cart: new Map(),
}

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultValue)

    const {totalAmount, totalCost} = getTotals(state.cart)

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

    const fetchData = async () => {
        dispatch({type: LOADING})
        const response = await fetch(url)
        const cart = await response.json();
        dispatch({type: DISPLAY_ITEMS, payload: {cart}})
        // console.log(cart);
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <AppContext.Provider value={{...state, clearCart, removeItem, increase, decrease, totalAmount, totalCost}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

