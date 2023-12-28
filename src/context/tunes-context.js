"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";

export const TunesContext = createContext();


const TunesProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [user, setUser] = useState({ name: ""});

  const queryClient = new QueryClient();

  
  // made that way to avoid localStorage reference error in terminal, NextJS was setting states before rendering it 
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);


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
