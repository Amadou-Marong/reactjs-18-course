const links = [
    { id: 1, text: 'home', url: '/' },
    { id: 2, text: 'about', url: '/about'},
    { id: 3, text: 'products', url: '/products'},
    { id: 4, text: 'cart', url: '/cart' },
    { id: 5, text: 'checkout', url: '/checkout'},
    { id: 6, text: 'orders', url: '/orders' }
]
import { Link } from "react-router-dom"

const NavLinks = () => {
  return (
    <>
        {
            links.map(link => {
                const { id, url, text } = link
                return (
                    <li key={id}>
                        <Link to={url} className="capitalize">{text}</Link>
                    </li>
                )
            })
        }
    </>
  )
}

export default NavLinks