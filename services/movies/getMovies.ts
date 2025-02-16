import qs from "qs";

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

    const response = await fetch(`${API_URL}/3/discover/movie?${queryParams}`);
    const data = await response.json();

    if (data.success === false) {
      throw new Error("Failed to fetch movies.");
    }

    return data;
  } catch (error) {
    console.error("Error fetching movies: ", error);
    return null;
  }
};
