import { Genre } from "@/types/genre";
import { Movie } from "@/types/movie";
import { Search } from "@/components/home/search";
import { Header } from "@/components/shared/header";
import { getSearch } from "@/services/movies/getSearch";
import { getMovies } from "@/services/movies/getMovies";
import { LoaderCircle } from "lucide-react";
import { GetStaticProps } from "next";
import { getMovieGenres } from "@/services/movies/getMovieGenres";
import { MoviePreviewCard } from "@/components/home/movie-preview";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface HomeProps {
  movies: Movie[];
}

export default function Home({ movies: initialMovies }: HomeProps) {
  const router = useRouter();
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (initialMovies.length > 0) {
      setLoading(false);
    }
  }, [initialMovies]);

  const handleSearch = async () => {
    if (query.trim()) {
      setLoading(true);

      const data = await getSearch({
        query: query,
        include_adult: false,
        language: "en-US",
      });

      const genreResponse = await getMovieGenres({
        language: "en-US",
      });

      const genreMap: Record<number, string> = (
        genreResponse.genres || []
      ).reduce((acc: Record<number, string>, genre: Genre) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {});

      const movies: Movie[] = (data?.results || []).map((movie: Movie) => ({
        ...movie,
        genres: movie.genre_ids
          ? movie.genre_ids.map((id) => genreMap[id]).filter(Boolean)
          : [],
      }));

      setMovies(movies);
      setLoading(false);

      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, search: query },
        },
        undefined,
        { shallow: true }
      );
    } else {
      setMovies(initialMovies);

      const { search, ...restQuery } = router.query;
      router.push(
        {
          pathname: router.pathname,
          query: restQuery,
        },
        undefined,
        { shallow: true }
      );
    }
  };

  return (
    <>
      <Header title="Home Page | CineCompass" />
      <main className="min-h-screen flex flex-col items-center py-14 space-y-10">
        <Search onSearch={handleSearch} query={query} setQuery={setQuery} />
        {loading ? (
          <p className="flex items-center text-muted-foreground">
            <LoaderCircle className="animate-spin mr-2" /> Fetching movies
          </p>
        ) : (
          <section className="w-full gap-6 grid grid-cols-2">
            {(movies || []).map((movie) => (
              <MoviePreviewCard
                key={movie.id}
                movie={movie}
                genres_display={movie.genres?.join(", ") || ""}
              />
            ))}
          </section>
        )}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const movies =
    (await getMovies({
      include_adult: false,
      include_video: false,
      language: "en-US",
      page: 1,
      sort_by: "popularity.desc",
    })) || [];

  return {
    props: {
      movies,
    },
    revalidate: 60,
  };
};
