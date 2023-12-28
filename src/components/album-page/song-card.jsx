"use client";
import React, { useContext } from "react";
import FavoriteButtons from "../favorite-buttons";
import { TunesContext } from "@/context/tunes-context";

function SongCard({ song }) {
  const { handleFavorite, isFavorited } = useContext(TunesContext);
  return (
    <li className="flex border-b-2 w-full items-center justify-between flex-col">
      <p className=" text-lg">{song.trackName}</p>
      <div className="flex justify-center w-full p-4">
        <audio src={song.previewUrl} controls className=" w-full">
          <track kind="captions" />O seu navegador não suporta o elemento{" "}
          <code>audio</code>
        </audio>
        <button className="p-4" onClick={() => handleFavorite(song) }>
          {
            isFavorited(song) ? <FavoriteButtons.FavoriteFilled /> : <FavoriteButtons.FavoriteNotFilled />
          }
        </button>
      </div>
    </li>
  );
}

export default SongCard;
