"use client";
import { TunesContext } from "@/context/tunes-context";
import React, { useContext } from "react";

function Profile() {
  const { user } = useContext(TunesContext);
  return (
    <>
      <div className="flex items-center justify-center flex-1 max-md:flex-col"></div>
      <div className="h-2/3 w-full bg-white overflow-visible flex justify-center">
        <div className="flex flex-col max-w-[90%] lg:flex-row text-[#3D495C]">
          <div className="absolute max-xl:top-4 xl:relative xl:bottom-28 flex xl:flex-col items-center">
            <img
              src={user.profilePic}
              alt=""
              className=" rounded-full size-60 shadow-lg shadow-slate-700 bg-white"
            />
          </div>
          
          <div className="flex-1 lg:ml-9 max-w-lg flex flex-col gap-4 mt-4 items-start">
            <div>
              <h2 className="text-2xl font-bold">Name</h2>
              <p>{user.name}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Email</h2>
              <p>{user.email}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Description</h2>
              <p>{user.description}</p>
            </div>
            <button className="rounded-full bg-[var(--btnblue)] px-6 py-3 text-white font-bold">
              EDIT PROFILE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
