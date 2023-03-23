import React, { useRef } from "react";

const Ref = () => {
  const focusInput = useRef();

  const focus = () => {
    focusInput.current.focus();

    console.log(focusInput.current.value);
  };

  return (
    <div>
      <h6>UseRef Example with focus</h6>
      <input type="text" placeholder=" enter a text" ref={focusInput}></input>
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default Ref;
