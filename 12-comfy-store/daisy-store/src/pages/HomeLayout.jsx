import { Outlet } from "react-router"
const HomeLayout = () => {
  return (
    <nav>
        <span className="text-4xl text-primary">Home Layout</span>
        <section className="align-element py-8">
          <Outlet />
        </section>
    </nav>
  )
}

export default HomeLayout