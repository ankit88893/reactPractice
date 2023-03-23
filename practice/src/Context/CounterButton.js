import { useContext } from "react";
import { CountContext } from "../App";

 function CounterButtons() {
  const { count, setCount , initialCount } = useContext(CountContext);

  const incHandler = () => {
    setCount(count + 1);
  };

  const decHandler = () => {
    setCount(count - 1);
     };
     

  return (
    <div>
      <button onClick={incHandler}>Increment</button>
          <button onClick={decHandler}>Decrement</button>
          <button onClick={()=> setCount(initialCount)} >reset</button>
    </div>
  );
}

export default CounterButtons;