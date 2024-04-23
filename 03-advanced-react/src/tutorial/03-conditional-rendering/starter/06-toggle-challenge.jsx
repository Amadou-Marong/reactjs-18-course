import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)

  const toggleAlert = () => {
    if(showAlert) {
      setShowAlert(false)
      return
    }
    setShowAlert(true)
    // if(!showAlert) {
    //   setShowAlert(true)
    //   // return
    // }
    // setTimeout(() =>{
    //   setShowAlert(false)
    // }, 5000)
  }
  
  return (
    <div>
      {/* <button className="btn" onClick={toggleAlert}>Add</button> */}
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>Add</button>
      {showAlert && <Alert />}
    </div>
  )
};

const Alert = () => {
  return (
    <div className="alert alert-success">
      <h4>Record added Successfully ✔</h4>
    </div>
    
  )
}

export default ToggleChallenge;
