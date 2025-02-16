// export type Movie = {
//   Title: string;
//   Year: string;
//   Rated: string;
//   Released: string;
//   Runtime: string;
//   Genre: string;
//   Director: string;
//   Writer: string;
//   Actors: string;
//   Plot: string;
//   Language: string;
//   Country: string;
//   Awards: string;
//   Poster: string;
//   Ratings: Rating[];
//   Metascore: string;
//   imbRating: string;
//   imbID: string;
//   Type: string;
//   DVD: string;
//   BoxOffice: string;
//   Production: string;
//   Website: string;
// };

// export type Rating = {
//   source: string;
//   value: string;
// };

export type Movie = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  genres?: Genre[];
  genres_display: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
