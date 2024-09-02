import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logoutUser } from "../features/user/userSlice"
import { clearCart } from "../features/cart/cartSlice"




const Header = () => {
  const user = useSelector((state) => state.userState.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    navigate('/')
    dispatch(logoutUser())
    dispatch(clearCart())
  }

  return (
    <header className="bg-neutral py-2 text-neutral-content">
        <div className="align-element flex flex-justify sm:justify-end">
            {user ? (
              <div className="flex gap-x-2 sm:gap-x-8 items-center">
                <p className="text-xs sm:text-sm">Welcome, {user.username}</p>
                <button onClick={handleLogout} className="btn btn-xs btn-outline btn-primary">Logout</button>
              </div>
            ):(
              <div className="flex gap-x-6 justify-center align-center">
                <Link to="/login" className="link link-hover text-xs sm:text-sm">Sign in / Guest</Link>
                <Link to="/register" className="link link-hover text-xs sm:text-sm">Create an Account</Link>
              </div>
            )}
            
        </div>
    </header>
  )
}

export default Header