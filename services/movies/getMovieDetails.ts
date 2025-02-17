const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_BEARER = process.env.NEXT_PUBLIC_API_BEARER;

export const getMovieDetails = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/3/movie/${id}?language=en-US`, {
      headers: {
        Authorization: `Bearer ${API_BEARER}`,
        accept: "application/json",
      },
    });

    const data = await response.json();

    if (data.success === false) {
      return { notFound: true };
    }

    return data;
  } catch (error) {
    console.log("Error fetching movie details: ", error);
    return null;
  }
};
