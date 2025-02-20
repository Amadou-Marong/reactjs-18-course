function App() {

  

  return (
    <>
      <div className="flex items-center justify-center bg-gray-200 min-h-screen w-full">
        <div className="bg-white shadow-md rounded-md max-w-96 p-4 w-full">
          <h2 className="text-lg font-bold uppercase text-center text-gray-400 my-2">Password Validator</h2>
          <div className="space-y-4">
            <label htmlFor="password" className="text-gray-600 font-semibold text-md block my-2">Password</label>
            <input type="password" name="password" id="password" placeholder="*************" className="placeholder-gray-400 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-600"/>
          </div>
          <div className="space-y-4">
            <label htmlFor="confirm-password" className="text-gray-600 font-semibold text-md block my-2">Confirm Password</label>
            <input type="password" name="confirm-password" id="confirm-password" placeholder="*************" className="placeholder-gray-400 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-600"/>
          </div>
          <div className="space-y-4">
            <button type="submit" className="btn btn-primary btn-block bg-blue-600 my-2 text-white text-md font-semibold cursor-pointer p-2 rounded-md">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
