import {useState} from "react"
import { Mountain, FileText, Scissors } from 'lucide-react';
function App() {

  const [computerChoice, setComputerChoice] = useState("")
  const [playerChoice, setPlayerChoice] = useState("")
  const [computerScore, setComputerScore] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)
  
  const handleScore = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) return
    if(playerChoice === "rock" && computerChoice === "scissor" || 
      playerChoice === "paper" && computerChoice === "rock" ||
      playerChoice === "scissor" && computerChoice === "paper"
    ){
      setPlayerScore((prev) => prev + 1) // player wins
    } else {
      setComputerScore((prev) => prev + 1) // computer wins
    }
  }

  const choices = [
    {name: "rock", icon: Mountain},
    {name: "paper", icon: FileText},
    {name: "scissor", icon: Scissors}
  ]


  const handlePlayerChoice = (choice) => {
    const newComputerChoice = choices[Math.floor(Math.random() * choices.length)]
    setPlayerChoice(choice.name);
    setComputerChoice(newComputerChoice.name)
    handleScore(choice.name, newComputerChoice.name)
  }


  return (
    <>
      <main className="flex bg-gray-200 w-full min-h-screen items-center justify-center">
          <article className="bg-white shadow-lg border-slate-200 rounded-md p-4 min-w-96">
              <h3 className="text-gray-600 font-bold text-lg capitalize text-center">Rock Paper Scissor Game</h3>
              <div className="h-40 w-full border my-6 p-4">
                <p className="text-gray-500 font-bold">Player Choice: {playerChoice}</p>
                <p className="text-gray-500 font-bold">Computer Choice: {computerChoice}</p>
              </div>
              <div className="h-40 w-full my-6 flex gap-4">
                <p className="border w-full p-2 text-gray-500 font-bold text-lg bg-blue-200">Player Score: <span className="block text-center text-4xl text-slate-600">{playerScore}</span></p>
                <p className="border w-full p-2 text-gray-500 font-bold text-lg bg-blue-200">Computer Score: <span className="block text-center text-4xl text-slate-600">{computerScore}</span></p>
              </div>
              <div className="flex gap-2 items-center justify-center">
                {choices.map((choice) => (
                  <button key={choice.name} onClick={() => handlePlayerChoice(choice)} className="bg-gray-500 text-white py-2 px-4 rounded-md cursor-pointer"><choice.icon size={24} /> </button>
                ))}
              </div>
          </article>
      </main>
    </>
  )
}

export default App
