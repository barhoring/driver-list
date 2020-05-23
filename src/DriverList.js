import React from "react";
import Driver from "./Driver";

const DriverList = ({ drivers }) => {
  debugger;
  return (
    <div className="flex-container">
      {drivers.map((d) => (
        <Driver />
      ))}
    </div>
  );
};

export default DriverList;
