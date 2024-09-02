import { useDispatch } from "react-redux"
import { FormInput, SubmitBtn } from "../components"
import { Form, Link, useNavigate } from "react-router-dom"
import { customFetch } from "../utils"
import { toast } from "react-toastify"
import { loginUser } from "../features/user/userSlice"
import { store } from "../store"

export const action = (store) => async ({ request }) => {
  console.log(store);
  return store
}

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

 
  const loginAsGuest = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret"
      });

      dispatch(loginUser(response.data))
      toast.success("Logged in as guest")
      navigate("/")
    } catch (error) {
      console.log(error)
      toast.error("Failed to login as guest")
    }
  }
  
  return (
    <section className="h-screen grid place-items-center">
      <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" label="Email" name="identifier" defaultValue="test@test.com"/>
        <FormInput type="password" label="password" name="password" defaultValue="******"/>
        <div className="mt-4">
          <SubmitBtn text="Login"/>
        </div>
        <button className="btn btn-secondary btn-block" onClick={loginAsGuest}>guest user</button>
          <p className="text-center">
            Not a member yet? <Link to="/register" className="ml-2 link link-hover link-primary capitalize">Register</Link>
          </p>
      </Form>
    </section>
  )
}

export default Login