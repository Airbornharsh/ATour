import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Home = () => {
  const Navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex items-center justify-center h-[calc(100vh-3rem)] ">
        <button
          className="w-20 py-1 mr-2 font-semibold border-2 rounded-sm shadow-lg text-Color1 border-Color1"
          onClick={() => {
            Navigate("/");
          }}
        >
          Tourists
        </button>
        <button className="w-20 py-1 ml-2 text-white border-2 rounded-sm shadow-lg bg-Color1 border-Color1">
          Scuplture
        </button>
      </div>
    </div>
  );
};

export default Home;
