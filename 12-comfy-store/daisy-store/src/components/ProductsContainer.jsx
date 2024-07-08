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
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{total} {total > 1 ? 'products' : 'product'}</h2>

            <div className="flex gap-4">
                <button onClick={() => setIsGridView(true)} className={`btn ${isGridView ? 'btn-primary' : 'btn-outline'}`}>
                    <BsFillGridFill />
                </button>
                <button onClick={() => setIsGridView(false)} className={`btn ${!isGridView ? 'btn-primary' : 'btn-outline'}`}>
                    <BsList />
                </button>
            </div>
          </div>
        <div>
          {
            total === 0 ? (<h2 className="text-2xl font-bold mt-16">No products Match your Search</h2>) : 
              (isGridView) ? (<ProductsGrid />) : (<ProductsList />)
          }
        </div>
    </div>
  )
}

export default ProductsContainer