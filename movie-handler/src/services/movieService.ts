import { OmdbResponse } from "../models/OmdbResponse";

export const getMovies = async () => {
  const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=harry");
  const data: OmdbResponse = await response.json();

  return data.Search;
};
