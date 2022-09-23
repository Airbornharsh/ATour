import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
    </Routes>
  );
};

export default RoutesContainer;
