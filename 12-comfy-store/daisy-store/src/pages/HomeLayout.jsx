import { Outlet } from "react-router"
const HomeLayout = () => {
  return (
    <nav>
        <span className="text-4xl text-primary">Home Layout</span>
        <Outlet />
    </nav>
  )
}

export default HomeLayout