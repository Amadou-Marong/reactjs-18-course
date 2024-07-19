import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('theme') || 'dracula'
    document.documentElement.setAttribute('data-theme', 'dracula')
    return theme
}

const initialState = {
    user : { username: 'imam ahmad' },
    theme: getThemeFromLocalStorage()
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log('login');
            toast.success('login success')
        },
        logoutUser: (state) => {
            console.log('logout')
            toast.success('logout success')
        },
        toggleTheme: (state) => {
            console.log('toggle theme');
        }
    }
});

export const { login, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;