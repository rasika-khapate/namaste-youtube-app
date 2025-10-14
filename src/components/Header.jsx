import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";

import { getYoutubeSearchAPI } from "../utils/Constants";
import { addCacheResults } from "../redux/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState([]);
  const [suggestionsList, setSuggestionsList] = useState(false);

  const searchCache = useSelector((store) => store.search);

  // to see how the cache data looks like -
  // searchCache = {
  //   iphone : ["iphone 11", "iphone 13", "ihpne 13 pro max"]
  //   hello : ["hell", "hello", "hello by adele"]
  // }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        //so what we are essentially doing here is accessing seachcache's key by bracket notation cause we dont know what the key would be , its dynamic

        // VERY VERY IMPORTANT EXPLANATION

        // 2️⃣ What is searchCache[searchQuery] doing?
        // It’s using bracket notation (object property access).
        // This allows you to dynamically access an OBJECTS'S VALUE using a variable instead of a literal string.

        // Example:
        // const searchQuery = "hello";
        // searchCache[searchQuery]; // means searchCache["hello"]

        // Which returns:
        // ["hello songs", "hello movie", "hello kitty"]
        // So searchCache[searchQuery] = “give me the cached results for the current word the user is typing.”

        // 🪞 3️⃣ Why not just searchCache.searchQuery?
        // Because that would literally look for a key called "searchQuery", not the value of the variable searchQuery.

        // For example:
        // searchCache.searchQuery // undefined
        // searchCache["hello"] // correct result
        // So searchCache[searchQuery] = dynamic property access.

        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSeachSuggestionData();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSeachSuggestionData = async () => {
    const data = await fetch(getYoutubeSearchAPI(searchQuery));
    const json = await data.json();
    // console.log(json.items);
    // console.log("API Call - " + searchQuery);
    setShowSuggestions(json.items);

    // when api call is made , it means that that data isnt cached yet, so we have to cache it

    disptach(
      addCacheResults({
        [searchQuery]: json.items.map((c) => c.snippet.title),

        //You got it — we are dynamically creating (and adding) a new key to the cache object at runtime, where the key name itself comes from whatever the user typed (searchQuery).

        //1️⃣ What’s happening conceptually

        // That syntax
        // [searchQuery]: someValue  - is called a computed property name in JavaScript.

        // It means - Take the value of the variable searchQuery, and use that as the key name in this new object.
      })
    );
  };

  // console.log(showSuggestions);

  const disptach = useDispatch();

  const toggleMenuHandler = () => {
    disptach(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg">
      {/* Header */}
      <div className="flex col-span-1">
        <img
          src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png"
          alt="Hamburger-Menu"
          className="h-10 mx-4 pt-2 cursor-pointer"
          onClick={toggleMenuHandler}
          // onClick={()=> toggleMenuHandler()}
          // The above syntax is not too efficient cause You are creating a new arrow function on every render., it creates a new function instance per render
        />

        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="Youtube-Logo"
          className="h-12"
        />
      </div>
      <div className="pt-2 col-span-10 ml-[15rem]">
        <input
          type="text"
          placeholder="Please search something here.."
          className="border border-gray-700 border-solid shadow-sm w-1/2 rounded-l-full px-2 py-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setSuggestionsList(true)}
          onBlur={() => setSuggestionsList(false)}
        />
        <button className="border border-gray-700  bg-gray-200 rounded-r-full px-3 py-1">
          🔍
        </button>

        {suggestionsList && (
          <div className="w-96 px-4 py-2 mt-[1px] fixed bg-white rounded-lg shadow-inner shadow-gray-400">
            <ul>
              {showSuggestions.map((item) => (
                <li key={item.etag} className="px-2 py-1">
                  🔍 {typeof item === "string" ? item : item?.snippet?.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Your crash happens because:

showSuggestions is sometimes an array of strings (from cache),

but your code expects objects with snippet.title.

Fix: either store the same structure consistently, or check typeof item === "string" before accessing item.snippet.title. */}
      <div className="col-span-1">
        <img
          src="https://thumbs.dreamstime.com/b/female-user-icon-long-shadow-white-background-235751029.jpg"
          alt="user-icon"
          className="w-10 justify-self-center"
        />
      </div>
    </div>
  );
};

export default Header;
