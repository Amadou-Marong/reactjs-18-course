import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const categories = meta.categories;
  const companies = meta.companies;
  const { search, category, company, order, price, shipping } = params;
  console.log(params);
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        label="search product"
        name="search"
        type="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        label="category"
        name="category"
        size="select-sm"
        list={categories}
        defaultValue={category}
      />
      {/* COMPANIES */}
      <FormSelect
        label="company"
        name="company"
        size="select-sm"
        list={companies}
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        size="select-sm"
        list={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />
      {/* PRICE */}
      <FormRange 
        label="price" 
        name="price" 
        size="range-sm"
        price={price}
      />
      {/* SHIPPING */}
      <FormCheckbox 
        label="free shipping" 
        name="shipping" 
        size="checkbox-sm"
        defaultValue={shipping} 
      />
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to="/products" className="btn btn-secondary btn-sm">
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
