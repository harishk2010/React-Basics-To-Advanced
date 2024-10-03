import React, { createContext } from "react";
import CompA from "./CompA";

export const userContext = createContext();

const Context = () => {
  return (
    <div>
      <userContext.Provider value={"harish"}>
        <CompA />
      </userContext.Provider>
    </div>
  );
};

export default Context;
