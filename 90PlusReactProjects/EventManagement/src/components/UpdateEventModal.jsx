import { useEffect, useState } from "react"

const UpdateEventModal = ({isOpen, onClose, data, onUpdate}) => {
  const [updatedData, setUpdatedData] = useState({
    title: "",
    date: "",
    description: "",
    location: ""
  })
  
  useEffect(() => {
    setUpdatedData({
      title: data?.title,
      date: data?.date,
      description: data?.description,
      location: data?.location
    })
  }, [data])
  
  const handleUpdate = () => {
    onUpdate(updatedData)
    onClose()
  }
  
  if(!isOpen) return null
    
  return (
    <div className="modal-overlay">
      <div className="card">
        <h2 className="subtitle text-center">Update Event</h2>
        <div className="mt-4 grid grid-cols-2 gap-4">
            <input
              value={updatedData.title}
              onChange={(e) => setUpdatedData({...updatedData, title: e.target.value})}
              type="text"
              placeholder="Event Title"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              value={updatedData.date}
              onChange={(e) => setUpdatedData({...updatedData, date: e.target.value})}
              type="date"
              placeholder="Event Date"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              value={updatedData.description}
              onChange={(e) => setUpdatedData({...updatedData, description: e.target.value})}
              type="text"
              placeholder="Event Description"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              value={updatedData.location}
              onChange={(e) => setUpdatedData({...updatedData, location: e.target.value})}
              type="text"
              placeholder="Event Location"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="flex justify-end gap-2">
              <button className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleUpdate}>
                Update Event
              </button>
            </div>
          </div>
      </div>
        
    </div>
  )
}

export default UpdateEventModal