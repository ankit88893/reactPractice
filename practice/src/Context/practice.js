import React, { useState , useEffect } from "react";

const Practice = () => {
  const [name, setName] = useState("micky");
  useEffect(() => {
    console.log("line 1");
  });
  useEffect(() => {
    console.log("line 2");
  }, []);
  useEffect(() => {
    console.log("line 3");
  }, [name]);

  const setNameStage = () => {
    console.log("line 4");
    setName("jill");
  };

  return (
    <div>
      <h1>this is the state {name}</h1>
      <button onClick={setNameStage}> change name</button>
    </div>
  );
};

export default Practice;
