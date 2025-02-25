import {useEffect, useState} from "react";
import coinSides, {dalasiSides} from "./data/data";
import {motion, AnimatePresence} from "framer-motion"

function App() {
  
  const [coin, setCoin] = useState("");
  const [side, setSide] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false)
  const [headCount, setHeadCount] = useState(0)
  const [tailCount, setTailCount] = useState(0)
  
  useEffect(() => {
    // setCoin(coinSides)
    setCoin(dalasiSides)
  }, [])

  // console.log(coin[0]?.imgSrc);
  
  const handleSideCount = (currentSide) => {
    if (currentSide === "head") {
      setHeadCount((prev) => prev += 1)
    } else if (currentSide === "tail") {
      setTailCount((prev) => prev += 1)
    }
  }

  const handleFlipCoin = () => {
    setIsFlipping(true)
    const currentSideIndex = Math.floor(Math.random() * coinSides.length)
    setTimeout(() => {
      setSide(currentSideIndex)
      setIsFlipping(false)
    }, 2000)

    setTimeout(() => {
      handleSideCount(coinSides[currentSideIndex].side)
    }, 3000)
  }

  const handleReset = () => {
    setSide(0)
    setHeadCount(0)
    setTailCount(0)
  }

  return (
    <>
      <main className="grid place-items-center min-h-screen w-full">
        <div className="shadow-lg p-4 border rounded-lg border-gray-200 min-w-96">
          <h1 className="text-3xl font-bold text-center my-4">Flip Coin</h1>
          {/* Coin */}
          <div className="flex justify-center">
            <AnimatePresence>
              <motion.img 
                key={side}
                className="w-48"
                src={coin[side]?.imgSrc}
                alt="coin"
                initial={{ rotateY: 0}}
                animate={{ rotateY: isFlipping ? 360 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </AnimatePresence>
              {/* <img className="w-full" src={`${coin[side]?.imgSrc}`} alt="" /> */}
          </div>
          <div className="grid my-4 grid-cols-2 gap-2">
              <div className="shadow-md p-2 border-gray-200 bg-gray-200 border-md">
                  <h3 className="text-lg font-bold">Heads: {headCount}</h3>
              </div>
              <div className="shadow-md p-2 border-gray-200 bg-gray-200 border-md">
                  <h3 className="text-lg font-bold">Tails: {tailCount}</h3>
              </div>
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <button disabled={isFlipping} onClick={handleReset} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition cursor-pointer">Reset</button>
            <button disabled={isFlipping} onClick={handleFlipCoin} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition cursor-pointer">{isFlipping ? "Flipping" : "Flip Coins"}</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
