
const FormSelect = ({name, label, defaultValue, size, list}) => {
  return (
    <div>
        <label htmlFor={name} className="label">
            <span className="label-text capitalize">{label}</span>
        </label>
        <select name={name} id={name} defaultValue={defaultValue} className={`select select-bordered ${size}`}>
            {list.map((item) => {
                return <option key={item} value={item}>{item}</option>
            })}
        </select>
    </div>
  )
}

export default FormSelect