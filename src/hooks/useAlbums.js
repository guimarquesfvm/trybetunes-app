"use client";
import { TunesContext } from '@/context/tunes-context';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';

const getAlbums = async (artist) => {
  const artistNameURL = encodeURI(artist).replaceAll('%20', '+');
  const fetchURL = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;

  const response = await fetch(fetchURL);
  const data = await response.json();
  return data;
}



const useAlbums = () => {
  const { query } = useContext(TunesContext);
  const { data, isLoading } = useQuery({
    queryKey: ['artists', query],
    queryFn: () => getAlbums(query),
    enabled: !!query,
  });
  
  // se a requisição retornar um array vazio
  if (data?.results.length === 0) {
    return {
      data: [],
      isLoading,
      isNotFound: true
    };
  }

  return {
    data: data,
    isLoading,
    isNotFound: false
  }
};

export default useAlbums;
