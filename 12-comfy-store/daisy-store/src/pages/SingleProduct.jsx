import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";
import { customFetch } from "../utils";
import { useState } from "react";
import { generateAmountOptions } from "../utils";

import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";


export const loader = async ({params}) => {
  const response = await customFetch.get(`/products/${params.id}`);
  const product = response.data.data;
  return { product };
  // console.log(product);
}

const SingleProduct = () => {
  const { product } = useLoaderData()

  const { title, price, image, description, colors, company } = product.attributes;
  const [amount, setAmount] = useState(1)
  const [productColor, setProductColor] = useState(colors[0])


  const handleChange = (e) => {
    setAmount(parseInt(e.target.value))
  }

  const dispatch = useDispatch()
  
  const cartProduct = { 
    cartID : product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company
   }
   
   const addToCart = () => {
      dispatch(addItem({product: cartProduct}))
   }

   return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/" className="text-secondary">Home</Link>
          </li>
          <li>
            <Link to="/products" className="text-secondary">Products</Link>
          </li>
        </ul>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-16 mt-6">
        <img src={image} alt={title} className="w-96 h-96 lg:w-full rounded-xl object-cover"/>
        
        <div>
          <h2 className="text-3xl capitalize">{title}</h2>
          <p className="text-secondary">{company}</p>
          <p className="text-2xl mt-4">{formatPrice(price)}</p>
          <p className="mt-4">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-4">
              {colors.map((color) => {
                  return (
                    <button
                      key={color}
                      type='button'
                      className={`badge  w-6 h-6 mr-2  ${
                        color === productColor && 'border-2 border-secondary'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setProductColor(color)}
                    ></button>
                  );
                })}
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">amount</h4>
            </label>
            <select value={amount} onChange={handleChange} className="select select-secondary select-bordered select-md">
                {/* <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option> */}
                {generateAmountOptions(10)}
            </select>
          </div>
          <div className="mt-4">
            <button className="btn btn-secondary" onClick={addToCart}>Add to Bag</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct