import React, { useState } from "react";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiValue, setBmiValue] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [error, setError] = useState("");

  const bmiEvent = () => {
    const isHeight = /^\d+$/.test(height);
    const isWeigth = /^\d+$/.test(weight);
    if (isHeight && isWeigth) {
      const heightMet = height / 100;
      const bmi = weight / (heightMet * heightMet);
      setBmiValue(bmi.toFixed(2));
      console.log(bmi);
      if (bmi < 18.5) {
        setBmiStatus("UnderWeight");
      } else if (bmi > 18.5 && bmi < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmi > 25 && bmi < 29.9) {
        setBmiStatus("OverWeight");
      } else {
        setBmiStatus("Obese");
      }
      setError("");
    } else {
      setBmiValue(null);
      setBmiStatus("");
      setError("Please enter a numeric values for height and weight");
    }
  };

  const clearAll = () => {
    setHeight("");
    setWeight("");
    setBmiValue(null);
    setBmiStatus("");
  };
  return (
    <>
      <div className='w-[800px] h-[500px] bg-white rounded-lg p-[20px] flex'>
        <div className='w-[350px]'>
          <img
            className='mt-20'
            src='https://www.canarahsbclife.com/content/dam/choice/tools-and-calc/images/body-mass-index.png'
            alt=''
          />
        </div>
        <div className='flex-1 p-[15px]'>
          <h1 className='font-bold mb-[20px] text-[#2980b9] uppercase text-[20px]'>
            BMI Calculator
          </h1>
          {error && <h1 className='mb-[15px] text-red-600'>{error}</h1>}
          <div>
            <label className='block' htmlFor='height'>
              Height(cm):
            </label>
            <input
              className='bg-black mb-[15px] text-white '
              type='text'
              id=''
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>

          <div>
            <label className='block' htmlFor='height'>
              Weight(cm):
            </label>
            <input
              className='bg-black mb-[20px] text-white '
              type='text'
              id=''
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>

          <button
            className='bg-blue-500 px-3 py-1 rounded-lg mb-[20px]'
            onClick={bmiEvent}
          >
            Calculate Bmi
          </button>
          <button
            className='bg-red-500 ml-[10px] px-3 py-1 rounded-lg mb-[20px]'
            onClick={clearAll}
          >
            Reset
          </button>

          {bmiValue !== null && (
            <div className='border-4 border-black p-[10px]'>
              <p className='text-yellow-600 font-bold'>
                Your Bmi is: {bmiValue}
              </p>
              <p className='text-yellow-600 font-bold'>Status: {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BMI;
