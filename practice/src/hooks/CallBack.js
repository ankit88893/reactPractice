import React ,{useCallback, useState} from "react";
import Child from "./Child";

const CallBack = () => {

    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState([]);

    const fun = useCallback(() => {
        console.log("fun");
            
    },countTwo);





    return (
        <div> 
            <Child fun={fun} countTwo={ countTwo} />
        
            <button onClick={(e) => setCount((count) => count + 1)}>Increment :- {count }</button>
      </div>
    );
    
}

export default CallBack;

m8