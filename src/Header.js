import React from "react";

const Header = ({ setDrivers }) => {
  return (
    <div className="container-fluid search">
      <div className="row">
        <h2 className="col-sm-8 mb-3 mt-3">Contact List</h2>
        <div className="col-sm-4 mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Driver Name"
            aria-label="Driver Name"
            onChange={(event) => {
              setDrivers(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
