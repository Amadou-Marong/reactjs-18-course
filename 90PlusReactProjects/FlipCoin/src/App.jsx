import {useEffect, useState} from "react";
import coinSides from "./data/data";
import {motion, AnimatePresence} from "framer-motion"

function App() {
  
  const [coin, setCoin] = useState("");
  const [side, setSide] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false)
  const [headCount, setHeadCount] = useState(0)
  const [tailCount, setTailCount] = useState(0)
  
  useEffect(() => {
    setCoin(coinSides)
  }, [])

  // console.log(coin[0]?.imgSrc);
  
  const handleFlipCoin = () => {
    setIsFlipping(true)
    const currentSide = Math.floor(Math.random() * coinSides.length)
    setTimeout(() => {
      setSide(currentSide)
      setIsFlipping(false)
    }, 1000)
    // handleSideCount(side)
  }

  // const handleSideCount = (currentSide) => {
  //   if (currentSide === "head") {
  //     setHeadCount((prev) => prev += 1)
  //   } else if (currentSide === "tail") {
  //     setTailCount((prev) => prev += 1)
  //   }
  // }

  // console.log("Heads", headCount);
  // console.log("Tails", tailCount);
  

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
            <button disabled={isFlipping} onClick={handleFlipCoin} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition cursor-pointer">{isFlipping ? "Flipping" : "Flip Coins"}</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
