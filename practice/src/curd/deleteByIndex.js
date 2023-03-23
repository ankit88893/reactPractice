import { useState } from "react";

function DeleteByIndex() {
  const [fruits, setFruits] = useState([
    "🍎 Apple",
    "🍊 Orange",
    "🍌 Banana",
    "🍇 Grapes",
  ]);
  const deleteByIndex = (index) => {
    setFruits((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };
  return (
    <div className="App">
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li key={fruit}>
              <span>{fruit}</span>
              <button onClick={() => deleteByIndex(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DeleteByIndex;
