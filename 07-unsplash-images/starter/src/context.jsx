import {useState, createContext, useContext} from 'react'


const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false)

    const toggleDarkTheme = () => {
        const newTheme = !darkTheme
        setDarkTheme(newTheme)
        const body = document.querySelector('body')
        body.classList.toggle('dark-theme', newTheme)
        console.log(body);
    }

    return (
        <AppContext.Provider value={{darkTheme, toggleDarkTheme}}>
            {children}
        </AppContext.Provider>
    )        
}

export const useGlobalContext = () => useContext(AppContext)