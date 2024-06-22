import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios'

const url = 'https://www.course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkApi) => {

    try {
        const { data } = await axios.get(url)
        return data
    }catch(error){
        return thunkApi.rejectWithValue("Something went wrong")
    }
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
            state.amount = 0
            // return { cartItems: [] }
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
            // return { cartItems: state.cartItems.filter(item => item.id !== action.payload) }
        },
        increase: (state, {payload}) => {
            const cartItem = state.cartItems.find(item => item.id == payload)
            cartItem.amount = cartItem.amount += 1
        },
        decrease: (state, {payload}) => {
            const cartItem = state.cartItems.find(item => item.id == payload)
            cartItem.amount = cartItem.amount -= 1
        },
        calculateTotals: (state) => {
            let total = 0
            let amount = 0

            state.cartItems.forEach((item) => {
                total += item.amount * parseFloat(item.price)
                amount += item.amount
            })
            state.total = parseFloat(total.toFixed(2))
            state.amount = amount
        }
    },

    extraReducers: {
        [getCartItems.pending]:(state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]:(state, action) => {
            state.isLoading = false
            state.cartItems = action.payload
        },
        [getCartItems.rejected]:(state) => {
            state.isLoading = false
        }
    }
})


// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions

export default cartSlice.reducer