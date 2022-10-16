import React from "react";
import RoutesContainer from "./Router";

function App() {
  window.localStorage.setItem(
    "atour-backend-uri",
    "https://atoure.herokuapp.com"
  );
  // window.localStorage.setItem("atour-backend-uri", "http://localhost:4000");

  return (
    <div className="">
      <RoutesContainer />
    </div>
  );
}

export default App;
