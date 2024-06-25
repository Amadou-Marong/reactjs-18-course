import { Outlet } from "react-router"
const HomeLayout = () => {
  return (
    <nav>
        <span className="text-2xl font-bold text-primary bg-primary">Home Layout</span>
        <Outlet />
    </nav>
  )
}

export default HomeLayout