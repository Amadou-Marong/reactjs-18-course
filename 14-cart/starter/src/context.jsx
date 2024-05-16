import { createContext, useContext, useReducer } from "react";

export const AppContext = createContext()

const reducer = (state, action) => {
    return state
}

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

