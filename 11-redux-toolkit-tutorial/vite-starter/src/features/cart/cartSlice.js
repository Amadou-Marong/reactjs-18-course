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
    }
})


// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions

export default cartSlice.reducer