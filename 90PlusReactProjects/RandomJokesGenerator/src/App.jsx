import { useState } from "react";
import JokesDisplay from "./components/JokesDisplay";
import MyButton from "./components/MyButton"
import axios from "axios";

function App() {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const url = "https://icanhazdadjoke.com/"; 
  const url = "https://sv443.net/jokeapi/v2/joke/Programming?type=single"; 

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url)
      setJoke(response.data.joke);
      console.log(response.data.error);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="w-full min-h-screen bg-gray-200 flex justify-center items-center">
          <div className="p-4 bg-white shadow-md rounded-md max-w-96">
            <h1 className="text-center text-blue-600 my-2 text-2xl font-bold border-b-2">Random Jokes Generator</h1>
            <MyButton label="Generate Jokes" onClick={handleClick} isLoading={loading}/>
            <div>
              <JokesDisplay jokeText={joke} isLoading={loading} error={error}/>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
