
import React, { createContext, useReducer, useState } from 'react';
import ManageReducer from './ManageReducer';
import { searchItems } from '../Search';
const FillInfoContext = createContext();

const FillInfoProvider = ({ children }) => {
  const [fillInfo, setFillInfo] = useState([]);
  const [state,dispatch]=useReducer(ManageReducer,
    {
    Items:searchItems,
    Items2:searchItems,
    search:"",
    files:[],
    preview:[]
    }
    )
  return (
    <FillInfoContext.Provider value={{ state,dispatch,fillInfo, setFillInfo }}>
      {children}
    </FillInfoContext.Provider>
  );
};

export { FillInfoContext, FillInfoProvider };