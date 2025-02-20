const MyButton = ({label, onClick}) => {
  return (
    <button className="p-2 bg-blue-500 text-white rounded-md" onClick={onClick}>{label}</button>
  )
}

export default MyButton