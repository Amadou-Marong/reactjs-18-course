import { useState } from "react";
const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({name: 'Ahmad'})
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <div>
      {user ? (<div>
        <h4>Hello There {user.name}</h4>
        <button className="btn" onClick={logout}>Logout</button>
      </div>) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>Log In</button>
        </div>
      )}
    </div>
  )
};

export default UserChallenge;
