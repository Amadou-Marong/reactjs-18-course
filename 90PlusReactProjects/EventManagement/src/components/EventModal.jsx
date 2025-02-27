const EventModal = (props) => {
    if(!props.isOpen) return null
    console.log(props);
    
  return (
    <div className="event-modal">
        <h1>{props.title}</h1>
        <h4>{props.date}</h4>
        <p>{props.description}</p>
    </div>
  )
}

export default EventModal