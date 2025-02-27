const ConfirmDeleteModal = ({isOpen, onClose, data, onDelete}) => {
    if(!isOpen) return null

    const handleDelete = () => {
        onDelete(data?.id)
        onClose()
    }
  return (
    <div className="modal-overlay">
      <div className="card min-w-96">
        <h2 className="subtitle text-center">Are you sure?</h2>
        <p className="text-center font-semibold">This action cannot be undone</p>
        <div className="flex justify-between gap-2 mt-4">
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDeleteModal