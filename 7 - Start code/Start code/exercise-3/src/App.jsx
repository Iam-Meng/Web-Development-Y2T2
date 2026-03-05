import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the input values and other needs */
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [result, setResult] = useState("");
  const [isWarning, setIsWarning] = useState(false);

  /* You will need some function to handle the key pressed and button events */
  const onA = (event) => {
    setNumA(event.target.value);
  };

  const onB = (event) => {
    setNumB(event.target.value);
  };

  const isNumber = (str) => {
    return !isNaN(str) && str.trim() !== "";
  };

  const onCompute = () => {
    if (isNumber(numA) && isNumber(numB)) {
      const sum = parseFloat(numA) + parseFloat(numB);
      setResult(sum);
    } else {
      setResult("Please enter valid numbers");
      setIsWarning(true);
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onChange={numA} onKeyUp={onA} />

      <label>B =</label>
      <input onChange={numB} onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute button is clicked, this input displays the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} style={{ color: isWarning ? "red" : "black" }} />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
