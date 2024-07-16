import { useSelector } from "react-redux"
const CartItemsList = () => {
   const  { cartItems }  = useSelector((state) => state.cartState)
  return (
    <div>CartItemsList</div>
  )
}

export default CartItemsList