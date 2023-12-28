"use client";
import { useQuery } from "@tanstack/react-query";

const getAlbum = async (id) => {
  const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  const requestJson = await request.json();
  return requestJson.results;
}

const useAlbum = (id) => {
  const { data } = useQuery({
    queryKey: ['albums', id],
    queryFn: () => getAlbum(id),
    enabled: !!id,
  })

  if (!data) {
    return {
      data: [],
      error: true
    }
  }
  return {
    data,
    error: false
  }
}

export default useAlbum;
