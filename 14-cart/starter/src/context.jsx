import { createContext, useContext, useReducer } from "react";

export const AppContext = createContext()

const defaultValue = [
    
]

export const AppProvider = ({children}) => {
    let greeting = "Hello"
    const [state, dispatch] = useReducer(reducer, defaultValue)
    return (
        <AppContext.Provider value={{greeting}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

