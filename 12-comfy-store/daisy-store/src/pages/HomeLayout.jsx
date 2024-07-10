import { useNavigation } from "react-router-dom"
import { Header, Navbar } from "../components"
import { Outlet } from "react-router"
import Loading from "../components/Loading"
const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === "loading"

  return (
    <nav>
        <Header />
        <Navbar />
        {isPageLoading ? (
          <Loading />
        ) :
        (<section className="align-element py-2">
          <Outlet />
          </section>
        )}
        
    </nav>
  )
}

export default HomeLayout