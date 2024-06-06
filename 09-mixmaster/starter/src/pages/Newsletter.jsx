import { Form, redirect } from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-toastify'

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({request}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await axios.post(newsletterUrl, data)
    console.log(response);
    toast.success(response.data.msg)
    return redirect('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg)
    return error
  }
  
}

const Newsletter = () => {
  return (
    <Form className="form" method="POST">
      <h3 style={{ marginBottom: "2rem", textAlign: "center" }}>
        Our Newsletter
      </h3>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          first name
        </label>
        <input
          type="text"
          name="name"
          className="form-input"
          id="name"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          name="lastName"
          className="form-input"
          id="lastName"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          name="email"
          className="form-input"
          id="email"
          defaultValue="test@test.com"
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </Form>
  );
};

export default Newsletter;
