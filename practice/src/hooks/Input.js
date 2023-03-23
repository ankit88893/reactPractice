import React, { useState} from "react";


const Input = () => {

  const [name, setName] = useState({ firstName: " ", lastName: " " });
  
  return (
    <div>
      <h5>Input Example</h5>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />

        <h3>first name is :- {name.firstName}</h3>
        <h3>last name is :- {name.lastName}</h3>
      </form>
    </div>
  );


  

}

export default Input;