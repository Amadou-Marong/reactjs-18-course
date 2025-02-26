import { HiSwitchHorizontal } from "react-icons/hi"

function App() {

  return (
    <>
      <main>
        <div className="container">
          <div className="center">
            <div className="card mt-6">
              <h1 className="title">Currency Converter</h1>
              <div className="flex mt-4 gap-x-4">
                <input className="text-input w-full" placeholder="Enter Amount" type="text" name="" id="" />
                <button className="primary-btn">Convert</button>
              </div>
              <div className="flex mt-4 gap-x-4 justify-between items-center">
                {/* dropdown from*/}

                <div className="dropdown">
                  <label htmlFor="from" className="block font-semibold mb-2">From</label>
                  <select className="dropdown-select">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>

                {/* Swap Icon */}
                <div className="swap-icon">
                   <HiSwitchHorizontal size="30px"/>
                </div>

                {/* dropdown */}
                <div className="dropdown">
                  <label htmlFor="to" className="block font-semibold mb-2">To</label>
                  <select className="dropdown-select">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
