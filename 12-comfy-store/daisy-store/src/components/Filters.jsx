import { Form, Link, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"

const Filters = () => {
  const {meta} = useLoaderData()
  const categories = meta.categories
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        {/* SEARCH */}
        <FormInput label="search product" name="search" type="search" size="input-sm" />
        {/* CATEGORIES */}
        <FormSelect label="category" name="category" size="select-sm" list={categories} />
        <button type="submit" className="btn btn-primary btn-sm">Search</button>
        <Link to="/products" className="btn btn-secondary btn-sm">Reset</Link>
    </Form>    
  )
}

export default Filters