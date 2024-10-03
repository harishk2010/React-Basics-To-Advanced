import React, { createContext, useState } from "react";
import DisplayCounter from "./DisplayCounter.";

export const counterCountext = createContext();


const Simple = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  
  return (
    <div>
      <counterCountext.Provider value={{increment,decrement,count}}>
        <DisplayCounter />
      </counterCountext.Provider>
    </div>
  );
};

export default Simple;
