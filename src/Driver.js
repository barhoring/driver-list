import React from "react";

const Driver = ({
  name,
  driverType,
  driverRank,
  phone,
  email,
  profile_image,
}) => {
  return (
    <span
      className="flex-item driver-card"
      style={{
        border: "1px solid blue",
        fontSize: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "17rem",
          width: "17rem",
          border: "1px solid pink",
        }}
      >
        <img
          alt={`driver ${name}`}
          src={profile_image}
          style={{ border: "2px solid purple " }}
        />
      </div>
      <div className="driver-details">
        <div>{name}</div>
        <div>DriverRank : {driverRank}</div>
      </div>
    </span>
  );
};

export default Driver;
