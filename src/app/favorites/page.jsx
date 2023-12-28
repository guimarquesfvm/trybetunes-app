"use client";
import SongsList from "@/components/album-page/songs-list";
import { TunesContext } from "@/context/tunes-context";
import React, { useContext } from "react";

function Favorites() {
  const { favorites } = useContext(TunesContext);

  return (
    <>
      <div className="flex items-center justify-center flex-1">
        <h1 className=" text-2xl lg:text-4xl text-white font-bold">Favorite Songs</h1>
      </div>
      <div className="h-2/3 w-full bg-white  overflow-scroll">
        <div className="flex items-center justify-center h-full w-full">
          <SongsList songs={favorites} />
        </div>
      </div>
    </>
  );
}

export default Favorites;
