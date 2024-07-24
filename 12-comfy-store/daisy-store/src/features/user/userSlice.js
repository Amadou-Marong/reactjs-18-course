import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
    winter: 'winter',
    dracula: 'dracula'
}

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('theme') || themes.winter
    document.documentElement.setAttribute('data-theme', theme)
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
           const { dracula, winter } = themes
           state.theme = state.theme === dracula ? winter : dracula
           document.documentElement.setAttribute('data-theme', state.theme);
           localStorage.setItem('theme', state.theme)
        }
    }
});

export const { login, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;