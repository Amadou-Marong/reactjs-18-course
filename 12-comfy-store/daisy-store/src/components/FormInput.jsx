const FormInput = ({}) => {
  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text">What is your name?</span>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered"
      />
    </div>
  );
};

export default FormInput;
