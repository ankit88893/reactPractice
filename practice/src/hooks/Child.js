import React, {memo } from "react";

const Child =() => {
    console.log("render child");


    return (
        <div>
            <h1>child</h1>
        </div>
        
    )
}

export default React.memo(Child);