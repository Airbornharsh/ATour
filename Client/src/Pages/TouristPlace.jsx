import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Context from "../Context/Context";
import { RiExternalLinkFill } from "react-icons/ri";
import Arrow from "../Utils/Photo/longHair.png";

const TouristPlace = () => {
  const [place, setPlace] = useState({});
  const Ctx = useRef(useContext(Context));

  const { placeId } = useParams();

  useEffect(() => {
    Ctx.current.places.forEach((place) => {
      if (place.placeId === placeId) {
        setPlace(place);
        return;
      }
    });
  }, [Ctx.places, placeId]);

  return (
    <div className="flex flex-col items-center">
      <NavBar name={Ctx.current.city.name} />
      <div className="w-[80vw] max-w-[80rem] mt-10 flex flex-wrap">
        <div className="relative flex flex-col">
          <img
            src="https://odishatour.in/wp-content/uploads/2020/12/Phurlijharan-Waterfall-Bhawanipatna-Kalahandi-3.jpg"
            alt={place.name}
            className={"h-[22rem] w-[35rem] object-cover"}
          />
          <a href={place.mapLink}>
            <RiExternalLinkFill
              color="white"
              size={"1.7rem"}
              className="absolute right-1 top-1"
            />
          </a>
          <div className="flex flex-col items-center mt-3">
            <h2 className="font-semibold">{place.name}</h2>
            {place.city && place.district && place.state && place.country && (
              <p className="font-medium">
                {"("}Located at {place.city},Dist - {place.district},
                {place.state},{place.country + ")"}
              </p>
            )}
            <p className="w-[35rem] px-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              corrupti? Molestias quas facere rerum quos illo maxime quisquam
              dolores optio ullam odio praesentium iste perferendis dicta quia
              distinctio a doloribus, quo vero! Sit corrupti alias, perspiciatis
              minus numquam, repellat unde iusto commodi ipsam soluta quod.
            </p>
          </div>
        </div>
        <div className="w-[40rem] p-3 pt-0">
          {place.characteristics && (
            <ul className="flex">
              {place.characteristics.map((characteristic, index) => {
                return (
                  <li
                    key={index}
                    className={
                      "h-14 bg-Color1 flex  flex-col justify-center items-start p-2 px-3 mr-2"
                    }
                    style={{
                      width: "max-content",
                    }}
                  >
                    <h3>{characteristic.for}</h3>
                    <h3 className="text-[0.8rem]">{characteristic.value}</h3>
                  </li>
                );
              })}
            </ul>
          )}
          {place.time && (
            <div className="flex items-center">
              <p className="max-w-[16rem] h-16 overflow-hidden bg-Color1 p-2">
                {place.time.from}
              </p>
              <div className="relative mx-3">
                <img src={Arrow} alt="Arrow" className="h-20" />
                <p className="top-2 left-[50%] translate-x-[-50%] absolute">
                  {place.time.distance}
                </p>
                <p className="bottom-2 left-[50%] translate-x-[-50%] absolute">
                  {place.time.duration}
                </p>
              </div>

              <p className="p-2 bg-Color1">{place.name}</p>
            </div>
          )}
          {place.tollFee && (
            <b>
              Rs {place.tollFee.fee} for {place.tollFee.for} Person
            </b>
          )}
          {place.localLocation && (
            <div>
              <b>Local Advice:-</b>
              <p>{place.localLocation}</p>
            </div>
          )}
          {place.rules && (
            <ul>
              <b>Rules</b>
              {place.rules.map((rule, index) => {
                return <li key={index}># {rule}</li>;
              })}
            </ul>
          )}
          {place.bestTime && <b>Best Time To Visit {place.bestTime}</b>}
        </div>
      </div>
    </div>
  );
};

export default TouristPlace;
