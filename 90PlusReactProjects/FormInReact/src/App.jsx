function App() {

  return (
    <>
      <div className="w-full h-full flex items-center justify-center bg-gray-100 min-h-screen">
        <form action="" className="min-w-98 p-6 border-gray-300 rounded-lg bg-white shadow-lg">
            <h2 className="my-4 text-green-600 text-center font-bold text-lg">React Form</h2>
            <div className="my-2">
                <label htmlFor="firstName" className="block text-gray-500 text-sm font-bold">First Name*</label>
                <input type="text" name="firstName" id="firstName" placeholder="Enter First Name" className="p-1 text-sm rounded w-full border border-gray-300 capitalize placeholder-gray-400 outline-none"/>
            </div>
            <div className="my-2">
                <label htmlFor="lastName" className="block text-gray-500 text-sm font-bold">Last Name*</label>
                <input type="text" name="lastName" id="lastName" placeholder="Enter Last Name" className="p-1 text-sm rounded w-full border border-gray-300 capitalize placeholder-gray-400 outline-none"/>
            </div>
            <div className="my-2">
                <label htmlFor="email" className="block text-gray-500 text-sm font-bold">Email*</label>
                <input type="email" name="email" id="email" placeholder="Enter Email" className="p-1 text-sm rounded w-full border border-gray-300 capitalize outline-none placeholder-gray-400"/>
            </div>
            <div className="my-2">
                <label htmlFor="contact" className="block text-gray-500 text-sm font-bold">Contact*</label>
                <input type="text" name="contact" id="contact" placeholder="Enter Contact" className="p-1 text-sm rounded w-full border border-gray-300 capitalize outline-none placeholder-gray-400"/>
            </div>
            <div className="my-2">
                <label htmlFor="gender" className="block text-gray-500 text-sm font-bold">Gender*</label>
                <div className="flex items-center mx-4 gap-2">
                    <input type="radio" name="gender" id="male" value="male" className="p-2 cursor-pointer"/> <span className="p-1 text-sm">Male</span>
                    <input type="radio" name="gender" id="female" value="female" className="p-2 cursor-pointer"/> <span className="p-1 text-sm">Female</span>
                </div>
            </div>
            <div className="my-2">
                <label htmlFor="subjects" className="block text-gray-500 text-sm font-bold">Subjects</label>
                <div className="flex items-center mx-4 gap-2">
                    <input type="checkbox" name="english" id="english" value="english" className="p-2 cursor-pointer"/> <span className="p-1 text-sm">English</span>
                    <input type="checkbox" name="maths" id="maths" value="maths" className="p-2 cursor-pointer"/> <span className="p-1 text-sm">Maths</span>
                    <input type="checkbox" name="physics" id="pysics" value="physics" className="p-2 cursor-pointer"/> <span className="p-1 text-sm">Physics</span>
                </div>
            </div>
            <div className="my-2">
                <label htmlFor="resume" className="block text-gray-500 text-sm font-bold">Upload Resume*</label>
                <input type="file" name="resume" id="resume" placeholder="Upload Resume" className="p-1 text-sm rounded w-full border border-gray-300 capitalize outline-none placeholder-gray-400"/>
            </div>
            <div className="my-2">
                <label htmlFor="url" className="block text-gray-500 text-sm font-bold">Enter URL*</label>
                <input type="url" name="url" id="url" placeholder="Enter Url" className="p-1 text-sm rounded w-full border border-gray-300 capitalize outline-none placeholder-gray-400"/>
            </div>
        </form>
      </div>
    </>
  )
}

export default App
