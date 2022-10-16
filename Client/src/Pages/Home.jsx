import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Home = () => {
  const [cities, setCities] = useState([{ name: "" }]);
  const Navigate = useNavigate();

  useEffect(() => {
    const onLoad = async () => {
      try {
        const citiesData = await axios.get("http://localhost:4000/cities");
        setCities(citiesData.data);
      } catch (e) {
        console.log(e);
      }
    };

    onLoad();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <div className="flex  h-[calc(100vh-3rem)] w-[90vw] max-w-[80rem] pt-10">
        <ul>
          {cities.map((cityData) => {
            return (
              <li
                className="p-3 py-2 my-1 text-white cursor-pointer bg-slate-400"
                onClick={() => {
                  Navigate(`/${cityData.cityId}`);
                }}
              >
                {cityData.name}
              </li>
            );
          })}
        </ul>

        {/* <button
          className="w-20 py-1 mr-2 font-semibold border-2 rounded-sm shadow-lg text-Color1 border-Color1"
          onClick={() => {
            Navigate("/");
          }}
        >
          Tourists
        </button>
        <button className="w-20 py-1 ml-2 text-white border-2 rounded-sm shadow-lg bg-Color1 border-Color1">
          Scuplture
        </button> */}
      </div>
    </div>
  );
};

export default Home;
