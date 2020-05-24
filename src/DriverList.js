import React from "react";
// import Driver from "./Driver";
import DriverCard from "./DriverCard";

const DriverList = ({ drivers }) => {
  debugger;
  return (
    <div className="flex-container">
      {drivers.map((d) => (
        <>
          {/* <Driver {...d} /> */}
          <DriverCard {...d} />
        </>
      ))}
    </div>
  );
};

export default DriverList;
