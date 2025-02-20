const MyButton = ({label, onClick, isLoading}) => {
  return (
    <button className="p-2 bg-blue-500 text-white rounded-md cursor-pointer" onClick={onClick} disabled={isLoading}>{label}</button>
  )
}

export default MyButton