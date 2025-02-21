import { IMovie } from "./Movies";

type MovieProps = {
  movie: IMovie;
};

export const Movie = (props: MovieProps) => {
  return (
    <div>
      <h3>{props.movie.Title}</h3>
      <img src={props.movie.Poster} alt={props.movie.Title} />
    </div>
  );
};
