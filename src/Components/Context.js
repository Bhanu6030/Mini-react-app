
import React, { createContext, useState } from 'react';

const FillInfoContext = createContext();

const FillInfoProvider = ({ children }) => {
  const [fillInfo, setFillInfo] = useState([]);

  return (
    <FillInfoContext.Provider value={{ fillInfo, setFillInfo }}>
      {children}
    </FillInfoContext.Provider>
  );
};

export { FillInfoContext, FillInfoProvider };