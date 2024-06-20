import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
