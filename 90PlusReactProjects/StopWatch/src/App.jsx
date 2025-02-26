import { useState, useEffect } from "react";
function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } 

    return () => clearInterval(interval); 
  })
  

  useEffect(() => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;
    
    document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
    document.getElementById("milliseconds").textContent = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
  }, [time])

  const handleStart = () => {
    setIsRunning(true);
  }

  return (
    <>
      <main className="h-screen w-full flex justify-center items-center">
          <div className="w-96 shadow-lg p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-center my-4">StopWatch</h2>
              <div className="flex justify-between items-center">
                  <span className="text-4xl font-bold" id="minutes">00</span>:
                  <span className="text-4xl font-bold" id="seconds">00</span>:
                  <span className="text-4xl font-bold" id="milliseconds">00</span>
              </div>
              <div className="flex justify-center gap-x-4 mt-4">
                  <button onClick={handleStart} className="cursor-pointer px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition" id="start">Start</button>
                  <button  className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition" id="stop">Stop</button>
                  <button  className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" id="reset">Reset</button>
              </div>
          </div>
      </main>
    </>
  )
}

export default App
