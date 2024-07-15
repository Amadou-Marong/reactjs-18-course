import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify";

const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shippingFee: 534,
    tax: 0,
    orderTotal: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultState,
    reducers: {
        addItem: (state, action) => {
            const { product } = action.payload
            const item = state.cartItems.find(item => item.cartID === product.cartID)

            if(item) {
                item.amount += product.amount
            } else {
                state.cartItems.push(product)
            }
            state.numItemsInCart += product.amount
            state.cartTotal += product.amount * product.price
            state.tax = state.cartTotal * 0.1
            state.orderTotal = state.cartTotal + state.shippingFee + state.tax
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
            toast.success("Item added to cart");
        },
        clearCart: (state, action) => {},
        removeItem: (state, action) => {},
        editItem: (state, action) => {},
    }
})

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions

export default cartSlice.reducer