import { Header, Navbar } from "../components"
import { Outlet } from "react-router"
const HomeLayout = () => {
  return (
    <nav>
        <Header />
        <Navbar />
        <section className="align-element py-2">
          <Outlet />
        </section>
    </nav>
  )
}

export default HomeLayout