import { useLoaderData, Link } from "react-router-dom"
const ProductsGrid = () => {
    const { products } = useLoaderData()
    console.log(products);
  return (
    <div className="pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {
            const {title, price, image } = product.attributes;
            
            return (
                <Link key={product.id} to={`/products/${product.id}`} className="card w-full shadow-xl hover:shadow-2xl transition duration-300">
                    <figure className="pt-4 px-4">
                        <img src={image} alt={title} className="w-full rounded-xl h-64 md:h-48 object-cover"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="cart-title tracking-wider capitalize">{title}</h2>
                        <span className="text-secondary">{price}</span>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default ProductsGrid