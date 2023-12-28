"use client";
import React, { useContext } from "react";
import { TunesContext } from "../context/tunes-context";

function SearchBar() {
  const { inputValue, setInputValue, setQuery } = useContext(TunesContext);
  const handleChange = (value) => {
    setInputValue(value);
  };

  const handleClick = () => {
    setQuery(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ARTIST NAME"
        className=" rounded-full px-4 py-2 sm:w-80 lg:w-96 h-10 z-50 bg-[#FFFFFF80] placeholder-white"
        onChange={(e) => handleChange(e.target.value)}
        value={inputValue}
      />
      <button
        onClick={handleClick}
        className=" rounded-full px-4 py-2 bg-[#00D5E2] ml-2 text-center text-white"
      >
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
