import React, { useState,useEffect} from "react";

const Effect = () => {

    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(1000);

    useEffect(() => {
        let timeout;
        if (count < 10) {

            timeout = setTimeout(() => {
                setCount((prevCount) => prevCount + 1);
           
            }, delay);
        }

        return () => clearTimeout(timeout);

        
    },[count,delay])
    

    return (
      <div>
        <h4>UseEffect Example</h4>
        <input
          type="number"
          placeholder="enter the time"
          onChange={(e) => setDelay(e.target.value * 1000)}
        />
        <p>auto increment (seconds) {count} </p>

        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    );
    
}

export default Effect;
