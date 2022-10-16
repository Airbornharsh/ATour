import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ScannedHome from "./Pages/ScannedHome";
import TouristPlace from "./Pages/TouristPlace";

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/:cityId"} element={<ScannedHome />} />
      <Route path={"/:cityId/:placeId"} element={<TouristPlace />} />
    </Routes>
  );
};

export default RoutesContainer;
