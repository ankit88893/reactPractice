import React, { useState } from "react";



const Counter = () => {

  let initialCount = 0;
  
  const [count, setCount] = useState(initialCount);

  function incrementByFive() {
    
    for (let i = 0; i < 5; i++){
      setCount(prevCount => prevCount + 1);
    }
  }
  
  return (
    <div>
      <h3>State Example Hooks</h3>
      <h5> COUNTER :- {count}</h5>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        decrement
      </button>

      <button onClick={incrementByFive}>
        IncrementFive
      </button>

      <button onClick={(e) => setCount(initialCount)}>reset</button>
    </div>
  );
}

export default Counter;
