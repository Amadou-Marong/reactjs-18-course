import { HiSwitchHorizontal } from "react-icons/hi"
import { useState, useEffect } from "react"
import axios from "axios"
import Dropdown from "./components/Dropdown"
function App() {
  const [info, setInfo] = useState([])
  const [amount, setAmount] = useState(0)
  const [output, setOutput] = useState()
  const [from, setFrom] = useState("gmd")
  const [to, setTo] = useState("usd")
  const [currencies, setCurrencies] = useState([])

  // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json
  // https://latest.currency-api.pages.dev/v1/currencies.json

  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
  
  useEffect(() => {
    const getCurrency = async () => {
      const response = await axios.get(url)
      setInfo(response.data[from])
    }
    getCurrency()
  }, [url, from])

  useEffect(() => {
    setCurrencies(Object.keys(info))
  }, [info])
  

  const swapOptions = () => {
    let temp = from
    setFrom(to)
    setTo(temp)
  }

  const convert = () => {
    let rate = info[to]
    setOutput(amount * rate)
  }

  console.log(output);
  

  return (
    <>
      <main>
        <div className="container">
          <div className="center">
            <div className="card mt-6">
              <h1 className="title">Currency Converter</h1>
              <div className="flex mt-4 gap-x-4">
                <input value={amount} onChange={(e) => setAmount(e.target.value)} className="text-input w-full" placeholder="Enter Amount" type="number" min={0} name="amount" id="amount" />
                <button onClick={convert} className="primary-btn">Convert</button>
              </div>
              <div className="flex mt-4 gap-x-4 justify-between items-center">
                {/* dropdown from*/}

                <div className="dropdown">
                  <label htmlFor="from" className="block font-semibold mb-2">From</label>
                  {/* <select value={from} onChange={(e) => setFrom(e.target.value)} className="dropdown-select">
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>{currency}</option> 
                    ))}
                  </select> */}
                  <Dropdown value={from} options={currencies} onChange={(e) => setFrom(e.target.value)}/>
                </div>

                {/* Swap Icon */}
                <button onClick={swapOptions} className="swap-icon">
                   <HiSwitchHorizontal size="30px"/>
                </button>

                {/* dropdown */}
                <div className="dropdown">
                  <label htmlFor="to" className="block font-semibold mb-2">To</label>
                  {/* <select value={to} onChange={(e) => setTo(e.target.value)} className="dropdown-select">
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>{currency}</option> 
                    ))}
                  </select> */}
                  <Dropdown value={to} options={currencies} onChange={(e) => setTo(e.target.value)}/>
                </div>
              </div>

              {/* Output */}
              <div className="my-4">
                  <h2 className="font-bold">Converted Amount</h2>
                  {/* <p className="text-2xl font-semibold text-blue-500 p-2 bg-gray-200 rounded">1 Euro = 74.56 Dalasis</p> */}
                  <p className="text-2xl font-semibold text-blue-500 p-2 bg-gray-200 rounded">{`${amount} ${from} = ${output ? output.toFixed(2) : "0"} ${to}`}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
