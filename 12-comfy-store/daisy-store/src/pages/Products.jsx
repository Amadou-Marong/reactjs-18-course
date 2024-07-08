import { Filters, PaginationContainer, ProductsContainer } from '../components'
import { customFetch } from '../utils'

const url = '/products'
export const loader = async ({request}) => {
  const response = await customFetch(url)
  const products = await response.data.data
  const meta = await response.data.meta
  return { products, meta}
}
const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products