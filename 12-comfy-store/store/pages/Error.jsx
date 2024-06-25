import { useRouteError, Link } from "react-router-dom"
const Error = () => {
    const error = useRouteError()

    console.log(error);
    if (error.status === 404) {
        return (
            <main className="grid min-h-[100vh] place-items-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-primary">404</h1>
                    <h3 className="text-2xl font-bold text-primary">Page Not Found</h3>
                    <Link to="/" className="btn">Go Home</Link>
                </div>
            </main>
        )
    
    }
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default Error