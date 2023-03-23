import React, { useState, useMemo } from "react";

function FactorialCalculator() {
  const [number, setNumber] = useState(0);

  const factorial = useMemo(() => {
    function calculateFactorial(num) {
      if (num === 0) {
        return 1;
      } else {
        return num * calculateFactorial(num - 1);
      }
    }
    return calculateFactorial(number);
  }, [number]);

  function handleNumberChange(event) {
    setNumber(event.target.value);
  }

  return (
    <div>
      <label htmlFor="number-input">Enter a number:</label>
      <input
        id="number-input"
        type="number"
        value={number}
        onChange={handleNumberChange}
      />
      <p>Factorial: {factorial}</p>
    </div>
  );
}

export default FactorialCalculator;