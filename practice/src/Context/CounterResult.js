import { useContext } from "react";
import { CountContext } from "../App";

 function CounterResult() {
  const { count } = useContext(CountContext);

  return <div>{count}</div>;
}

export default CounterResult