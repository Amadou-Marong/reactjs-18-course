import { createSlice } from '@reduxjs/toolkit'


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
        addToCart: (state, action) => {},
        clearCart: (state, action) => {},
        removeItem: (state, action) => {},
        editItem: (state, action) => {},
    }
})

export const { addToCart, clearCart, removeItem, editItem } = cartSlice.actions

export default cartSlice.reducer