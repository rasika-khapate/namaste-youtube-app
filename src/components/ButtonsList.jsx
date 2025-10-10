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
      {/* <Buttons name="All" />
      <Buttons name="Music" />
      <Buttons name="Taylor Swift" />
      <Buttons name="mixes" />
      <Buttons name="Sitcoms" />
      <Buttons name="Computer Programming" />
      <Buttons name="Reaction Videos" />
      <Buttons name="Cooking" /> */}

      {list.map((items, index) => (
        <Buttons key={index} name={items} />
      ))}
    </div>
  );
};

export default ButtonsList;
