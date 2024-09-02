import { useSelector } from "react-redux"
import { CartTotals, CheckoutForm, SectionTitle } from "../components"


const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.orderTotal)

  if (cartTotal === 0) {
    return <SectionTitle text="Your Cart is Empty" />
  }
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className='mt-8 grid gap-8  md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  )
}

export default Checkout