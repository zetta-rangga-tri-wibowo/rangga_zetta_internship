export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  genre: string;
  artist: number[];
  plot: string;
  poster: string;
  rating: number;
  votes: number;
  runtime: string;
  imdbID: string;
  type: string;
  response: string;
}

export interface Artist {
  id: number;
  name: string;
  birth: string;
  country: string;
  description: string;
  photo: string;
  movieId: number[];
}
