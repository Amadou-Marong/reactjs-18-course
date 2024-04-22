import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const increment = () => {
    setTimeout(() => {
      console.log('you clicked the button');
      setValue((currentState) => {
        return currentState + 1;
      })
    }, 3000)
    
    // console.log(value);
  }
  return (
    <div>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={increment}>Increase</button>
    </div>
  )
};

export default UseStateGotcha;
