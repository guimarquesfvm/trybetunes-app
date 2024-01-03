import React from "react";

function Profile() {
  return (
    <>
      <div className="flex items-center justify-center flex-1 max-md:flex-col"></div>
      <div className="h-2/3 w-full bg-white overflow-visible flex justify-center">
        <div className="flex text-[#3D495C]">
          <img src="" alt="" className=" rounded-full size-60 relative bottom-28 shadow-lg shadow-slate-700" />

          <div className="flex-1 ml-9 max-w-lg flex flex-col gap-4 mt-4 items-start">
            <div>
              <h2 className="text-2xl font-bold">Name</h2>
              <p>Username</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Email</h2>
              <p>foo@bar.com</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Description</h2>
              <p>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                est lorem, fermentum nec hendrerit quis, rhoncus sed massa. Duis
                varius bibendum efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                est lorem, fermentum nec hendrerit quis, rhoncus sed massa. Duis
                varius bibendum efficitur.`}
              </p>
            </div>
            <button className="rounded-full bg-[var(--btnblue)] px-6 py-3 text-white font-bold">EDIT PROFILE</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
