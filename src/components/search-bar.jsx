"use client";
import React from "react";

function SearchBar() {

  return (
    <div>
      <input
        type="text"
        placeholder="ARTIST NAME"
        className=" rounded-full px-4 py-2 sm:w-80 lg:w-96 h-10 z-50 bg-[#FFFFFF80] placeholder-white"
      />
      <button
        className=" rounded-full px-4 py-2 bg-[#00D5E2] ml-2 text-center text-white"
      >
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
