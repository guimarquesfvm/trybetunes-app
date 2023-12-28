"use client";
import SongsList from "@/components/album-page/songs-list";
import useAlbum from "@/hooks/useAlbum";
import React from "react";

function Page({ searchParams: { id } }) {
  const { data } = useAlbum(id);

  return (
    <>
      <div className="flex items-center justify-center flex-1 max-md:flex-col">
      <div className=" relative xl:top-40 xl:right-[16%]">
          <img src={data[0]?.artworkUrl100} alt="" className="size-44 md:size-56 xl:size-80 rounded-lg shadow-lg shadow-slate-700"/>
        </div>
        <div className=" relative max-md:mt-4 max-md:text-center max-xl:ml-4 xl:top-28 xl:right-0 text-white w-72">
          <h1 className="text-xl font-extrabold">{data[0]?.collectionName}</h1>
          <p className=" text-lg">{data[0]?.artistName}</p>
        </div>
      </div>
      <div className="h-2/3 w-full bg-white overflow-scroll flex justify-end">
        <SongsList songs={data?.slice(1)} />
      </div>
    </>
  );
}

export default Page;
