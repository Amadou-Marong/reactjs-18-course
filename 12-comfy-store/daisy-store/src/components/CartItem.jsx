import { useDispatch } from "react-redux"
import { formatPrice, generateAmountOptions } from "../utils"
import { editItem, removeItem } from "../features/cart/cartSlice"


const CartItem = ({cartItem}) => {
  const {amount, cartID, company, image, price, productColor, productID, title} = cartItem
  const dispatch = useDispatch()
  
  const handleAmount = (e) => {
    dispatch(editItem({cartID, amount: parseInt(e.target.value)}))
  }

  const removeItemFromCart = () => {
    dispatch(removeItem({cartID}))
  }

  return (
    <article key={cartID} className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
      <img src={image} alt={title} className="h-24 w-24 object-cover rounded-lg sm:h-32 sm:w-32" />
      <div className="sm:ml-16 sm:w-48">	
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 text-sm capitalize text-neutral-content">{company}</h4>	
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color:
          <span className="badge badge-sm" style={{backgroundColor: productColor}}></span>
        </p>
      </div>
      <div className="sm:ml-12">	
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select name="amount" id="amount" className="mt-2 select select-bordered select-xs" value={amount} onChange={handleAmount}>
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        <button className="mt-4 link link-primary link-hover text-sm" onClick={removeItemFromCart}>remove</button>
        <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
      </div>
    </article>
  )
}

export default CartItem