import React, { useReducer, useEffect } from "react";
import { render } from "react-dom";

import Header from "./Header";
import DriverList from "./DriverList";
import actionTypes from "./actionTypes";
import endpoint from "./endpoint";
import "./style.css";

const initialState = {
  drivers: null,
  result: null,
  loading: true,
  error: null,
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return initialState;
    case actionTypes.RESPONSE_COMPLETE:
      return {
        loading: false,
        error: null,
        result: action.payload.response,
        drivers: action.payload.response,
      };
    case actionTypes.SEARCH:
      return {
        loading: false,
        error: null,
        result: state.result,
        drivers: action.payload.drivers,
      };
    default:
      console.log("Action type not known");
      return state;
  }
};

const useFetch = () => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  // Dependencies is [] to fetch drivers list only once
  useEffect(() => {
    dispatch({ type: actionTypes.LOADING });
    console.log("Fetching drivers...");
    fetch(endpoint)
      .then((res) => res.json())
      .then((response) => {
        dispatch({
          type: actionTypes.RESPONSE_COMPLETE,
          payload: { response },
        });
      })
      .catch((error) => dispatch({ type: actionTypes.ERROR }));
  }, []);

  const search = (prefixName) => {
    prefixName = prefixName.toLowerCase();
    const newDrivers = state.result.filter((driver) => {
      return driver.name.toLowerCase().includes(prefixName);
    });
    dispatch({ type: actionTypes.SEARCH, payload: { drivers: newDrivers } });
  };

  return [state.loading, state.error, state.result, state.drivers, search];
};

const App = () => {
  // eslint-disable-next-line
  const [loading, error, response, drivers, setDrivers] = useFetch(endpoint);
  let driverList = drivers || [];

  return (
    <div>
      <Header setDrivers={setDrivers} />
      <main>
        {loading ? <p>Loading...</p> : <DriverList drivers={driverList} />}{" "}
      </main>
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

render(<App />, document.getElementById("root"));
