import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import { getMovies } from "../services/movieService";

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getMovies();

      setMovies(data);
      setHasFetched(true);
    };

    if (hasFetched) return;

    getData();
  });

  return (
    <>
      {movies
        .filter((m) => m.Title.toLowerCase().indexOf("the") >= 0)
        .sort((m1, m2) => {
          if (m1.Year > m2.Year) return 1;
          else {
            if (m1.Year === m2.Year) return 0;
            return -1;
          }
        })
        .map((m) => {
          return <div key={m.imdbID}>{m.Title}</div>;
        })}
    </>
  );
};
