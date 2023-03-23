import React, { useState} from "react";

const Toogle = () => {
    const [show, setShow] = useState(true);


    return (
        <div>
            <button onClick={() => setShow(!show)}>{show ? "close toogle" : "show toogle"}</button>
        
            {show && <div>Toogle </div>}
        </div>
    )
}

export default Toogle;
    

