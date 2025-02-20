import { useState } from "react";
import validator from "validator";

function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordErrors, setPasswordErrors] = useState([]);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validatePassword = (value) => {
    const errors = [];
    if (!validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })) {
      if (value.length < 8) errors.push("Password must be at least 8 characters long");
      if (!/[a-z]/.test(value)) errors.push("Password must contain at least one lowercase letter");
      if (!/[A-Z]/.test(value)) errors.push("Password must contain at least one uppercase letter");
      if (!/[0-9]/.test(value)) errors.push("Password must contain at least one number");
      if (!/[^A-Za-z0-9]/.test(value)) errors.push("Password must contain at least one symbol");
    }
    setPasswordErrors(errors);
  };

  const validateConfirmPassword = (value) => {
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validateConfirmPassword(value);
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-screen w-full">
      <div className="bg-white shadow-md rounded-md max-w-96 p-4 w-full">
        <h2 className="text-lg font-bold uppercase text-center text-gray-400 my-2">Password Validator</h2>
        <div className="space-y-4">
          <label htmlFor="password" className="text-gray-600 font-semibold text-md block my-2">Password</label>
          <input
            onChange={handlePasswordChange}
            type="password"
            value={password}
            name="password"
            id="password"
            placeholder="*************"
            className="placeholder-gray-400 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-600"
          />
          {passwordErrors.length > 0 && (
            <div className="text-red-600">
              {passwordErrors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
        </div>
        <div className="space-y-4">
          <label htmlFor="confirm-password" className="text-gray-600 font-semibold text-md block my-2">Confirm Password</label>
          <input
            onChange={handleConfirmPasswordChange}
            type="password"
            name="confirm-password"
            value={confirmPassword}
            id="confirm-password"
            placeholder="*************"
            className="placeholder-gray-400 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-600"
          />
          {confirmPasswordError && (
            <p className="text-red-600">{confirmPasswordError}</p>
          )}
        </div>
        <div className="space-y-4">
          <button
            type="submit"
            className="btn btn-primary btn-block bg-blue-600 my-2 text-white text-md font-semibold cursor-pointer p-2 rounded-md"
            disabled={passwordErrors.length > 0 || confirmPasswordError}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
