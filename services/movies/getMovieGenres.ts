import qs from "qs";

interface Props {
  language: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getMovieGenres = async (props: Props) => {
  try {
    const queryParams = qs.stringify(
      {
        api_key: API_KEY,
        language: props.language,
      },
      {
        arrayFormat: "repeat",
      }
    );

    const response = await fetch(
      `${API_URL}/3/genre/movie/list?${queryParams}`
    );

    const data = await response.json();

    if (data.success === false) {
      throw new Error("Failed to fetch movie genres.");
    }

    return data;
  } catch (error) {
    console.error("Error fetching movie genres: ", error);
    return null;
  }
};
