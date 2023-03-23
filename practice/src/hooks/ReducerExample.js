import React, { useReducer } from "react";



const reducer = (state, { type }) => {
  switch (type) {
    case "increment":
      return { count: state.count + 1 };

      case "decrement":
          return { count: state.count - 1 };
      default:
          return { count: 0 };
  }
};

const ReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, { count : 0 });


    return (
      <div>
        <h5>Reducer Example</h5>
        <p>Counter : {state.count}</p>

        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>

        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>

        <button onClick={() => dispatch({ type: null })}>
          reset
        </button>
      </div>
    );
}


  



export default ReducerExample;