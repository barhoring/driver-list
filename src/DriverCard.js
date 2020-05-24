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
        padding: "5px",
        margin: "10px",
        height: "100%",
      }}
    >
      <div
        class="card"
        style={{
          backgroundImage: `url(${profile_image})`,
        }}
      >
        <div class="footer" style={{}}>
          <div class="info">
            <div>{name}</div>
            <div>Driver rank: {driverRank}</div>
            <div>Phone: {phone}</div>
            <div>Email: {email}</div>
          </div>
        </div>
        <div class="card-blur"></div>
      </div>
    </div>
  );
};

export default DriverCard;
