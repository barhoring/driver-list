import React, { useReducer, useEffect, useState } from "react";
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
  console.log(action);
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
        drivers: action.payload.response,
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
    const newD = state.result.filter((d) => {
      return d.name.toLowerCase().includes(prefixName);
    });
    debugger;
    dispatch({ type: actionTypes.SEARCH, payload: { response: newD } });
  };

  return [state.loading, state.error, state.result, state.drivers, search];
};

const App = () => {
  const [loading, error, response, drivers, setDrivers] = useFetch(endpoint);
  let driversR = drivers || [];

  console.log("drivers:", drivers);

  return (
    <div>
      <Header setDrivers={setDrivers} />
      <main>
        {loading ? <p>Loading...</p> : <DriverList drivers={driversR} />}{" "}
      </main>
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

render(<App />, document.getElementById("root"));
