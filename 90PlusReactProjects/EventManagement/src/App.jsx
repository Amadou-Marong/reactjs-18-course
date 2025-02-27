import { useEffect, useState } from "react"
import { eventsData } from "./data/data";
import UpdateEventModal from "./components/UpdateEventModal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import { toast } from "react-toastify";

function App() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("")
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const handleAddEvent = () => {
    try {
      const newEvent = {
        id: new Date().getTime(),
        title,
        date,
        description: "New event description",
        location,
      }
      if (!title || !date || !description || !location) {
        alert("All fields are required");
        return;
      }
      setEvents([...events, newEvent]);
      setTitle("");
      setDate("");
      setLocation("");
      setDescription("");
      toast.success("Event added successfully");
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleUpdateEvent = (eventId, updatedEvent) => {
    try {
      const updatedEvents = events.map(event => event.id === eventId ? updatedEvent : event);
      setEvents(updatedEvents);
      toast.success("Event updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  }


  const handleDeleteEvent = (eventId) => {
    try {
      const updatedEvents = events.filter(event => event.id !== eventId);
      setEvents(updatedEvents);
      toast.success("Event deleted successfully");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <main>
        <div className="container">
          <h1 className="title mt-20">Event Management</h1>
          <h3 className="subtitle text-center text-blue-600">My Events</h3>
          <div className="flex justify-end">
            <button onClick={handleAddEvent} className="btn btn-primary">Create Event</button>
          </div>
          <div className="mt-4 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Event Title"
              className="input input-bordered w-full max-w-xs"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="date"
              placeholder="Event Date"
              className="input input-bordered w-full max-w-xs"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Event Description"
              className="input input-bordered w-full max-w-xs"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Event Location"
              className="input input-bordered w-full max-w-xs"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            {/* <button  className="btn btn-primary">Add Event</button> */}
          </div>
          <div className="my-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => (
              <div key={event.id} className="card cursor-pointer">
                <div className="flex flex-col gap-y-2">
                  <h2 className="card-title"> <span className="font-bold">Title:</span> {event.title}</h2>
                  <p><span className="font-bold">Date:</span> {event.date}</p>
                  <p><span className="font-bold">Discription:</span> {event.description}</p>
                  <p><span className="font-bold">Location:</span> {event.location}</p>
                  <div className="flex gap-x-2">
                    <button className="btn btn-danger" onClick={() => {setIsDeleteModalOpen(true); setSelectedEvent(event) }}>Delete</button>
                    <button className="btn btn-primary" onClick={() => {setIsUpdateModalOpen(true); setSelectedEvent(event) }}>Edit</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <UpdateEventModal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} data={selectedEvent} onUpdate={handleUpdateEvent}/>
          <ConfirmDeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} data={selectedEvent} onDelete={handleDeleteEvent}/>
        </div>
      </main>
    </>
  )
}

export default App
