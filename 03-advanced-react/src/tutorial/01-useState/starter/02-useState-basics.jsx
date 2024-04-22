import { useState } from "react";
const UseStateBasics = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <>
      <h2>useState basics</h2>
      <h2>You Clicked {counter} times</h2>
      <button onClick={increase} className="btn">Click Me</button>
    </>
  ) 
};

export default UseStateBasics;
