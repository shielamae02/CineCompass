import Image from "next/image";
import { Movie } from "@/types/movie";
import { Badge } from "@/components/shared/badge";
import { Header } from "@/components/shared/header";
import { useRouter } from "next/router";
import { getMovieDetails } from "@/services/movies/getMovieDetails";
import { GetServerSideProps } from "next";
import { ProductionCompanyCard } from "@/components/details/prod-company";
import { ArrowLeft, Calendar, ChartColumn, Star, Users } from "lucide-react";

interface DetailsProps {
  movie: Movie;
}

export default function DetailsPage({ movie }: DetailsProps) {
  const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
  const router = useRouter();

  return (
    <>
      <Header title="Movie Details | CineCompass" />
      <main className="bg-gray-100 min-h-screen rounded-tl-xl rounded-tr-xl text-zinc-700 pb-4">
        <div className="relative h-[60vh] w-full ">
          <div className="inset-0 absolute bg-black/60 z-10" />
          <Image
            height={1080}
            width={1920}
            src={`${IMAGE_URL}${movie.backdrop_path}`}
            alt="Image"
            className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
          />

          <div className="absolute top-0 left-0 w-full z-20">
            <div className="container mx-auto px-4 py-6">
              <button
                onClick={() => router.back()}
                className="text-muted-foreground hover:text-white flex items-center"
              >
                <ArrowLeft className="mr-2 size-4" />
                Back
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-32 relative z-20">
          <div className="bg-white rounded-xl max-w-4xl mx-auto p-4 space-y-5 shadow-md">
            <Image
              height={1080}
              width={1920}
              src={`${IMAGE_URL}${movie.poster_path}`}
              alt="Image"
              className="w-64 rounded-lg object-cover"
            />
            <div className="flex-col text-black space-y-3 flex-1">
              <h2 className="text-2xl font-semibold">{movie.title}</h2>
              <div className="space-x-5 flex [&>p]:flex [&>p]:items-center [&>p]:text-sm [&>p]:text-muted-foreground">
                <p className="flex">
                  <Calendar className="mr-1 size-3.5" />{" "}
                  {new Date(movie.release_date).toDateString()}
                </p>
                <p>
                  <Star className="mr-1 size-3.5 text-yellow-400 fill-yellow-400" />
                  {movie.vote_average.toFixed(2)}
                </p>
                <p>
                  <Users className="mr-1 size-3.5" />
                  {movie.vote_count.toLocaleString()} votes
                </p>
                <p>
                  <ChartColumn className="mr-1 size-3.5" />
                  Popularity: {movie.popularity}
                </p>
              </div>
              <div className="flex space-x-2">
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <Badge key={genre.id} title={genre.name} />
                  ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2.5">
                <h2 className="font-semibold"> Overview</h2>
                <p className="text-sm">{movie.overview}</p>
              </div>
            </div>
            {movie.production_companies && (
              <div className="space-y-2.5">
                <h2 className="font-semibold">Production Companies</h2>
                <div className="grid grid-cols-3 gap-2">
                  {movie.production_companies.map((company) => (
                    <ProductionCompanyCard key={company.id} {...company} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<DetailsProps> = async (
  context
) => {
  const { id } = context.params as { id: string };

  const response = await getMovieDetails(id);
  const movie = response;

  return {
    props: {
      movie,
    },
  };
};
