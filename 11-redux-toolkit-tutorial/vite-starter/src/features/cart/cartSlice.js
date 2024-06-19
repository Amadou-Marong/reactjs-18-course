import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true
}

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
            // console.log(action);
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
            // return { cartItems: state.cartItems.filter(item => item.id !== action.payload) }
            state.amount = state.amount - 1
        },
        increase: (state, {payload}) => {
            const cartItem = state.cartItems.find(item => item.id == payload)
            cartItem.amount = cartItem.amount += 1
        },
        decrease: (state, {payload}) => {
            const cartItem = state.cartItems.find(item => item.id == payload)
            cartItem.amount = cartItem.amount -= 1
        }
    }
})

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease } = cartSlice.actions

export default cartSlice.reducer