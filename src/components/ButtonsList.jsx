import React from "react";
import Buttons from "./Buttons";

const ButtonsList = () => {
  const list = [
    "All",
    "Music",
    "Taylor Swift",
    "Mixes",
    "Sitcoms",
    "Computer Programming",
    "Reaction Videos",
    "Cooking",
  ];
  return (
    <div className="flex">
      {list.map((items, index) => (
        <Buttons key={index} name={items} />
      ))}
    </div>
  );
};

export default ButtonsList;
