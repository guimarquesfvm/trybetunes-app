"use client"
import FavoritesIcon from '@/assets/icons/favorites-icon';
import Logo from '@/assets/icons/logo';
import LogoText from '@/assets/icons/logo-text';
import ProfileIcon from '@/assets/icons/profiles-icon';
import SearchIcon from '@/assets/icons/search-icon';
import { TunesContext } from '@/context/tunes-context';
import { useRouter, usePathname } from 'next/navigation';
import React, { useContext } from 'react'

function SideBar() {
  const { user } = useContext(TunesContext);
  const router = useRouter();

  const handleNavigateHome = () => {
    router.push("/");
  };

  const handleNavigateFavorites = () => {
    router.push("/favorites");
  }

  const handleNavigateProfile = () => {
    router.push("/profile");
  }

  const hideSideBar = usePathname() === "/login"

  return (
    !hideSideBar &&
    <div className="h-full w-16 sm:w-64 bg-white flex flex-col justify-between items-center">
      <div className="my-7 cursor-pointer" onClick={() => handleNavigateHome()}>
        <span className="max-sm:hidden"><LogoText size={"size-48"}/></span>
        <span className="sm:hidden"><Logo /></span>
      </div>
      <nav className="flex gap-12 flex-col text-base">
        <div className="flex gap-6 items-center cursor-pointer" onClick={() => handleNavigateHome()}>
          <SearchIcon />
          <span className="max-sm:hidden">Search</span>
        </div>
        <div className="flex gap-6 items-center cursor-pointer" onClick={() => handleNavigateFavorites()}>
          <FavoritesIcon />
          <span className="max-sm:hidden">Favorites</span>
        </div>
        <div className="flex gap-6 items-center cursor-pointer" onClick={() => handleNavigateProfile()}>
          <ProfileIcon />
          <span className="max-sm:hidden">Profile</span>
        </div>
      </nav>
      <div className="flex gap-6 items-center mb-7 cursor-pointer" onClick={() => handleNavigateProfile()}>
        <img src={user.profilePic} alt="" className="size-10" />
        <span className="max-sm:hidden">{user.name}</span>
      </div>
    </div>
  )
}

export default SideBar