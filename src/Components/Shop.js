
import { FillInfoContext } from "./Context";
import React, { useContext } from "react";

const Shop = () => {
  const { fillInfo } = useContext(FillInfoContext);

  return (
    <div>
      <p className="heading">User Information :</p>
      <div className="individual">
        
        {fillInfo.map((item) => (
          <div className="overall">
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
            <h3>{item.suggestions}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shop;
