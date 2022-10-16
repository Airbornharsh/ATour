import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [places, setPlaces] = useState([{}]);
  const [city, setCity] = useState({});

  const setPlacesFn = (data) => {
    setPlaces(data);
  };

  const setCityFn = (data) => {
    setCity(data);
  };

  const ContextData = {
    places: places,
    setPlaces: setPlacesFn,
    city: city,
    setCity: setCityFn,
  };

  return (
    <Context.Provider value={ContextData}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
