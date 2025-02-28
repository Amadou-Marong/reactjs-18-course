import { useState } from "react";
import { Gauge } from "recharts";

const BMICalculator = () => {
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(190);
  const [weight, setWeight] = useState(64);
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBMI(parseFloat(bmiValue));
  };

  const getBMICategory = () => {
    if (bmi === null) return "";
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi <= 24.9) return "Normal weight";
    if (bmi >= 25 && bmi <= 29.9) return "Overweight";
    return "Obesity";
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">BMI Calculator</h2>

      {/* Input Fields */}
      <div className="mt-4 space-y-3">
        <label className="block">
          Age:
          <input
            type="number"
            className="w-full mt-1 p-2 border rounded"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <label className="block">
          Gender:
          <div className="flex space-x-4 mt-1">
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />
              Female
            </label>
          </div>
        </label>

        <label className="block">
          Height (cm):
          <input
            type="number"
            className="w-full mt-1 p-2 border rounded"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>

        <label className="block">
          Weight (kg):
          <input
            type="number"
            className="w-full mt-1 p-2 border rounded"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>

        <button
          onClick={calculateBMI}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Calculate BMI
        </button>
      </div>

      {/* BMI Result */}
      {bmi !== null && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-bold">BMI: {bmi} kg/m²</h3>
          <p className="text-gray-700">{getBMICategory()}</p>

          {/* Gauge Chart */}
          {/* <Gauge dataKey="value" data={[{ value: bmi }]} /> */}
          <GaugeChart value={bmi} />
        </div>
      )}
    </div>
  );
};

// Gauge Chart Component
// const GaugeChart = ({ value }) => {
//   const min = 10;
//   const max = 40;
//   const range = max - min;
//   const percentage = ((value - min) / range) * 100;

//   return (
//     <div className="relative w-full h-24 mt-4">
//       <div className="w-full h-24 bg-gray-200 rounded-full relative overflow-hidden">
//         <div
//           className="absolute left-1/2 bottom-0 w-2 h-16 bg-red-500 transform origin-bottom"
//           style={{ transform: `rotate(${percentage * 1.8 - 90}deg)` }}
//         />
//       </div>
//       <div className="flex justify-between mt-2 text-sm">
//         <span>Underweight</span>
//         <span>Normal</span>
//         <span>Overweight</span>
//         <span>Obesity</span>
//       </div>
//     </div>
//   );
// };

export default BMICalculator;
