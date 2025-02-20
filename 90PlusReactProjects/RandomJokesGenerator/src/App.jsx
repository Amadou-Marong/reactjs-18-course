import MyButton from "./components/MyButton"

function App() {

  const handleClick = () => {
    console.log('clicked the button');
  }

  return (
    <>
      <div className="w-full min-h-screen bg-gray-200 flex justify-center items-center">
          <div className="p-4 bg-white shadow-md rounded-md">
            <h1 className="text-center text-blue-600 my-2 text-2xl font-bold border-b-2">Random Jokes Generator</h1>
            <MyButton label="Generate Jokes" onClick={handleClick} />
          </div>
      </div>
    </>
  )
}

export default App
