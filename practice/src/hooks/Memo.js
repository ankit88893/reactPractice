import React, { useMemo , useState } from "react";


const Memo = () => {

  const [countOne, setCountOne] = useState(0);
  
  const [countTwo, setCountTwo] = useState(0);


  const isEven = useMemo(() => {
    console.log("working ");
    let i = 0;
    while (i < 2000000000) i++
    return countOne % 2 === 0
    
  }, [countOne]);


  return (
    <div>
      <button onClick={() => setCountOne((prevCount) => prevCount + 1)}>
        counter One {countOne}
      </button>

      <span>{ isEven ?"even":"odd" }</span>
      <button onClick={() => setCountTwo((prevCount) => prevCount + 1)}>
        counter two {countTwo}
      </button>
    </div>
  );
}

export default Memo;


// without usememo both counters were slow now only one is slow and  the
// unwanted f() jo call hote hai bnaya kise k liye call koi ho rha here we 
// improve performance by  caching
