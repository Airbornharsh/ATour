import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TouristPlaceCard = (props) => {
  const Navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const ToggleVisible = () => {
    if (isVisible) setIsVisible(false);
    else setIsVisible(true);
  };

  return (
    <li
      className={"w-[10rem] flex flex-col justify-center"}
      onMouseEnter={ToggleVisible}
      onMouseLeave={ToggleVisible}
      onClick={() => {
        Navigate(`/${props.place.cityId}/${props.place.placeId}`);
      }}
    >
      <span className="relative">
        <img
          src={
            "https://odishatour.in/wp-content/uploads/2020/12/Phurlijharan-Waterfall-Bhawanipatna-Kalahandi-3.jpg"
          }
          alt={props.place.name}
          className={"h-52 w-[10rem] object-cover "}
        />
        {
          <span className="min-w-[10rem] absolute z-10 bottom-0 flex justify-center items-center left-[50%] translate-x-[-50%] h-48  bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]">
            <button className="p-1 h-7 bg-white text-[0.8rem] w-[6rem] rounded absolute bottom-3">
              {props.place.category}
            </button>
          </span>
        }
      </span>
      <h3 className="text-[rgba(255,255,255,0.8)] text-[0.8rem] text-center font-semibold w-[9.8rem] mt-1 text-black">
        {props.place.name && props.place.name}
      </h3>
    </li>
  );
};

export default TouristPlaceCard;
