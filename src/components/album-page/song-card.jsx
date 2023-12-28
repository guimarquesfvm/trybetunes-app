import React from "react";
import FavoriteButtons from "../favorite-buttons";

function SongCard({ song }) {
  return (
    <li className="flex border-b-2 w-full items-center justify-between flex-col">
      <p className=" text-lg">{song.trackName}</p>
      <div className="flex justify-center w-full">
        <audio src={song.previewUrl} controls className=" w-full">
          <track kind="captions" />O seu navegador não suporta o elemento{" "}
          <code>audio</code>
        </audio>
        <button className="p-4"><FavoriteButtons.FavoriteNotFilled /></button>
      </div>
    </li>
  );
}

export default SongCard;
