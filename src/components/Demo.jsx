import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/Helper";

const Demo = () => {
  const [number, setNumber] = useState(0);
  const [toggleTheme, setToggleTheme] = useState(false);

//   const prime = () => findPrime(number);

  const cachedResult = useMemo(() => findPrime(number), [number]);

  // Memoize the function and caches the result between re-renders

  return (
    <>
      <div
        className={
          "p-4 m-4 border border-black w-96 h-96 shadow-md " +
          (toggleTheme && " bg-gray-600 text-white")
        }
      >
        <div>
          <input
            type="number"
            className={
              "px-2 border border-black shadow-md " +
              (toggleTheme && "text-black")
            }
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <h1 className="pt-4">N Prime Number : {cachedResult}</h1>
        <button
          className="bg-orange-200 px-2"
          onClick={() => setToggleTheme(!toggleTheme)}
        >
          Toggle
        </button>
      </div>
    </>
  );
};

export default Demo;
