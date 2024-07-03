import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About, Cart, Error, Checkout, HomeLayout, Products, SingleProduct, Landing, Register, Login, Orders } from './pages';
import { ErrorElement } from "./components";
import { loader as landingLoader} from "./pages/Landing";
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: ErrorElement
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:id',
        element: <SingleProduct />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'checkout',
        element: <Checkout />
      }
    ]
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: 'register',
    element: <Register />,
    errorElement: <Error />
  }
])
const App = () => {
  return <RouterProvider router={router}/>
}

export default App