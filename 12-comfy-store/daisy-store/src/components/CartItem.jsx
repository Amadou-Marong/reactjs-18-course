import { useDispatch } from "react-redux"

const CartItem = ({cartItem}) => {
  const {amount, cartID, company, image, price, productColor, productID, title} = cartItem
  const dispatch = useDispatch()
  return (
    <article key={cartID} className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
      <img src={image} alt={title} className="h-24 w-24 object-cover rounded-lg sm:h-32 sm:w-32" />
      <div className="sm:ml-16 sm:w-48">	
        <h3>{title}</h3>
        <h4>{company}</h4>	
        <h4>{productColor}</h4>
      </div>
      <div>
        
      </div>
    </article>
  )
}

export default CartItem