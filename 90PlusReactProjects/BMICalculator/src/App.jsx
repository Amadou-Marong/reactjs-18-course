function App() {

  return (
    <>
      <main>
        <div className="container center">
          <form className="mt-4 form">
            <h1 className="title text-white text-center">BMI Calculator</h1>
            <div className="my-4">
              <label className="text-white block">Weight</label>
              <input type="text" className="w-full"/>
            </div>
            <div className="my-4">
              <label className="text-white block">Height</label>
              <input type="text" className="w-full"/>
            </div>
            <button type="submit" className="btn btn-primary">Calculate</button>
          </form>

          <div className="box mt-4">
            <h3 className="text-white text-center">Result</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
