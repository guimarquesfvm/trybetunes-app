"use client";
import React from "react";
import useAlbums from "@/hooks/useAlbums";
import AlbumsList from "./albums-list";

function Results() {
  const { isLoading, data, isNotFound } = useAlbums();

  return (
    <div className="flex items-center justify-center h-full w-full">
      {
        isLoading ? (
          <p>Loading...</p>
        ) : (
          isNotFound ? <p>Artist not found...</p> : <AlbumsList albums={data?.results} />
        ) 
      }
    </div>
  );
}

export default Results;
