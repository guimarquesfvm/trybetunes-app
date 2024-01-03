"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";

export const TunesContext = createContext();


const TunesProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");

  const userMock = {
    name: "Guest",
    email: "guest@email.com",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
    maiores voluptas minima cum porro deleniti distinctio tempora
    doloremque quasi. Incidunt voluptate itaque suscipit aperiam dicta
    similique eveniet, optio omnis placeat!`,
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
  }
  const [user, setUser] = useState(userMock);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // made that way to avoid localStorage reference error in terminal, NextJS was setting states before rendering it
    
    setUser(JSON.parse(localStorage.getItem('user')) || userMock);
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
  }, [])

  const queryClient = new QueryClient();

  const handleFavorite = (song) => {
    if (favorites.some((el) => el.previewUrl === song.previewUrl)) {
      const rmSong = favorites.filter((el) => el.previewUrl !== song.previewUrl);
      setFavorites(rmSong);
    } else {
      const addSong = [...favorites, song];
      setFavorites(addSong);
    }
  };

  const isFavorited = (song) => favorites.some((el) => el.previewUrl === song.previewUrl);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const userLS = JSON.parse(localStorage.getItem('user'));
    if (!userLS) {
      localStorage.setItem('user', JSON.stringify(userMock));
    }
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <QueryClientProvider client={ queryClient }>
      <TunesContext.Provider value={{
        inputValue,
        setInputValue,
        query,
        setQuery,
        favorites,
        setFavorites,
        handleFavorite,
        isFavorited,
        user,
        setUser
      }}>
        {children}
      </TunesContext.Provider>
    </QueryClientProvider>
  );
};

export default TunesProvider;
