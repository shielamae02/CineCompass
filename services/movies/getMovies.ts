import qs from "qs";
import { Genre } from "@/types/genre";
import { Movie } from "@/types/movie";
import { getMovieGenres } from "./getMovieGenres";

interface Props {
  include_adult: boolean;
  include_video: boolean;
  language: string;
  page: number;
  sort_by: "popularity.desc" | "popularity.asc" | "title.asc" | "title.desc";
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getMovies = async (props: Props) => {
  try {
    const queryParams = qs.stringify(
      {
        api_key: API_KEY,
        include_adult: props.include_adult,
        include_video: props.include_video,
        language: props.language,
        page: props.page,
        sort_by: props.sort_by,
      },
      {
        arrayFormat: "repeat",
      }
    );

    const movieResponse = await fetch(
      `${API_URL}/3/discover/movie?${queryParams}`
    );
    const movieData = await movieResponse.json();

    if (movieData.success === false) {
      throw new Error("Failed to fetch movies.");
    }

    const genreResponse = await getMovieGenres({
      language: "en-US",
    });

    const genreMap: Record<number, string> = (
      genreResponse.genres || []
    ).reduce((acc: Record<number, string>, genre: Genre) => {
      acc[genre.id] = genre.name;
      return acc;
    }, {});

    const movies: Movie[] = (movieData || []).results.map((movie: Movie) => ({
      ...movie,
      genres: movie.genre_ids
        ? movie.genre_ids.map((id) => genreMap[id]).filter(Boolean)
        : [],
    }));

    return movies;
  } catch (error) {
    console.error("Error fetching movies: ", error);
    return null;
  }
};
