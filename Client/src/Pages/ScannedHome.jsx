import axios from "axios";
import React, { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import TouristPlaceCard from "../Components/TouristPlaceCard";
import Context from "../Context/Context";

const ScannedHome = () => {
  const RefCtx = useRef(useContext(Context));
  const Ctx = useContext(Context);
  const { cityId } = useParams();

  useEffect(() => {
    const onLoad = async () => {
      try {
        const cityData = await axios.get(
          `${window.localStorage.getItem("atour-backend-uri")}/city/${cityId}`
        );
        const touristPlacesData = await axios.get(
          `${window.localStorage.getItem(
            "atour-backend-uri"
          )}/touristplaces/${cityId}`
        );
        RefCtx.current.setCity(cityData.data);
        RefCtx.current.setPlaces(touristPlacesData.data);
      } catch (e) {
        console.log(e);
      }
    };

    onLoad();
  }, [cityId]);

  return (
    <div className="flex flex-col items-center">
      <NavBar name={Ctx.city.name} />
      <ul className="flex flex-col w-[80vw] max-w-[80rem] mt-12">
        {Ctx.places &&
          Ctx.places.map((place) => {
            return <TouristPlaceCard place={place} />;
          })}
      </ul>
    </div>
  );
};

export default ScannedHome;
