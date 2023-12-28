"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";

export const TunesContext = createContext();


const TunesProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={ queryClient }>
      <TunesContext.Provider value={{
        inputValue,
        setInputValue,
        query,
        setQuery
      }}>
        {children}
      </TunesContext.Provider>
    </QueryClientProvider>
  );
};

export default TunesProvider;
