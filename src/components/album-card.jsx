import React from "react";
import { useRouter } from "next/navigation";

function AlbumCard({ album: { collectionId, artistName, artworkUrl100, collectionName } }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/album?id=${collectionId}`);
  }
  return (
    <div 
    className="flex flex-col border border-slate-400 p-2 rounded-lg w-40 md:w-56 h-auto bg-white text-sm"
    >
      <img
        src={artworkUrl100}
        alt="collection cover"
        className="rounded-xl w-40 md:size-56 cursor-pointer"
        onClick={() => handleClick()}
      />
      <p className="font-bold mt-3">{artistName}</p>
      <p>{collectionName}</p>
    </div>
  );
}

export default AlbumCard;
