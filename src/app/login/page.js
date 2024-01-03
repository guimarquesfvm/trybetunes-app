"use client";
import LogoText from "@/assets/icons/logo-text";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { TunesContext } from "@/context/tunes-context";

function Login() {
  const {user, setUser} = useContext(TunesContext);

  const router = useRouter();

  const handleNavigateHome = () => {
    router.push("/");
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className=" w-4/5 md:w-3/5 h-2/3 bg-white rounded-3xl flex flex-col justify-around items-center">
        <div>
          <LogoText size={"size-64 lg:size-96"} />
        </div>
        <div className="flex flex-col w-3/4 gap-2">
          <input
            type="text"
            placeholder="what's your name?"
            className="border-2 border-[--btnblue] rounded-full h-10 text-center text-[--btnblue] placeholder:text-[--btnblue] text-xl"
            onChange={(e) => setUser({...user, name: e.target.value})}
            value={user.name}
          />
          <button 
            className="bg-[--btnblue] rounded-full h-10 text-white font-bold disabled:bg-slate-400 text-xl"
            disabled={user.name.length < 3}
            onClick={() => handleNavigateHome()}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
