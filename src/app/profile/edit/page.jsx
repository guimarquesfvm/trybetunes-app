"use client";
import { TunesContext } from "@/context/tunes-context";
import React, { useContext } from "react";

function EditProfile() {
  const { user, setUser } = useContext(TunesContext);
  return (
    <>
      <div className="flex items-center justify-center flex-1 max-md:flex-col"></div>
      <div className="h-2/3 w-full bg-white overflow-visible flex justify-center">
        <div className="flex flex-col max-w-[90%] lg:flex-row text-[#3D495C]">
          <div className="absolute max-xl:top-4 xl:relative xl:bottom-28 flex xl:flex-col items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
              alt=""
              className=" rounded-full size-60 shadow-lg shadow-slate-700 bg-white"
            />
            <button className="text-sm px-2 md:px-8 py-1 border border-black rounded-sm bg-white flex items-center">Insert link</button>
          </div>

          <div className="flex-1 lg:ml-9 max-w-lg flex flex-col gap-4 mt-4 items-start">
            <div>
              <h2 className="text-2xl font-bold">Name</h2>
              <p>Feel free to use your social name</p>
              <input
                type="text"
                className="border-b-2 w-72 h-9 p-2 placeholder:text-sm"
                placeholder="My name is..."
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Email</h2>
              <p>Insert an email you often use</p>
              <input
                type="email"
                className="border-b-2 w-72 h-9 p-2 placeholder:text-sm"
                placeholder="yourname@email.com"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Description</h2>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="border-b-2 p-2 placeholder:text-sm lg:w-[490px] h-28 resize-none"
                placeholder="About you"
                value={user.description}
                onChange={(e) => setUser({ ...user, description: e.target.value })}
              ></textarea>
            </div>
            <button className="rounded-full bg-[var(--btnblue)] px-6 py-3 text-white font-bold">
              SAVE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
