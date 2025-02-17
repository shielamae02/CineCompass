import qs from "qs";

interface Props {
  query: string;
  include_adult: boolean;
  language: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_BEARER = process.env.NEXT_PUBLIC_API_BEARER;

export const getSearch = async (props: Props) => {
  try {
    const queryParams = qs.stringify(
      {
        query: props.query,
        include_adult: props.include_adult,
        language: "en-US",
        page: 1,
      },
      {
        arrayFormat: "repeat",
      }
    );

    const response = await fetch(`${API_URL}/3/search/movie?${queryParams}`, {
      headers: {
        Authorization: `Bearer ${API_BEARER}`,
        accept: "application/json",
      },
    });
    const data = await response.json();

    if (data.success === false) {
      throw new Error("Failed to fetch search results.");
    }

    return data;
  } catch (error) {
    console.error("Error fetching search results: ", error);
    return null;
  }
};
