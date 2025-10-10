import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isOpen = useSelector((store) => store.app.isMenuOpen);

  // if (!isOpen) return null;
  // early return pattern

  return (
    isOpen && (
      <div className="p-4 shadow-lg w-2/12">
        <ul>
          <li className="cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Videos</li>
        </ul>

        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li>Taylor Swift</li>
          <li>CineDesi</li>
          <li>Akshay Saini</li>
          <li>Niamh Adkins</li>
        </ul>
        <h1 className="font-bold">Explore</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    )
  );
};

export default SideBar;
