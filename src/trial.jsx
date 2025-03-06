import React, { useState, useEffect, createContext } from 'react';
import Even from "./even.jsx";

export const myContext  = createContext(0);

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  useEffect(() => {
    setIsEven(count % 2 === 0);
  }, [count]);  

  return (
    <myContext.Provider value={count}>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        {isEven && <Even/>}
      </div>
    </myContext.Provider>
  );
}

export default MyComponent;

