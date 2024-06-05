import { Form } from "react-router-dom";

export const action = async ({request}) => {
  console.log(request);
  return null;
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
          defaultValue="imam"
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
          defaultValue="ahmad"
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
