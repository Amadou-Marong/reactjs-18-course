const UpdateEventModal = ({isOpen, onClose, data, ...props}) => {
  if(!isOpen) return null
      
  return (
    <div className="event-modal">
      <div className="card">
      <h2 className="subtitle text-center">Update Event</h2>
        <div className="mt-4 grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Event Title"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="date"
              placeholder="Event Date"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Event Description"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Event Location"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="flex justify-end gap-2">
              <button className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-primary">
                Update Event
              </button>
            </div>
          </div>
      </div>
        
    </div>
  )
}

export default UpdateEventModal