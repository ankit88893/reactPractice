import { useState } from "react";

function Delete() {
  const [fruits, setFruits] = useState([
    "🍎 Apple",
    "🍊 Orange",
    "🍌 Banana",
    "🍇 Grapes",
  ]);
  const deleteByValue = (value) => {
    setFruits((oldValues) => {
      return oldValues.filter((fruit) => fruit !== value);
    });
  };
  return (
    <div className="App">
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit}>
              <span>{fruit}</span>
              <button onClick={() => deleteByValue(fruit)}>Delete</button>
              <button onClick={() => setFruits([])}>Delete All</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Delete;
