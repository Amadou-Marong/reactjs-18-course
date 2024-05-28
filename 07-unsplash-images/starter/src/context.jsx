import {useState, createContext, useContext} from 'react'


const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false)
    const [search, setSearch] = useState('cat')

    const toggleDarkTheme = () => {
        const newTheme = !darkTheme
        setDarkTheme(newTheme)
        const body = document.querySelector('body')
        body.classList.toggle('dark-theme', newTheme)
        console.log(body);
    }

    return (
        <AppContext.Provider value={{darkTheme, toggleDarkTheme, search, setSearch}}>
            {children}
        </AppContext.Provider>
    )        
}

export const useGlobalContext = () => useContext(AppContext)