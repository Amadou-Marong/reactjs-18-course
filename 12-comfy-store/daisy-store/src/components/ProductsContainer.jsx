import ProductsGrid from "./ProductsGrid"
import ProductsList from "./ProductsList"
import { useLoaderData } from "react-router-dom"
import { useState } from "react"
import { BsFillGridFill, BsList } from "react-icons/bs"

const ProductsContainer = () => {
  const { meta } = useLoaderData()
  console.log(meta);
  const {total} = meta.pagination
  const [isGridView, setIsGridView] = useState(true)
  return (
    <div>
        {/* <ProductsList /> */}
        {/* <ProductsGrid /> */}
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-neutral-content">Products</h2>
            <div className="flex gap-4">
                <button onClick={() => setIsGridView(true)} className={`btn ${isGridView ? 'btn-primary' : 'btn-outline'}`}>
                    <BsFillGridFill />
                </button>
                <button onClick={() => setIsGridView(false)} className={`btn ${!isGridView ? 'btn-primary' : 'btn-outline'}`}>
                    <BsList />
                </button>
            </div>
          </div>
        {isGridView ? <ProductsGrid /> : <ProductsList />}
    </div>
  )
}

export default ProductsContainer