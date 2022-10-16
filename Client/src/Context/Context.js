import { createContext } from "react";

const Context = createContext({
  places: [],
  setPlaces: () => {},
  city: {},
  setCity: () => {},
});

export default Context;
