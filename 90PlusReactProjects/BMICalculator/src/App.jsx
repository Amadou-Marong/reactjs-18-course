import { useEffect } from "react";
import { useState } from "react";
import GaugeChart from "./components/GaugeChart";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const heightInM = height / 100;
    const bmi = parseFloat(weight / (heightInM * heightInM)).toFixed(2);
    setBmi(bmi);
  };

  useEffect(() => {
    if (bmi < 18.5) {
      setStatus("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setStatus("Normal");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  }, [bmi]);

  useEffect(() => {
    setBmi("");
    setStatus(""); 
  }, [weight, height]);

  return (
    <>
      <main>
        <div className="container center">
          <div className="grid md:grid-cols-2 gap-4">
            <form onSubmit={handleSubmit} className="mt-4 form">
              <h1 className="title text-white text-center">BMI Calculator</h1>
              <div className="my-4">
                <label className="text-white block">Weight(kg)</label>
                <input value={weight} onChange={(e) => setWeight(e.target.value)} type="number" className="w-full" required/>
              </div>
              <div className="my-4">
                <label className="text-white block">Height(cm)</label>
                <input value={height} onChange={(e) => setHeight(e.target.value)} type="number" className="w-full" required/>
              </div>
              <button type="submit" className="btn btn-primary">
                Calculate
              </button>
            </form>

            <div className="box mt-4">
              <h3 className="title text-white text-center">Result</h3>
              <p className="text-white">BMI: {bmi}</p>
              <p className="text-white">Status: {status}</p>
              <GaugeChart value={bmi} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
