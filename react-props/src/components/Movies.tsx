import { Movie } from "./Movie";

export interface IMovie {
  Title: string;
  Poster: string;
  imdbID: string;
}

export const Movies = () => {
  const m: IMovie = {
    Title: "Don't look up",
    Poster: "somerandomurl",
    imdbID: "tt123456",
  };

  return (
    <>
      <h2>Movies</h2>
      <Movie movie={m} />
    </>
  );
};
