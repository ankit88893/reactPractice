import { useState } from "react";


 function ValidationForm() {
  const err_msg = "age is invalid";

  const [name, setName] = useState("");
  const [Error, setError] = useState(false);

   const handler = (e) => {
    setError(false)
    setName( e.target.value);
    if (e.target.value < 18) {
      setError(true);
    }
  };

  return (
    <div>
      <form>
        <input type="text " value={name} onChange={handler} />
        {Error ? err_msg : null}
      </form>
    </div>
  );
}

export default ValidationForm


//correct this