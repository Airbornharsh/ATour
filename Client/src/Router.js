import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ScannedHome from "./Pages/ScannedHome";

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/:cityId"} element={<ScannedHome />} />
    </Routes>
  );
};

export default RoutesContainer;
