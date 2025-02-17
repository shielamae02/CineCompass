import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Movie } from "@/types/movie";

type MoviePreviewCardProps = {
  movie: Movie;
};

const MoviePreviewCard = ({
  movie = {} as Movie,
  genres_display,
}: Partial<MoviePreviewCardProps> & { genres_display: string }) => {
  const API_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
  const poster_path = movie.poster_path;

  const date = movie.release_date;
  const year = new Date(date).getFullYear();

  const detailsLink = `movies/${movie.id}`;

  return (
    <Link href={detailsLink} passHref>
      <article className="bg-white text-black p-4 rounded-lg space-y-6">
        <div className="max-h-[400px] width-[500px] justify-center items-center flex bg-zinc-50 rounded-lg">
          {poster_path ? (
            <Image
              src={`${API_URL}${poster_path}`}
              width={500}
              height={600}
              alt={`${movie.title} poster`}
              className="rounded-lg"
            />
          ) : (
            <div className="">No Image Available</div>
          )}
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">{movie.title}</h3>
          <div className="space-y-0.5 text-sm">
            <div className="flex justify-between text-muted-foreground">
              {date ? <p>{year}</p> : "\u00A0"}
              {movie.vote_average && (
                <p className="flex items-center">
                  <Star className="mr-1 size-4 text-yellow-400 fill-yellow-400" />
                  {movie.vote_average}
                </p>
              )}
            </div>
            <p className="text-muted-foreground">
              {genres_display ? genres_display : "\u00A0"}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export { MoviePreviewCard };
