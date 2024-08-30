import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BMI from "./components/BMI/BMI";

const App = () => {
  return (
    <>
      <BMI />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
