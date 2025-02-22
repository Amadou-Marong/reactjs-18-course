import {useState} from "react"
function App() {

  const choices = [
    "rock",
    "paper",
    "scissor"
  ]

  const [computerChoice, setComputerChoice] = useState("")
  const [useChoice, setUserChoice] = useState("")
  
  

  return (
    <>
      <main className="flex bg-gray-200 w-full min-h-screen items-center justify-center">
          <article className="bg-white shadow-lg border-slate-200 rounded-md p-4 min-w-96">
              <h3 className="text-gray-600 font-bold text-lg capitalize text-center">Rock Paper Scissor Game</h3>
              <div className="h-40 w-full border my-6 p-4">
                <p className="text-gray-500 font-bold">Player Choice: {useChoice}</p>
                <p className="text-gray-500 font-bold">Computer Choice: {computerChoice}</p>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <button onClick={() => {
                    setUserChoice(choices[0]);
                    setComputerChoice(choices[Math.floor(Math.random() * choices.length)])
                  }
                } className="bg-gray-500 text-white py-2 px-4 rounded-md cursor-pointer">Rock</button>
                <button onClick={() => {
                    setUserChoice(choices[1])
                    setComputerChoice(choices[Math.floor(Math.random() * choices.length)])
                  }
                } className="bg-gray-500 text-white py-2 px-4 rounded-md cursor-pointer">Paper</button>
                <button onClick={() => {
                    setUserChoice(choices[2])
                    setComputerChoice(choices[Math.floor(Math.random() * choices.length)])
                  }
                } className="bg-gray-500 text-white py-2 px-4 rounded-md cursor-pointer">Scissor</button>
              </div>
          </article>
      </main>
    </>
  )
}

export default App
