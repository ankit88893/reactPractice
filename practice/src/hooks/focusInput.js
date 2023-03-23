import React, { useRef, useEffect } from "react";

const FocusInput = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  
  }, []);

  return (
    <div>
      <input ref={ref}></input>
      
    </div>
  );
};

export default FocusInput;

