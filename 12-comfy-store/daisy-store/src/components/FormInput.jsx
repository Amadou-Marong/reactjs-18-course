const FormInput = ({label, name, type, defaultValue}) => {
  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        placeholder={defaultValue}
        className="input input-bordered"
      />
    </div>
  );
};

export default FormInput;
