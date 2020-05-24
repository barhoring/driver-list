import React from "react";

const Header = ({ setDrivers }) => {
  return (
    <div className="container-fluid search">
      <div className="row mb-3 mt-3">
        <h2 className="col-sm-8">Contact List</h2>
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="Driver Name"
            aria-label="Driver Name"
            onChange={(event) => {
              setDrivers(event.target.value);
              console.log(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
