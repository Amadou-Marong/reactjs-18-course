const reducer = (state, action) => {
    if(action.type === "CLEAR_CART") {
        return {...state, cart: new Map()}
    }
    return state
}
export default reducer