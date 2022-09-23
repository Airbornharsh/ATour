import React from "react";
import { useParams } from "react-router-dom";

const ScannedHome = () => {
  const { cityId } = useParams();

  console.log(cityId);

  return <div>ScannedHome</div>;
};

export default ScannedHome;
