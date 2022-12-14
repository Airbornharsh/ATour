import React from "react";

const NavBar = (props) => {
  return (
    <div className="flex justify-center w-screen h-12 shadow-lg bg-Color1">
      <div className="w-[80vw] max-w-[80rem] flex items-center justify-between">
        <h2 className="text-[1.2rem]">ATour</h2>
        <div className="flex items-center">
          <h3 className="mr-2">{props.name && [props.name]}</h3>
          <div className="w-8 h-8 ml-2 bg-blue-500 rounded-[50%]"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
