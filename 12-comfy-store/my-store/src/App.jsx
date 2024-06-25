import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { About, Cart, Error, Checkout, HomeLayout, Products, SingleProduct, Landing, Register, Login, Orders } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <Error />
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <Error />
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <Error />
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <Error />
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <Error />
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <Error />
      },
      {
        path: 'orders',
        element: <Orders />,
        errorElement: <Error />
      }
    ],
    errorElement: <Error />
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
