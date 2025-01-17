export interface IMovie {
  Title: string;
  Poster: string;
  Actors: string;
  Ratings: IRating[];
}

interface IRating {
  Source: string;
  Value: string;
}
