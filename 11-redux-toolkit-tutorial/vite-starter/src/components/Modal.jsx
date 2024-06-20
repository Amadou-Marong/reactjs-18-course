
const Modal = () => {
  return (
    <aside className="modal-container">
        <div className="modal">
        <h4>Confirm Clear Cart</h4>
        <p>Are you sure you want to clear your cart?</p>
            <div className="btn-container">
                <button className="btn confirm-btn">confirm</button>
                <button className="btn clear-btn">cancel</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal