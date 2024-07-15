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
            console.log(product);
            toast.success("Item added to cart");
        },
        clearCart: (state, action) => {},
        removeItem: (state, action) => {},
        editItem: (state, action) => {},
    }
})

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions

export default cartSlice.reducer