import { createContext, useState, useContext } from "react";

export const AppContext = createContext()


const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [pageId, setPageId] = useState(null)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    return (
        <AppContext.Provider value={
            {
                isSidebarOpen, 
                openSidebar, 
                closeSidebar,
                pageId,
                setPageId
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

export default AppProvider;