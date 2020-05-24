import React from "react";
import "./driverStyle.css";

const DriverCard = ({
  name,
  driverType,
  driverRank,
  phone,
  email,
  profile_image,
}) => {
  profile_image =
    profile_image ||
    "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "0.25rem",
        margin: "10px",
        height: "100%",
      }}
    >
      <div
        className="card"
        style={{
          backgroundImage: `url(${profile_image})`,
        }}
      >
        <div className="footer">
          <div className="info">
            <div className="driver-type">
              <div
                className={
                  "icon " +
                  (driverType.toLowerCase() === "professional"
                    ? "professional"
                    : "citizen")
                }
              ></div>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <div>{name}</div>
              <div>Driver rank: {driverRank}</div>
              <div>Phone: {phone}</div>
              <div>Email: {email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
