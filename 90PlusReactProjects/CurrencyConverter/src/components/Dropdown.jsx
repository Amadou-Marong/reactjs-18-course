const Dropdown = ({value, options, onChange}) => {
  return (
    <select value={value} onChange={onChange} className="dropdown-select">
        {options.map((option) => (
            <option key={option} value={option}>{option}</option> 
        ))}
    </select>
  )
}

export default Dropdown