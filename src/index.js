import React, { useReducer, useEffect } from "react";
import { render } from "react-dom";

import Header from "./Header";
import DriverList from "./DriverList";
import actionTypes from "./actionTypes";
import endpoint from "./endpoint";
import "./style.css";

const initialState = {
  result: null,
  loading: true,
  error: null,
};

const fetchReducer = (state, action) => {
  console.log(action);
  debugger;
  switch (action.type) {
    case actionTypes.LOADING:
      return initialState;
    case actionTypes.RESPONSE_COMPLETE:
      return { loading: false, error: null, result: action.payload.response };
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

  return [state.loading, state.error, state.result];
};

const App = () => {
  const [loading, error, response] = useFetch(endpoint);
  const drivers = response || [];

  return (
    <div>
      <Header />
      <main>
        {loading ? <p>Loading...</p> : <DriverList drivers={drivers} />}{" "}
      </main>
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

render(<App />, document.getElementById("root"));
