import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";


function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  const { isModalOpen } = useSelector((state) => state.modal)

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (
    <main>
      {isModalOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
