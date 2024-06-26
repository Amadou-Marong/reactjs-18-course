import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-base-200">
        <div className="navbar align-element">
            <div className="navbar-start">
                <NavLink to="/" className="hidden btn btn-primary 3xl items-center">Home</NavLink>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar