import {useEffect, useState} from "react";
import coinSides from "./data/data";

function App() {
  
  const [coin, setCoin] = useState("");
  const [side, setSide] = useState("");
  const [headCount, setHeadCount] = useState(0)
  const [tailCount, setTailCount] = useState(0)
  
  useEffect(() => {
    setCoin(coinSides)
  }, [])

  console.log(coin[0]?.imgSrc);
  
  const handleFlipCoin = () => {
    const currentSide = Math.floor(Math.random() * coinSides.length)
    setSide(currentSide)
  }

  return (
    <>
      <main className="grid place-items-center min-h-screen w-full">
        <div className="shadow-lg p-4 border rounded-lg border-gray-200 min-w-96">
          <h1 className="text-3xl font-bold text-center my-4">Flip Coin</h1>
          {/* Coin */}
          <div className="flex justify-center">
              <img className="w-full" src={`${coin[side]?.imgSrc}`} alt="" />
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <button onClick={handleFlipCoin} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition cursor-pointer">Flip Coins</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
